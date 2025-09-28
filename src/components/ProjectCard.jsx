// ProjectCard.jsx
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function ProjectCard({ project }){
  const { dispatch } = useGlobalReducer();
  return (
    <div className="card project-card h-100" role="button"
         onClick={()=>dispatch({type:"openProject", id:project.id})}>
      <img src={project.cover_url} className="card-img-top" alt={project.title}/>
      <div className="card-body">
        <h5 className="card-title mb-1">{project.title}</h5>
        <p className="card-text small text-muted">{project.short_desc}</p>
      </div>
    </div>
  );
}
