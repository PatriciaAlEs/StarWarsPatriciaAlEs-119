import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function ProjectDetailModal(){
  const { store, dispatch } = useGlobalReducer();
  const project = store.projects.find(p=>p.id===store.ui.projectOpen);
  const open = Boolean(project);

  return (
    <>
      <div className={`modal fade ${open ? "show d-block" : ""}`} tabIndex="-1" onClick={()=>dispatch({type:"closeProject"})}>
        <div className="modal-dialog modal-fullscreen" onClick={e=>e.stopPropagation()}>
          <div className="modal-content sheet">
            <div className="modal-header">
              <h5 className="modal-title">{project?.title}</h5>
              <button className="btn-close" onClick={()=>dispatch({type:"closeProject"})}/>
            </div>
            <div className="modal-body">
              {project && (
                <div className="container">
                  <div className="ratio ratio-16x9 mb-3">
                    <iframe src={project.video_url} title={project.title} allowFullScreen></iframe>
                  </div>
                  <p>{project.long_desc}</p>
                  <div className="row row-cols-1 row-cols-md-3 g-3">
                    {project.images.map((url,i)=>(
                      <div className="col" key={i}><img className="img-fluid rounded-3" src={url} alt={`img-${i}`}/></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {open && <div className="modal-backdrop fade show"></div>}
    </>
  );
}
