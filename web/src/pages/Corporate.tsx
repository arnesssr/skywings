import { motion } from 'framer-motion';
import { ShieldCheckIcon, ClockIcon, GlobeIcon } from '../components/Icons';
import { Link } from 'react-router-dom';

const Corporate = () => {
  const features = [
    {
      title: 'Dedicated Account Management',
      desc: 'A single point of contact for all your business travel needs, ensuring personalized service and rapid response times.',
      icon: <ShieldCheckIcon className="w-7 h-7 md:w-8 md:h-8" />
    },
    {
      title: '24/7 Global Support',
      desc: 'Our team is available around the clock to assist with last-minute changes, cancellations, or emergencies.',
      icon: <ClockIcon className="w-7 h-7 md:w-8 md:h-8" />
    },
    {
      title: 'Cost Optimization',
      desc: 'We leverage our airline partnerships to provide corporate rates and negotiate the best deals for your organization.',
      icon: <GlobeIcon className="w-7 h-7 md:w-8 md:h-8" />
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-20 bg-skywings-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Office" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight">Corporate Travel <br /><span className="text-skywings-gold">Management</span></h1>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
              Streamlining business travel for Nairobi's leading organizations. Efficiency, reliability, and premium service at every step.
            </p>
            <Link to="/contact" className="bg-skywings-gold text-skywings-navy px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold hover:bg-white transition-colors inline-block text-sm md:text-base">
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-skywings-navy mb-3 md:mb-4">The Skywings Advantage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">We understand the unique demands of corporate travel. Our solutions are designed to save you time and optimize your travel budget.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="p-5 md:p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-skywings-blue/10"
              >
                <div className="text-skywings-blue mb-4">{feature.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-skywings-navy">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=1000" 
                alt="Business Meeting" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-skywings-navy mb-4 md:mb-6">Comprehensive Business Solutions</h2>
              <ul className="space-y-3 md:space-y-4">
                {[
                  'Global Flight Bookings & Upgrades',
                  'Premium Airport Transfers',
                  'VIP Lounge Access Worldwide',
                  'Visa & Documentation Services',
                  'Corporate Event & Conference Logistics',
                  'Monthly Travel Reporting & Analytics'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
                    <span className="text-skywings-gold text-lg md:text-xl">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 md:mt-8">
                <Link to="/contact" className="text-skywings-blue font-bold border-b-2 border-skywings-gold pb-1 hover:text-skywings-navy transition-colors inline-block text-sm md:text-base">
                  Inquire About Corporate Accounts &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-skywings-blue">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 md:mb-6">Ready to elevate your corporate travel?</h2>
          <p className="text-base md:text-lg mb-8 md:mb-10 opacity-90 max-w-2xl mx-auto">Join dozens of Nairobi's top firms who trust Skywings with their global mobility.</p>
          <Link to="/contact" className="bg-white text-skywings-blue px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-skywings-navy hover:text-white transition-all inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
