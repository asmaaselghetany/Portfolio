import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { socialLinks } from "../constants";
import { styles } from "../styles";

const SocialLinks = () => {
  return (
    <div className="mt-8 flex flex-row gap-4">
      {socialLinks.map((link, index) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        
        const rotateX = useTransform(y, [-100, 100], [30, -30]);
        const rotateY = useTransform(x, [-100, 100], [-30, 30]);

        function onMouseMove(event) {
          const rect = event.currentTarget.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const rotateX = (event.clientY - centerY) / 10;
          const rotateY = (event.clientX - centerX) / 10;

          x.set(rotateX);
          y.set(rotateY);
        }

        function onMouseLeave() {
          x.set(0);
          y.set(0);
        }

        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#1d1836] hover:bg-[#915EFF] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#915EFF]/50 z-10"
          >
            <motion.img
              src={link.icon}
              alt={link.name}
              style={{ zIndex: 1 }}
              className="w-6 h-6 object-contain filter group-hover:brightness-200 transition-all duration-300"
            />
            <motion.div 
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
              style={{ zIndex: 2 }}
            >
              <span className="text-white text-sm font-medium whitespace-nowrap bg-[#1d1836] px-3 py-1 rounded-md shadow-lg">
                {link.name}
              </span>
            </motion.div>
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks; 