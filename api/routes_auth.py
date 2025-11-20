from flask import Blueprint, request, jsonify
from extensions import db
from models import User
from flask_jwt_extended import create_access_token

auth_bp = Blueprint("auth", __name__)

@auth_bp.post("/signup")
def signup():
    data = request.get_json()
    
    # Verificar si el email ya existe
    existing_user = User.query.filter_by(email=data["email"]).first()
    if existing_user:
        return jsonify({"msg": "El email ya está registrado"}), 400
    
    user = User(name=data["name"], email=data["email"], kind=data.get("kind","particular"))
    user.set_password(data["password"])
    db.session.add(user)
    db.session.commit()
    
    # Crear token y devolver usuario como en login
    token = create_access_token(identity=str(user.id))

    return jsonify({"token": token, "user": user.serialize()}), 201

@auth_bp.post("/login")
def login():
    data = request.get_json()
    
    if not data.get("email") or not data.get("password"):
        return jsonify({"msg": "Email y contraseña son requeridos"}), 400
    
    user = User.query.filter_by(email=data["email"]).first()
    if not user or not user.check_password(data["password"]):
        return jsonify({"msg": "Credenciales inválidas"}), 401
        
    token = create_access_token(identity=str(user.id))
    return jsonify({"token": token, "user": user.serialize()}), 200
