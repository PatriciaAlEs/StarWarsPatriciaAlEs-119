from app import app, db
from models import Tech, Project, ProjectImage

demo_techs = [
    ("React", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"),
    ("Flask", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"),
    ("SQLAlchemy", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg"),
    ("Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"),
    ("JWT", "https://cdn-icons-png.flaticon.com/512/2913/2913132.png"),
    ("PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"),
]

with app.app_context():
    db.drop_all(); db.create_all()
    for name, icon in demo_techs:
        db.session.add(Tech(name=name, icon_url=icon))

    p1 = Project(
        title="Contact List (React + API)",
        short_desc="CRUD con fetch, Flux y validaciones.",
        long_desc="Implementa agenda con arquitectura Flux, endpoints REST y tests básicos.",
        cover_url="https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1200&auto=format&fit=crop",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ"
    )
    p1.images = [ProjectImage(url=u) for u in [
        "https://picsum.photos/seed/p1a/800/500",
        "https://picsum.photos/seed/p1b/800/500",
        "https://picsum.photos/seed/p1c/800/500",
    ]]

    p2 = Project(
        title="E-commerce WP + Woo",
        short_desc="Catálogo, carrito y pasarela.",
        long_desc="Tienda con Elementor, plantillas personalizadas y optimización Core Web Vitals.",
        cover_url="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ"
    )

    db.session.add_all([p1, p2])
    db.session.commit()
    print("✅ Base con datos demo creada")
