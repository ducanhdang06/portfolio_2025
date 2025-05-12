import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 md:pt-36 pb-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg md:text-xl font-medium text-highlight mb-2">
              My name is
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Duc Anh Dang
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-lightText/80">
              Software Developer
            </h2>
            <p className="text-lightText/70 text-lg mb-8 max-w-md">
              Building beautiful, functional digital experiences with modern web technologies.
            </p>
            <Link href="/may_2025_resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">View Resume</button>
            </Link>
          </motion.div>
          
          <motion.div
            className="relative w-64 h-64 md:w-96 md:h-96"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
            <div className="relative w-full h-full">
              <Image
                src="/profile.png"
                alt="Duc Anh Dang"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 