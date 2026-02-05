import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-16 md:pt-20">
      <div className="bg-skywings-navy text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            We're here to help you fly beyond borders.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="md:w-5/12 bg-skywings-navy p-6 md:p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Get in Touch</h3>
                <p className="text-gray-300 mb-8 md:mb-10 text-sm md:text-base">
                  Whether you have a question about flights, safaris, or visa requirements, our team is ready to answer all your questions.
                </p>
                
                <div className="space-y-5 md:space-y-6">
                  <div className="flex gap-3 md:gap-4 items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-skywings-gold shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Our Office</h4>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                        Jubilee Exchange Building<br/>
                        4th Floor, Room 401<br/>
                        Mama Ngina Street, Nairobi
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 md:gap-4 items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-skywings-gold shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Email Us</h4>
                      <p className="text-gray-300 text-xs md:text-sm">travel@skywingstours.co.ke</p>
                      <p className="text-gray-300 text-xs md:text-sm">skywingstourslimited@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-3 md:gap-4 items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-skywings-gold shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Call Us</h4>
                      <p className="text-gray-300 text-xs md:text-sm">+254 727 908 262</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-16 -right-16 w-48 h-48 md:w-56 md:h-56 bg-skywings-blue/20 rounded-full blur-2xl"></div>
            </div>
            
            <div className="md:w-7/12 p-6 md:p-8 lg:p-12 bg-white">
              <h3 className="text-xl md:text-2xl font-bold text-skywings-navy mb-6 md:mb-8">Send us a Message</h3>
              <form action="https://formspree.io/f/your-id" method="POST" className="space-y-5 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input type="text" name="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-skywings-blue focus:border-transparent outline-none transition-all text-sm md:text-base" placeholder="Jane" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input type="text" name="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-skywings-blue focus:border-transparent outline-none transition-all text-sm md:text-base" placeholder="Doe" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-skywings-blue focus:border-transparent outline-none transition-all text-sm md:text-base" placeholder="jane@example.com" required />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed</label>
                  <select name="service" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-skywings-blue focus:border-transparent outline-none transition-all text-sm md:text-base">
                    <option>Flight Reservations</option>
                    <option>Kenya Safaris</option>
                    <option>Visa Assistance</option>
                    <option>Travel Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-skywings-blue focus:border-transparent outline-none transition-all text-sm md:text-base resize-none" placeholder="How can we help you?" required></textarea>
                </div>
                
                <button type="submit" className="w-full bg-skywings-blue text-white font-bold py-3 md:py-4 rounded-xl hover:bg-skywings-navy transition-colors shadow-lg shadow-skywings-blue/20 text-sm md:text-base">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="h-64 md:h-80 w-full bg-gray-200">
        <iframe 
          title="Skywings Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817474274296!2d36.8219!3d-1.2841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMDMuMCJTIDM2wrA0OScxOS4wIkU!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
