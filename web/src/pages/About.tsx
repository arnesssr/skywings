import { motion } from 'framer-motion';

const About = () => {
  const values = [
    { 
      title: 'Expertise', 
      desc: 'With years of experience in the travel industry, our team possesses the knowledge and insights to navigate the complexities of air ticketing.' 
    },
    { 
      title: 'Convenience', 
      desc: 'Our user-friendly booking process and dedicated customer support make it easy for clients to find, compare, and book flights.' 
    },
    { 
      title: 'Transparency', 
      desc: 'We believe in transparent pricing and clear communication. There are no hidden fees or surprises.' 
    },
    { 
      title: '24/7 Support', 
      desc: 'Our customer support team is available around the clock, ready to assist with inquiries, changes, and emergencies.' 
    },
    { 
      title: 'Reliability', 
      desc: 'We work with reputable airlines to offer dependable flight options, ensuring that your travel plans are executed seamlessly.' 
    },
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
            About Us
          </motion.h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Dynamic. Forward-thinking. Your gateway to new horizons.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" 
                alt="Skywings Team" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-skywings-navy mb-4 md:mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                Skywings Air Travel & Tours Ltd, headquartered in the vibrant city of Nairobi, Kenya, stands as a dynamic and forward-thinking travel agency dedicated to delivering unparalleled ticketing services. 
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                With a steadfast commitment to simplifying the complexities of air travel, Skywings has solidified its reputation as a trailblazer in the industry. Our primary focus on ticketing services serves as the cornerstone of our business, ensuring that travelers experience a seamless and efficient journey from the moment they embark on their travel plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-skywings-blue"
            >
              <div className="mb-4 p-3 bg-skywings-blue/10 rounded-full w-12 h-12 flex items-center justify-center text-skywings-blue">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-skywings-navy mb-3 md:mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our mission at Skywings Air Travel & Tours Ltd is to simplify the air travel experience for our clients by offering reliable, convenient, and affordable ticketing services. We are committed to leveraging our expertise to connect travelers with their desired destinations while prioritizing customer satisfaction, value, and innovation.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-skywings-gold"
            >
              <div className="mb-4 p-3 bg-skywings-gold/10 rounded-full w-12 h-12 flex items-center justify-center text-skywings-gold">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-skywings-navy mb-3 md:mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Our vision is to be the leading ticketing service provider in the region, renowned for our exceptional customer service, transparent practices, and cutting-edge technological solutions. We aim to make air travel accessible to all by providing a hassle-free ticketing experience that exceeds expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-skywings-navy mb-8 md:mb-10">Why Choose Skywings</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-left">
            {values.map((val, idx) => (
              <div key={idx} className="p-5 md:p-6 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="text-lg md:text-xl font-bold text-skywings-blue mb-2 md:mb-3">{val.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
