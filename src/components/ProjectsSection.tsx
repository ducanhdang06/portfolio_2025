import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nail Technician Portfolio Full Stack Website',
    description: 'A full-stack website for a nail technician to showcase their work and services, with a dashboard for managing appointments and a blog for sharing industry insights.',
    image: '/projects/nailtech.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
    liveLink: 'https://example.com/ecommerce-live',
    githubLink: 'https://github.com/username/ecommerce-dashboard'
  },
  {
    title: 'Something related to AWS and cloud computing',
    description: 'A responsive web application for task management with features like drag-and-drop organization, priority setting, and team collaboration.',
    image: '/projects/taskapp.jpg',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://example.com/task-app',
    githubLink: 'https://github.com/username/task-management'
  },
  {
    
    title: 'Sony Edge AI Hackathon – Urban Congestion Solution',
    description: 'Placed 3rd in the Sony Edge AI Hackathon by building a real-time people counting system using YOLOv6 on an AIH-IVRW2 Edge AI Camera, with a Python-based web app recommending less crowded tourist spots to address urban congestion.',
    technologies: ['YOLOv6', 'Python', 'HTML', 'Sony AIH-IVRW2', 'Computer Vision', 'REST API'],
    image: '/projects/sonyaitrios.png',
    liveLink: 'https://github.com/ducanhdang06/sony_aitrios',
  },
  {
    title: 'Bone Marrow Survival Prediction',
    description: 'Developed a machine learning model to predict patient survival after a bone marrow transplant using logistic regression and SVM, with a focus on preprocessing, evaluation, and performance metrics.',
    technologies: ['Pandas', 'NumPy', 'Scikit-learn', 'Logistic Regression', 'Support Vector Machine', 'Matplotlib'],
    image: '/projects/bonemarrow.png',
    liveLink: 'https://colab.research.google.com/drive/1PAvPHebBZnnB-LW8tw_D8YuxCsgbfqKH?usp=sharing',
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
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-darkAccent/20 rounded-lg text-base text-lightText/90 font-medium border border-darkAccent/40 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 pt-0 flex">
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