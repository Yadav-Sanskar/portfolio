import { motion } from 'framer-motion';
import { Camera, Home as HomeIcon, Layers, Zap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <motion.div 
      className="pt-24 md:pt-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto">
        {/* Profile Card */}
        <div className="card-static md:col-span-7">
          <div className="flex flex-col md:flex-row gap-6 mt-6 ">
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300"
              alt="Profile"
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover block mx-auto "
            />
            <div>
              <p className="text-gray-400 text-sm mb-2">A FULL-STACK DEVELOPER & TECH ENTHUSIAST</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Sanskar Yadav.</h1>
              <p className="text-gray-400">I don’t just develop—I craft scalable, intelligent, and impactful solutions.</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
            <motion.div 
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowUpRight className="w-6 h-6" />
            </motion.div>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="md:col-span-5 grid grid-cols-1 gap-4 md:gap-6">
          {/* Marquee Text */}
          <div className="card-static py-2 px-4">
            <div className="marquee">
              <span className="inline-block text-sm text-gray-400">
              • LATEST WORK AND FEATURED • LATEST WORK AND FEATURED • LATEST WORK AND FEATURED
              </span>
            </div>
          </div>

          {/* Credentials Card */}
          <Link to="/about" className="card group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">MORE ABOUT ME</p>
                <h2 className="text-xl font-bold">Credentials</h2>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&w=100&h=50"
                alt="Signature"
                className="w-24 opacity-50"
              />
            </div>
            <div className="arrow-icon absolute bottom-4 right-4">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>

          {/* Projects Card */}
          <Link to="/works" className="card group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">SHOWCASE</p>
                <h2 className="text-xl font-bold">Projects</h2>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=100&h=50"
                alt="Projects"
                className="w-24 h-16 rounded-lg object-cover"
              />
            </div>
            <div className="arrow-icon absolute bottom-4 right-4">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Bottom Row */}
        <div className="md:col-span-4">
          {/* Blog Card */}
          <div className="card group ">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=300&h=300" 
                  alt="Blog" 
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">BLOG</p>
                <h2 className="text-xl font-bold">GFonts</h2>
              </div>
            </div>
            <div className="arrow-icon absolute bottom-4 right-4">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        

        {/* Services Card */}
        <div className="card-static md:col-span-4">
          <p className="text-gray-400 text-sm mb-4">SPECIALIZATION</p>
          <h2 className="text-xl font-bold mb-6">Services Offering</h2>
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center mb-2 mx-auto">
                <Camera className="w-5 h-5" />
              </div>
              <span className="text-xs">Photo</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center mb-2 mx-auto">
                <HomeIcon className="w-5 h-5" />
              </div>
              <span className="text-xs">UI/UX</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center mb-2 mx-auto">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs">Brand</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center mb-2 mx-auto">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs">Motion</span>
            </div>
          </div>
        </div>

        {/* Profiles Card */}
        <div className="card group md:col-span-4">
          <div>
            <p className="text-gray-400 text-sm mb-1">STAY WITH ME</p>
            <h2 className="text-xl font-bold">Profiles</h2>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="w-10 h-10 bg-[#222222] rounded-full flex items-center justify-center">
              <HomeIcon className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-[#222222] rounded-full flex items-center justify-center">
              <HomeIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="arrow-icon absolute bottom-4 right-4">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Stats Card */}
        <div className="card-static md:col-span-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-4xl font-bold">07</div>
              <div className="text-gray-400 text-sm mt-2">YEARS<br />EXPERIENCE</div>
            </div>
            <div>
              <div className="text-4xl font-bold">+125</div>
              <div className="text-gray-400 text-sm mt-2">CLIENTS<br />WORLDWIDE</div>
            </div>
            <div>
              <div className="text-4xl font-bold">+210</div>
              <div className="text-gray-400 text-sm mt-2">TOTAL<br />PROJECTS</div>
            </div>
          </div>
        </div>

        {/* Let's Work Together Card */}
        <div className="card group md:col-span-6">
          <div>
            <h2 className="text-3xl font-bold">Let's work</h2>
            <p className="text-3xl font-bold text-blue-500">together.</p>
          </div>
          <div className="arrow-icon absolute bottom-4 right-4">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;