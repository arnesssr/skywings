import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isHome = location.pathname === '/';
  const navClass = isHome 
    ? (isScrolled ? 'glass-morph-nav py-2 shadow-lg' : 'bg-transparent py-3 md:py-4')
    : 'bg-skywings-navy py-2 shadow-lg';

  const textColor = isHome 
    ? (isScrolled ? 'text-skywings-navy' : 'text-white')
    : 'text-white';

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Corporate', path: '/corporate' },
    { name: 'Safaris', path: '/safaris' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
        <div className={`hidden md:block border-b border-white/10 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'bg-skywings-navy/50 py-2'}`}>
          <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/80">
            <div className="flex gap-4 md:gap-6">
              <span className="flex items-center gap-2">
                <span className="text-skywings-gold">+</span> 254 727 908 262
              </span>
              <span className="flex items-center gap-2">
                <span className="text-skywings-gold">@</span> travel@skywingstours.co.ke
              </span>
            </div>
            <div className="hidden lg:flex gap-4 items-center">
              <span className="flex items-center gap-2 hover:text-skywings-gold transition-colors cursor-pointer">
                <span className="text-sm">Jubilee Exchange, 4th Floor
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="overflow-visible py-1">
              <img 
                src={logo} 
                alt="Skywings Logo" 
                className="h-14 md:h-16 w-auto" 
              />
            </div>
            <span className={`text-xl md:text-2xl font-display font-bold tracking-tighter ${textColor}`}>
              SKYWINGS
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`font-semibold text-xs lg:text-sm uppercase tracking-wider hover:text-skywings-gold transition-colors ${textColor} ${location.pathname === item.path ? 'text-skywings-gold' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-skywings-gold text-skywings-navy px-5 lg:px-6 py-2 rounded-full font-bold text-xs lg:text-sm uppercase tracking-wider hover:bg-white hover:text-skywings-navy transition-all hover:shadow-lg">
              Book Now
            </Link>
          </div>

          <button 
            className={`md:hidden p-2 z-50 transition-colors ${isOpen ? 'text-white' : textColor}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div 
          className="absolute inset-0 bg-skywings-navy/98 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />
        <div className="flex flex-col h-full justify-center items-center p-6 gap-6 relative z-10">
            {links.map((item) => (
              <Link 
                key={item.name}
              to={item.path}
              className={`text-2xl font-display font-bold hover:text-skywings-gold transition-all ${location.pathname === item.path ? 'text-skywings-gold' : 'text-white'}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-skywings-gold text-skywings-navy px-8 py-3 rounded-full font-bold text-lg mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
          
          <div className="mt-8 text-gray-400 text-center text-sm">
            <p className="mb-2">+254 727 908 262</p>
            <p>travel@skywingstours.co.ke</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
