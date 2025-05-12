import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A full-stack dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing capabilities.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    liveLink: 'https://example.com/ecommerce-live',
    githubLink: 'https://github.com/username/ecommerce-dashboard'
  },
  {
    title: 'Task Management App',
    description: 'A responsive web application for task management with features like drag-and-drop organization, priority setting, and team collaboration.',
    image: '/projects/taskapp.jpg',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://example.com/task-app',
    githubLink: 'https://github.com/username/task-management'
  },
  {
    title: 'Weather Forecast PWA',
    description: 'A progressive web app that provides real-time weather forecasts, location-based suggestions, and offline capabilities.',
    image: '/projects/weather.jpg',
    technologies: ['React', 'Redux', 'Weather API', 'PWA', 'Geolocation'],
    liveLink: 'https://example.com/weather-pwa',
    githubLink: 'https://github.com/username/weather-forecast'
  },
  {
    title: 'Personal Finance Tracker',
    description: 'An application to track personal finances with budget planning, expense categorization, and visual reports to analyze spending patterns.',
    image: '/projects/finance.jpg',
    technologies: ['Vue.js', 'Vuex', 'Node.js', 'MySQL', 'D3.js'],
    liveLink: 'https://example.com/finance-tracker',
    githubLink: 'https://github.com/username/finance-tracker'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-darkTertiary/30">
      <div className="section-container">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="card overflow-hidden h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-lightText/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-darkAccent/30 rounded-md text-xs text-lightText/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 pt-0 flex space-x-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary bg-darkAccent hover:bg-darkAccent/90 text-sm"
                >
                  GitHub
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 