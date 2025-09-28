// ProjectsSection.jsx
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsSection(){
  const { store, actions } = useGlobalReducer();
  useEffect(()=>{ actions.loadProjects(); }, []);

  return (
    <section className="my-5">
      <div className="container">
        <h2 className="section-title">Mis proyectos</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {store.projects.map(p=>(
            <div className="col" key={p.id}>
              <ProjectCard project={p}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
