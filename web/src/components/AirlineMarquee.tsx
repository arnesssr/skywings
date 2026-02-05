import { motion } from 'framer-motion';

const AirlineMarquee = () => {
  const airlines = [
    'KENYA AIRWAYS',
    'EMIRATES',
    'QATAR AIRWAYS',
    'ETHIOPIAN',
    'LUFTHANSA',
    'KENYA AIRWAYS',
    'EMIRATES',
    'QATAR AIRWAYS',
    'ETHIOPIAN',
    'LUFTHANSA',
  ];

  return (
    <div className="w-full bg-gray-50/50 py-8 overflow-hidden border-y border-gray-100">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center gap-12 md:gap-20 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {airlines.map((airline, index) => (
            <div
              key={index}
              className="flex flex-col items-center group shrink-0"
            >
              <span className="text-lg md:text-2xl font-display font-black tracking-tighter text-gray-400 group-hover:text-skywings-blue transition-colors duration-300">
                {airline}
              </span>
              <div className="h-0.5 w-0 group-hover:w-full bg-skywings-blue transition-all duration-300 mt-1"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AirlineMarquee;
