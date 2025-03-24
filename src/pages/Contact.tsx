import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Instagram, Dribbble } from 'lucide-react';

function Contact() {
  return (
    <motion.div
      className="container mx-auto px-6 pt-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-8">CONTACT INFO</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">MAIL US</p>
                <p>info@bluebase.com</p>
                <p>info@bluebase2.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">CONTACT US</p>
                <p>+1 504-899-8221</p>
                <p>+1 504-749-5456</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">LOCATION</p>
                <p>22 Baker Street, Texas</p>
                <p>United States</p>
                <p>W1U 3BW</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-12 mb-8">SOCIAL INFO</h2>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <Dribbble className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 bg-[#222222] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="card-static">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">Let's work </h2>
            <p className="text-3xl font-bold text-blue-500 ml-2">together.</p>
          </div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name *"
              className="w-full bg-[#222222]"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full bg-[#222222]"
            />
            <input
              type="text"
              placeholder="Your Subject *"
              className="w-full bg-[#222222]"
            />
            <textarea
              placeholder="Your Message *"
              className="w-full h-32 bg-[#222222]"
            ></textarea>
            <button className="w-full bg-[#222222] hover:bg-[#333333] text-white py-4 rounded-lg transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;