import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function Works() {
  const projects = [
    {
      title: "Dynamic",
      category: "WEB DESIGNING",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Seven Studio",
      category: "MOBILE DESIGNING",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Raven Studio",
      category: "BRANDING",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Diesel H1",
      category: "PHOTOGRAPHY",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Submarine",
      category: "MOBILE DESIGNING",
      image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Hydra Merc",
      category: "WEB DESIGNING",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <motion.div
      className="container mx-auto px-6 pt-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="flex items-center mb-12">
        <span className="star-decoration">✦</span>
        <h1 className="text-4xl font-bold">ALL PROJECTS</h1>
        <span className="star-decoration">✦</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card group relative"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <div>
              <p className="text-gray-400 text-sm">{project.category}</p>
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
            <div className="arrow-icon absolute bottom-6 right-6">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Works;