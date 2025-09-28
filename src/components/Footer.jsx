// Footer.jsx
export default function Footer(){
  return (
    <footer className="site-footer py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-2 small">
        <span>© {new Date().getFullYear()} Patricia Álvarez</span>
        <div className="d-flex gap-3">
          <a href="mailto:tuemail@dominio.com">Contacto</a>
          <a href="https://github.com/PatriciaAlEs" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/..." target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
