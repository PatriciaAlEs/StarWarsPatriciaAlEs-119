from extensions import db
from app import create_app
from models import Tech, Project, ProjectImage

app = create_app()

with app.app_context():
    db.drop_all()
    db.create_all()

    # --- Tecnologías ---
    techs = [
        Tech(name="HTML5", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"),
    Tech(name="CSS3", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"),
    Tech(name="JavaScript", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"),
    Tech(name="React", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"),
    Tech(name="Bootstrap", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"),
    Tech(name="Python", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"),
    Tech(name="Flask", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"),
    Tech(name="SQLAlchemy", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg"),
    Tech(name="PostgreSQL", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"),
    Tech(name="JWT", icon_url="https://jwt.io/img/pic_logo.svg"),
    Tech(name="WordPress", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"),
    Tech(name="WooCommerce", icon_url="https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce.svg"),
    Tech(name="Git", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"),
    Tech(name="GitHub", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"),
    ]
    db.session.add_all(techs)

    # --- Proyectos ---
    portfolio = Project(
        title="Mi Portfolio",
        short_desc="Portfolio personal con React y Flask",
        long_desc="Un sitio web responsive con autenticación JWT, base de datos en SQLAlchemy y diseño en Bootstrap.",
        cover_url="https://via.placeholder.com/600x300.png?text=Portfolio",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ"
    )
    portfolio.images = [
        ProjectImage(url="https://via.placeholder.com/400x200.png?text=Portfolio+1"),
        ProjectImage(url="https://via.placeholder.com/400x200.png?text=Portfolio+2")
    ]

    habit_tracker = Project(
        title="Habit Tracker",
        short_desc="App para seguimiento de hábitos",
        long_desc="Aplicación React para registrar hábitos diarios, con persistencia en LocalStorage.",
        cover_url="http://127.0.0.1:5000/static/img/habit_tracker.jpeg",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ"
    )

    hooboo = Project(
        title="Hooboo",
        short_desc="Plataforma social ficticia",
        long_desc="Proyecto colaborativo con autenticación, publicaciones y comentarios.",
        cover_url="http://127.0.0.1:5000/static/img/HooBoo.png",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ"
    )

    db.session.add_all([portfolio, habit_tracker, hooboo])
    db.session.commit()

    print("✅ Base de datos poblada con tecnologías y proyectos")
