import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-skywings-navy text-white py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
        <img src={logo} alt="" className="w-[600px] md:w-[900px] lg:w-[1200px] h-auto opacity-8" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <img src={logo} alt="Skywings Logo" className="h-10 md:h-12 w-auto" />
              <span className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter">SKYWINGS</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Nairobi-based trailblazer in air ticketing and travel solutions. Your gateway to new horizons.
            </p>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 text-skywings-gold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors text-sm md:text-base">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors text-sm md:text-base">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors text-sm md:text-base">Our Services</Link></li>
              <li><Link to="/safaris" className="hover:text-white transition-colors text-sm md:text-base">Safaris</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors text-sm md:text-base">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-bold mb-4 text-skywings-gold">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
              <li>Jubilee Exchange Building, 4th Floor</li>
              <li>Mama Ngina Street, Nairobi</li>
              <li>Email: travel@skywingstours.co.ke</li>
              <li>Phone: +254 727 908 262</li>
            </ul>
            
            <div className="pt-4 border-t border-white/10">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Accredited By</p>
              <div className="flex gap-2 md:gap-3 opacity-50 flex-wrap">
                <div className="border border-white/20 px-2 py-1 rounded text-[10px] font-bold">IATA</div>
                <div className="border border-white/20 px-2 py-1 rounded text-[10px] font-bold">KATO</div>
                <div className="border border-white/20 px-2 py-1 rounded text-[10px] font-bold">KCAA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center text-gray-500 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Skywings Air Travel & Tours Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
