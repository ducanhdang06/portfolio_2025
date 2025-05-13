import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaVuejs, 
  FaGithub, FaNpm, FaDocker, FaAws, FaFigma, FaPython
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, 
  SiPostgresql, SiFirebase, SiGraphql, SiRedux, SiFlutter,
  SiExpress, SiFastapi, SiDjango
} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'design';
}

const techItems: TechItem[] = [
  { name: 'React', icon: <FaReact size={32} />, category: 'frontend' },
  { name: 'Next.js', icon: <SiNextdotjs size={32} />, category: 'frontend' },
  { name: 'Vue.js', icon: <FaVuejs size={32} />, category: 'frontend' },
  { name: 'HTML5', icon: <FaHtml5 size={32} />, category: 'frontend' },
  { name: 'CSS3', icon: <FaCss3Alt size={32} />, category: 'frontend' },
  { name: 'JavaScript', icon: <FaJs size={32} />, category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript size={32} />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} />, category: 'frontend' },
  { name: 'Redux', icon: <SiRedux size={32} />, category: 'frontend' },
  { name: 'Node.js', icon: <FaNodeJs size={32} />, category: 'backend' },
  { name: 'Express', icon: <SiExpress size={32} />, category: 'backend' },
  { name: 'Python', icon: <FaPython size={32} />, category: 'backend' },
  { name: 'FastAPI', icon: <SiFastapi size={32} />, category: 'backend' },
  { name: 'Django', icon: <SiDjango size={32} />, category: 'backend' },
  { name: 'GraphQL', icon: <SiGraphql size={32} />, category: 'backend' },
  { name: 'MongoDB', icon: <SiMongodb size={32} />, category: 'database' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={32} />, category: 'database' },
  { name: 'Firebase', icon: <SiFirebase size={32} />, category: 'database' },
  { name: 'Docker', icon: <FaDocker size={32} />, category: 'devops' },
  { name: 'AWS', icon: <FaAws size={32} />, category: 'devops' },
  { name: 'GitHub', icon: <FaGithub size={32} />, category: 'devops' },
  { name: 'npm', icon: <FaNpm size={32} />, category: 'devops' },
  { name: 'Flutter', icon: <SiFlutter size={32} />, category: 'mobile' },
  { name: 'Figma', icon: <FaFigma size={32} />, category: 'design' },
];

const TechSection = () => {
  return (
    <section id="tech" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Familiar Tech
        </motion.h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {techItems.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-icon flex flex-col items-center justify-center group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <span
                className="pointer-events-none z-20 absolute left-1/2 -top-4 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-center bg-darkSecondary px-3 py-1 rounded shadow-lg border border-darkAccent/30 text-lightText font-medium whitespace-nowrap"
              >
                {tech.name}
              </span>
              <div className="text-primary group-hover:text-highlight transition-colors duration-300">
                {tech.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection; 