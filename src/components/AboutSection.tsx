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
              <p className="text-xl leading-relaxed">
                Hi! I'm Duc Anh — a Computer Science student with a strong passion for building scalable, efficient systems.
                I enjoy <span className="text-highlight font-semibold">developing web</span> and
                <span className="text-highlight font-semibold"> mobile applications</span>, and exploring
                <span className="text-highlight font-semibold"> cloud technologies</span>.
              </p>
              <p className="text-xl leading-relaxed">
                Outside of tech, you'll find me on the soccer field, lifting at the gym, or strategizing in Teamfight Tactics.
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
                  <li>Operating Systems</li>
                  <li>Linear Algebra</li>
                  <li>Discrete Math</li>
                  <li>Probability</li>
                  <li>Elements of Data Science</li>
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