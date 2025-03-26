import { motion } from 'framer-motion';
import { ArrowUpRight, Dribbble, Twitter } from 'lucide-react';

function About() {
  return (
    <motion.div
      className="container mx-auto px-6 pt-32 pb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        {/* Profile Image */}
        <div className="md:col-span-3">
          <div className="card-static h-full">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300"
              alt="Profile"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Self Summary */}
        <div className="md:col-span-9">
          <div className="card-static h-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl opacity-50">✦</span>
              <h1 className="text-4xl md:text-5xl font-bold">SELF-SUMMARY</h1>
              <span className="text-2xl opacity-50">✦</span>
            </div>
            <div className="flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">David Henderson</h2>
                <p className="text-gray-400 text-lg">
                  I am a San Francisco-based product designer with a focus on web design,
                  illustration, & visual development. I have a diverse range of experience having
                  worked across various fields and industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience & Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Experience Section */}
        <div className="card-static">
          <h2 className="text-2xl font-bold mb-8">EXPERIENCE</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">2007 - 2017</p>
              <p className="font-bold text-xl">Framer Designer & Developer</p>
              <p className="text-gray-400">Bluebase Designs</p>
            </div>
            <div>
              <p className="text-gray-400">2017 - 2023</p>
              <p className="font-bold text-xl">Front-End Developer</p>
              <p className="text-gray-400">Lantern & Torch</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="card-static">
          <h2 className="text-2xl font-bold mb-8">EDUCATION</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">2019 - 2021</p>
              <p className="font-bold text-xl">Higher Secondary Certificate (HSC)</p>
              <p className="text-gray-400">University of Mumbai</p>
            </div>
            <div>
              <p className="text-gray-400">2021 - 2025</p>
              <p className="font-bold text-xl">Bachelor of Technology (B.Tech) in Electronics & Telecommunication</p>
              <p className="text-gray-400">University of Mumbai</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
  {/* Profiles Card */}
  <div className="md:col-span-3">
  <div className="card group h-full flex flex-col justify-between">
    <div>
      <p className="text-gray-400 text-sm mb-2">STAY WITH ME</p>
      <h2 className="text-xl font-bold mb-4">Profiles</h2>
    </div>
    <div className="flex gap-4 justify-center">
      {/* Dribbble Icon */}
      <div className="w-14 h-14 bg-[#222222] rounded-full flex items-center justify-center lg:w-24 lg:h-24 
                  transition-all duration-300 hover:shadow-[0_0_15px_#00FFFF] hover:bg-[#00FFFF1A]">
        <Dribbble className="w-7 h-7 lg:w-12 lg:h-12 text-white transition-colors duration-300 hover:text-cyan-400" />
      </div>

      {/* Twitter Icon */}
      <div className="w-14 h-14 bg-[#222222] rounded-full flex items-center justify-center lg:w-24 lg:h-24 
                  transition-all duration-300 hover:shadow-[0_0_15px_#00FFFF] hover:bg-[#00FFFF1A]">
        <Twitter className="w-7 h-7 lg:w-12 lg:h-12 text-white transition-colors duration-300 hover:text-cyan-400" />
      </div>
    </div>
    <div className="arrow-icon absolute bottom-4 right-4">
      <ArrowUpRight className="w-4 h-4 lg:w-6 lg:h-6" />
    </div>
  </div>
</div>


  {/* Let's Work Together Card */}
  <div className="md:col-span-6">
  <div className="card group h-full flex flex-col justify-between">
    <div className="flex items-center">
      <div>
        <h2 className="text-3xl lg:text-5xl font-bold">Let's</h2>
        <div className="flex items-center gap-2">
          <span className="text-3xl lg:text-5xl font-bold">work</span>
          <span className="text-3xl lg:text-5xl font-bold text-blue-500">together.</span>
        </div>
      </div>
    </div>
    <div className="arrow-icon absolute bottom-4 right-4">
      <ArrowUpRight className="w-4 h-4" />
    </div>
  </div>
</div>

  {/* Credentials Card */}
  <div className="md:col-span-3">
    <div className="card group h-full flex flex-col justify-between">
      <div>
        <p className="text-gray-400 text-sm mb-2">MORE ABOUT ME</p>
        <h2 className="text-xl font-bold">Credentials</h2>
      </div>
      <img 
        src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&w=300&h=100"
        alt="Signature"
        className="mt-4 w-full opacity-50"
      />
      <div className="arrow-icon absolute bottom-4 right-4">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
  </div>
</div>

    </motion.div>
  );
}

export default About;