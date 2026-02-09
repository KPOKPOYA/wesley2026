// frontend/src/pages/ProjectDetails.jsx
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Projet non trouvé</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Bouton retour */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Retour aux projets
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* En-tête */}
            <div className="card p-8">
              <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-4">
                {project.category}
              </span>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              
              <p className="text-lg text-gray-600">
                {project.description}
              </p>
            </div>

            {/* Image du projet */}
            <div className="card overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-9xl font-bold opacity-30">
                  {project.id}
                </div>
              </div>
            </div>

            {/* Fonctionnalités */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Fonctionnalités principales
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies utilisées */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Technologies utilisées
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-lg font-medium border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <div className="card p-6 sticky top-24">
              <h3 className="font-bold text-lg text-gray-900 mb-4">
                Liens du projet
              </h3>
              
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github size={20} />
                    Voir sur GitHub
                  </a>
                )}
                
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Voir la démo
                  </a>
                )}
              </div>

              {/* Informations supplémentaires */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Statut</p>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Terminé
                  </span>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Type</p>
                  <p className="font-medium text-gray-900">{project.category}</p>
                </div>
              </div>
            </div>

            {/* Projets similaires */}
            <div className="card p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">
                Projets similaires
              </h3>
              <div className="space-y-3">
                {projects
                  .filter(p => p.id !== project.id && p.category === project.category)
                  .slice(0, 3)
                  .map((p) => (
                    <Link
                      key={p.id}
                      to={`/projects/${p.id}`}
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 mb-1">{p.title}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}