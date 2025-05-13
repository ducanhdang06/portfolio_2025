import { motion } from 'framer-motion';
import Image from 'next/image';

const HIGHLIGHT_KEYWORDS = [
  "Selenium", "50+", "90%", "Dart-based UI", "Python API", "80%", "Python-based"
];

function highlightAchievement(text: string) {
  const sorted = [...HIGHLIGHT_KEYWORDS].sort((a, b) => b.length - a.length);
  const regex = new RegExp(sorted.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
  const parts = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <span key={match.index} className="text-highlight font-semibold">{match[0]}</span>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

const experiences = [
  {
    company: 'FPT SmartCloud',
    role: 'Software Engineer Intern',
    period: 'May 2025 - Present',
    url: 'https://fptsmartcloud.com/en/home/',
    logo: '/logos/fptsmartcloud.png',
    achievements: [
      "Incoming Software Engineer Intern for FPT SmartCloud for Summer 2025"
    ]
  },
  {
    company: 'University of Texas at Austin',
    role: 'Teacher Assistant (Data Structures and Algorithms)',
    period: 'August 2025 - Present',
    url: 'https://www.cs.utexas.edu',
    logo: '/logos/utcs.png',
    achievements: [
      "Incoming TA for CS314: Data Structures and Algorithms for Fall 2025"
    ]
  },
  {
    company: 'Gibtr (Startup)',
    role: 'Software Engineer Intern',
    period: 'April 2023 - April 2025',
    url: 'https://www.trustpilot.com/review/gibtr.com',
    logo: '/logos/gibtr.png',
    achievements: [
      'Built a Python-based product fetcher using Selenium to extract pricing data from 50+ e-commerce websites, automating over 90% of manual entry and improving data accuracy across thousands of products.',
      'Designed and implemented a full-stack tax calculator with a Dart-based UI and Python API, enabling users to view real-time total prices (including sales tax) for any U.S. zip code — cutting price lookup time by 80% and streamlining product processing.',
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
                <div className="flex items-center gap-3">
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      alt={exp.company + ' logo'}
                      width={40}
                      height={40}
                      className="rounded-md bg-white p-1 object-contain"
                    />
                  )}
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
                </div>
                <p className="text-lightText/70 mt-1 md:mt-0">{exp.period}</p>
              </div>
              
              <ul className="mt-6 space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-highlight mr-2">›</span>
                    <span className="text-lightText/80">{highlightAchievement(achievement)}</span>
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