import { motion } from 'framer-motion';
import { PlaneIcon, SafariIcon, VisaIcon } from '../components/Icons';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import SectionDivider from '../components/SectionDivider';
import AirlineMarquee from '../components/AirlineMarquee';

const Home = () => {
  const coreValues = [
    { title: 'Expertise', desc: 'Industry knowledge.' },
    { title: 'Convenience', desc: 'Seamless booking.' },
    { title: 'Transparency', desc: 'No hidden fees.' },
    { title: 'Reliability', desc: 'Support you trust.' },
  ];

  return (
    <div className="flex flex-col">
      <section id="home" className="relative min-h-[65vh] md:min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109c053?auto=format&fit=crop&q=80&w=2000" 
            alt="Plane in sky" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-skywings-navy/85 to-skywings-navy/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight"
          >
            Experience The Skies <br />
            <span className="text-skywings-gold">Like Never Before.</span>
          </motion.h1>
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-2xl mx-auto text-gray-200"
          >
            Nairobi's Gateway to Seamless Global Travel & Safaris.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          >
            <Link 
              to="/services" 
              className="bg-skywings-gold text-skywings-navy px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg hover:shadow-xl transition-all"
            >
              Explore Services
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-white/20 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative bg-skywings-navy">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
          <img src={logo} alt="" className="w-[800px] md:w-[1200px] lg:w-[1500px] h-auto opacity-15 mt-56 md:mt-72" />
        </div>
        
        <SectionDivider color="navy" flip={true} />
        
        <section className="relative py-10 md:py-16 text-white">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              {coreValues.map((value, index) => (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <h3 className="text-lg md:text-2xl font-bold text-skywings-gold mb-1 md:mb-2 group-hover:scale-105 transition-transform">{value.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4">What We Do</h2>
            <div className="w-16 md:w-20 h-1 bg-skywings-gold mx-auto mb-8 md:mb-12"></div>
            <p className="text-sm md:text-base text-gray-300 mb-10 md:mb-16 max-w-2xl mx-auto font-medium">From premium flight management to bespoke safari adventures, we curate every detail.</p>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Flight Reservations',
                  desc: 'International and domestic bookings with major airlines. We specialize in corporate travel management.',
                  icon: <PlaneIcon className="w-8 h-8 md:w-10 md:h-10" />,
                  link: '/corporate',
                  isGold: true
                },
                {
                  title: 'Kenya Safaris',
                  desc: 'Experience the wild with our custom safari packages.',
                  icon: <SafariIcon className="w-8 h-8 md:w-10 md:h-10" />,
                  link: '/safaris',
                  isGold: false
                },
                {
                  title: 'Visa Assistance',
                  desc: 'Expert guidance for your global travel documentation.',
                  icon: <VisaIcon className="w-8 h-8 md:w-10 md:h-10" />,
                  link: '/services',
                  isGold: false
                }
              ].map((service) => (
                <motion.div 
                  key={service.title}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-5 md:p-8 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:border-skywings-gold/30 transition-all text-left flex flex-col h-full relative"
                >
                  {service.title === 'Flight Reservations' && (
                    <Link to="/corporate" className="absolute inset-0 z-10" aria-label="Corporate Services"></Link>
                  )}
                  <div className={`mb-4 p-3 md:p-4 rounded-lg w-fit ${service.isGold ? 'bg-skywings-gold/10 text-skywings-gold' : 'bg-skywings-blue/20 text-skywings-blue'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  <Link 
                    to={service.link}
                    className={`font-bold flex items-center gap-2 mt-4 ${service.isGold ? 'text-skywings-gold' : 'text-skywings-blue'}`}
                  >
                    Learn More <span>&rarr;</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 md:mt-14">
              <Link to="/services" className="font-bold text-white border-b-2 border-skywings-gold hover:text-skywings-gold transition-colors pb-1 inline-block">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="relative bg-gray-50/50">
        <SectionDivider color="navy" />
        
        <AirlineMarquee />
      </div>

      <div className="relative bg-skywings-navy">
        <section className="py-12 md:py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4">What Our Clients Say</h2>
              <div className="w-16 md:w-24 h-1 bg-skywings-gold mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  quote: "Skywings has transformed our corporate travel. Their efficiency and attention to detail are unmatched in Nairobi.",
                  author: "Sarah J.",
                  role: "Operations Manager, TechCorp"
                },
                {
                  quote: "The safari they organized for my family was beyond words. Truly a premium experience from start to finish.",
                  author: "David M.",
                  role: "Leisure Traveler"
                },
                {
                  quote: "Reliable, professional, and always available. They handle our complex international itineraries with ease.",
                  author: "Robert K.",
                  role: "Director, Global Logistics"
                }
              ].map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm p-5 md:p-8 rounded-xl border border-white/10"
                >
                  <div className="text-skywings-gold text-3xl md:text-4xl mb-3 md:mb-4 font-serif">"</div>
                  <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base italic">{t.quote}</p>
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-skywings-gold text-xs md:text-sm">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="relative">
        <section className="py-12 md:py-16 bg-skywings-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-skywings-blue/20 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 md:mb-6">Start Your Journey Today</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto">
              Ready to explore the world? Let Skywings take you there with comfort and ease.
            </p>
            <Link 
              to="/contact" 
              className="bg-skywings-gold text-skywings-navy px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-white transition-colors inline-block"
            >
              Get a Quote
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
