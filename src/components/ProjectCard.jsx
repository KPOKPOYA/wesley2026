// frontend/src/components/ProjectCard.jsx
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="card group">
      {/* Image du projet */}
      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-30">
          {project.id}
        </div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        {/* Catégorie */}
        <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-3">
          {project.category}
        </span>

        {/* Titre */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Voir sur GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Voir la démo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1 text-blue-600 hover:gap-2 transition-all font-medium"
          >
            Détails
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}