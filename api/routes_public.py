from flask import Blueprint
from models import Tech, Project

pub_bp = Blueprint("public", __name__)

@pub_bp.get("/techs")
def techs():
    return [t.serialize() for t in Tech.query.order_by(Tech.name).all()]

@pub_bp.get("/projects")
def projects():
    return [p.serialize() for p in Project.query.order_by(Project.id.desc()).all()]
