import { motion } from 'framer-motion';
import { PlaneIcon, VisaIcon } from '../components/Icons';

const Services = () => {
  const services = [
    {
      title: 'Air Ticketing',
      desc: 'At Skywings, air ticketing is at the heart of what we do. We provide comprehensive air ticket booking services for domestic and international flights. Our partnership with major airlines enables us to offer a wide range of flight options, competitive prices, and convenient itineraries to suit every traveler\'s needs.',
      icon: <PlaneIcon className="w-10 h-10 md:w-12 md:h-12" />
    },
    {
      title: 'Travel Consultation',
      desc: 'Our experienced travel consultants are dedicated to assisting clients in finding the best flight options that align with their preferences and budgets. We provide expert advice, route optimization, and detailed information on flight schedules, making your travel planning process efficient and stress-free.',
      icon: <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
    },
    {
      title: 'Customized Solutions',
      desc: 'Understanding that each traveler has unique requirements, we offer tailored solutions that cater to individual preferences. Whether it\'s choosing the ideal seating, managing layovers, or arranging special services, Skywings ensures that every detail is accounted for.',
      icon: <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
    },
    {
      title: 'Visa Assistance',
      desc: 'Navigate the complexities of international travel documentation with ease. We provide expert guidance on visa requirements, application processes, and documentation checks to ensure your journey is smooth from the very start.',
      icon: <VisaIcon className="w-10 h-10 md:w-12 md:h-12" />
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <div className="bg-skywings-navy text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4"
          >
            Our Services
          </motion.h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive travel solutions designed around you.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-5 md:p-8 rounded-xl shadow-md border border-gray-100 flex flex-col md:flex-row gap-4 md:gap-6 items-start"
              >
                <div className="p-3 md:p-4 bg-skywings-blue/10 rounded-xl text-skywings-blue shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-skywings-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
                    {service.desc}
                  </p>
                  <a 
                    href={`https://wa.me/254727908262?text=Hi%20Skywings,%20I'm%20interested%20in%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    className="inline-flex items-center gap-2 font-bold text-skywings-blue hover:gap-3 transition-all text-sm md:text-base"
                  >
                    Inquire Now <span>&rarr;</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-skywings-gold py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-skywings-navy mb-4 md:mb-6">Ready to plan your trip?</h2>
          <p className="text-skywings-navy/80 mb-6 md:mb-8 max-w-xl mx-auto font-medium text-sm md:text-base">
            Contact our team today for a personalized quote and let us handle the details while you focus on the journey.
          </p>
          <a 
            href="/contact" 
            className="bg-skywings-navy text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-skywings-blue transition-colors inline-block text-sm md:text-base"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
