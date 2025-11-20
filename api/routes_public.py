from flask import Blueprint, jsonify, request
from models import Tech, Project, User
from flask_jwt_extended import jwt_required, get_jwt_identity
import smtplib
from email.message import EmailMessage
import os
from extensions import db



pub_bp = Blueprint("public", __name__)

@pub_bp.get("/techs")
def techs():
    data = [t.serialize() for t in Tech.query.order_by(Tech.name).all()]
    return jsonify(data), 200

@pub_bp.get("/projects")
def projects():
    data = [p.serialize() for p in Project.query.order_by(Project.id.desc()).all()]
    return jsonify(data), 200

@pub_bp.post("/test-contact")
def test_contact():
    data = request.get_json()
    print(f"[TEST] Datos recibidos: {data}")
    
    if not data:
        return jsonify({"msg": "No data received"}), 400
        
    subject = data.get("subject")
    message = data.get("message")

    print(f"[TEST] Subject: '{subject}' (tipo: {type(subject)})")
    print(f"[TEST] Message: '{message}' (tipo: {type(message)})")
    
    return jsonify({
        "msg": "Test successful",
        "received_subject": subject,
        "received_message": message,
        "subject_type": str(type(subject)),
        "message_type": str(type(message))
    }), 200

@pub_bp.post("/contact-debug")
@jwt_required()
def send_contact_message():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    
    data = request.get_json()
    subject = data.get("subject")
    message = data.get("message")

    if not subject or not message:
        return jsonify({"msg": "Todos los campos son requeridos"}), 400

    # Guardar en la base de datos
    from models import ContactMessage
    new_msg = ContactMessage(
        user_name=user.name,
        user_email=user.email,
        subject=subject,
        message=message
    )
    db.session.add(new_msg)
    db.session.commit()

    print("[CONTACT] Mensaje guardado correctamente en la BD")

    return jsonify({"msg": "Mensaje recibido correctamente"}), 200
