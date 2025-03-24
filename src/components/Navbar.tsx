import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      className="fixed w-full z-50 px-4 md:px-6 py-4 md:py-6 bg-[#111111]/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">GridX</Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/works" className="nav-link">Works</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link 
            to="/contact" 
            className="px-6 py-2 bg-[#222222] rounded-full hover:bg-[#333333] transition-colors"
          >
            Let's talk
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 bg-[#111111] p-4 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col gap-4">
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/works" className="nav-link" onClick={() => setIsMenuOpen(false)}>Works</Link>
              <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link 
                to="/contact" 
                className="px-6 py-2 bg-[#222222] rounded-full hover:bg-[#333333] transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's talk
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;