import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#222222] mt-20">
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold">GridX</Link>
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <Link to="/works" className="text-gray-400 hover:text-white transition-colors">Works</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} GridX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;