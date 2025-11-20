// ProjectsSection.jsx
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetailModal from "./ProjectDetailModal.jsx";

export default function ProjectsSection() {
  const { store, actions } = useGlobalReducer();
  useEffect(() => { actions.loadProjects(); }, []);

  return (
    <section id="proyectos" className="section projects-wrap my-12">
      <div className="container-narrow">
        <h2 className="section-title mb-8">PROYECTOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {store.projects.map(p => (
            <div key={p.id} className="flex">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
      <ProjectDetailModal />
    </section>
  );
}
