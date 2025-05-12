import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-darkSecondary py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <span className="text-xl font-bold text-highlight">DAD.</span>
            </Link>
            <p className="mt-2 text-sm text-lightText/60">
              Software Developer | Web & App Developer
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightText/70 hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightText/70 hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightText/70 hover:text-highlight transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="https://instagram.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightText/70 hover:text-highlight transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-lightText/50">
          <p>© {new Date().getFullYear()} Duc Anh Dang. All rights reserved.</p>
          <p className="mt-2">
            Designed & Built with <span className="text-highlight">♥</span> by Duc Anh Dang
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 