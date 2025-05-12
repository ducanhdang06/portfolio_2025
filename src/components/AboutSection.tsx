import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-darkTertiary/30">
      <div className="section-container">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-highlight">Who I Am</h3>
            <div className="space-y-4 text-lightText/80">
              <p>
                I'm a passionate software developer with a strong foundation in web and application development. 
                My journey in coding began with a curiosity about how websites work, which has now evolved into 
                a deep expertise in full-stack development.
              </p>
              <p>
                I enjoy the challenge of creating intuitive, responsive interfaces that deliver exceptional user 
                experiences while writing clean, maintainable code behind the scenes. I'm especially interested 
                in building solutions that make a positive impact.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or learning about the latest trends in the tech industry.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-highlight">Education</h3>
            <div className="bg-darkSecondary rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-medium">University of Texas at Austin</h4>
              <p className="text-primary font-medium mt-1">Computer Science</p>
              <div className="mt-3 flex justify-between text-sm text-lightText/70">
                <p>Expected: May 2028</p>
                <p>GPA: 3.92</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <h5 className="text-base font-medium mb-2">Relevant Coursework:</h5>
                <ul className="grid grid-cols-2 gap-2 text-sm text-lightText/70">
                  <li>Data Structures</li>
                  <li>Algorithms</li>
                  <li>Web Development</li>
                  <li>Mobile App Development</li>
                  <li>Database Systems</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 