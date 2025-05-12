import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Tech Innovation Labs',
    role: 'Software Development Intern',
    period: 'May 2023 - August 2023',
    url: 'https://example.com/tech-innovation',
    achievements: [
      'Developed and maintained responsive web applications using React.js and Node.js',
      'Implemented RESTful API endpoints for data retrieval and manipulation',
      'Collaborated with UX/UI designers to implement intuitive user interfaces',
      'Participated in code reviews and implemented feedback to improve code quality'
    ]
  },
  {
    company: 'University of Texas at Austin',
    role: 'Research Assistant',
    period: 'January 2023 - Present',
    url: 'https://utexas.edu',
    achievements: [
      'Assisted in developing algorithms for data analysis in machine learning projects',
      'Created visualization tools using D3.js to represent complex research data',
      'Documented research findings and contributed to academic publications',
      'Collaborated with faculty and graduate students on cutting-edge research projects'
    ]
  },
  {
    company: 'CodePal Startup',
    role: 'Frontend Developer',
    period: 'September 2022 - December 2022',
    url: 'https://example.com/codepal',
    achievements: [
      'Built interactive user interfaces for an educational coding platform',
      'Implemented responsive design principles to ensure cross-device compatibility',
      'Utilized modern JavaScript frameworks to create dynamic web components',
      'Optimized application performance and reduced load times by 40%'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experiences" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="card p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:flex md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <a 
                    href={exp.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-highlight transition duration-300"
                  >
                    {exp.company}
                  </a>
                </div>
                <p className="text-lightText/70 mt-1 md:mt-0">{exp.period}</p>
              </div>
              
              <ul className="mt-6 space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-highlight mr-2">›</span>
                    <span className="text-lightText/80">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 