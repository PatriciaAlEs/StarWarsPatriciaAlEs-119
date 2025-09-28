from flask import Blueprint, request
from app import db
from models import User
from flask_jwt_extended import create_access_token

auth_bp = Blueprint("auth", __name__)

@auth_bp.post("/signup")
def signup():
    data = request.get_json()
    if not all(k in data for k in ("name","email","password")):
        return {"msg":"faltan datos"}, 400
    if User.query.filter_by(email=data["email"]).first():
        return {"msg":"email ya existe"}, 409
    u = User(name=data["name"], email=data["email"], kind=data.get("kind","particular"))
    u.set_password(data["password"])
    db.session.add(u); db.session.commit()
    token = create_access_token(identity=u.id)
    return {"token":token, "user": u.serialize()}, 201

@auth_bp.post("/login")
def login():
    data = request.get_json()
    u = User.query.filter_by(email=data.get("email")).first()
    if not u or not u.check_password(data.get("password","")):
        return {"msg":"credenciales inválidas"}, 401
    token = create_access_token(identity=u.id)
    return {"token":token, "user": u.serialize()}
