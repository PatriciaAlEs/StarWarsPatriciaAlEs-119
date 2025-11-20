// ProjectCard.jsx
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function ProjectCard({ project }) {
  const { dispatch } = useGlobalReducer();
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-project hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
      role="button"
      onClick={() => dispatch({ type: "openProject", payload: project.id })}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.cover_url}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h5 className="text-lg font-semibold text-ink mb-2 group-hover:text-green-hero transition-colors duration-300">
          {project.title}
        </h5>
        <p className="text-sm text-gray-600 leading-relaxed">
          {project.short_desc}
        </p>
      </div>
    </div>
  );
}
