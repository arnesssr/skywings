import { motion } from 'framer-motion';

interface SectionDividerProps {
  color?: 'gold' | 'navy' | 'blue';
  flip?: boolean;
}

const SectionDivider = ({ color = 'navy', flip = false }: SectionDividerProps) => {
  const colorMap = {
    gold: '#FFD700',
    navy: '#03045E',
    blue: '#0077B6'
  };

  const wavePath = "M0,256L80,240C160,224,320,192,480,186.7C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z";

  return (
    <div className={`w-full overflow-hidden leading-none relative ${flip ? 'rotate-180' : ''}`}>
      <svg
        className="w-full h-auto block relative z-10"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          fill={colorMap[color]}
          d={wavePath}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
