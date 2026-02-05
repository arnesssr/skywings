import { motion } from 'framer-motion';
import { useState } from 'react';
import { SafariIcon } from '../components/Icons';

const Safaris = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const gallery: { img: string; title: string; desc: string; fallback?: string }[] = [
    {
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
      title: 'Maasai Mara',
      desc: 'Witness the Great Migration and the Big Five in their natural habitat.'
    },
    {
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800',
      title: 'Amboseli National Park',
      desc: 'Breathtaking views of Mt. Kilimanjaro with large herds of elephants.'
    },
    {
      img: 'https://images.unsplash.com/photo-1484557052118-f32bd251507d?q=80&w=800&auto=format&fit=crop',
      title: 'Tsavo East & West',
      desc: 'Explore the red elephants and diverse landscapes of Tsavo.'
    },
    {
      img: 'https://images.unsplash.com/photo-1519750292352-c9fc173d2a8b?q=80&w=800&auto=format&fit=crop',
      title: 'Lake Nakuru',
      desc: 'Famous for its flamingos and rhino sanctuary.'
    },
    {
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800',
      title: 'Samburu Reserve',
      desc: 'Discover the unique "Special Five" species of northern Kenya.'
    },
    {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.maasaimarakenyapark.com%2Fwp-content%2Fuploads%2F2021%2F10%2FGettyImages-581001645-5bcd85f8c9e77c005172f741.jpg&f=1&nofb=1&ipt=7b8b2ebbfd62669289a8b7f195d1e608220712e23058d77112ee969d7364e99c',
      fallback: 'https://images.unsplash.com/photo-1517331156700-6c2438a377c3?q=80&w=800&auto=format&fit=crop',
      title: 'Nairobi National Park',
      desc: 'The only national park within a capital city in the world.'
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="pt-16 md:pt-20">
      <div className="bg-skywings-navy text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block p-3 md:p-4 bg-skywings-gold/20 rounded-full mb-4 md:mb-6"
          >
            <SafariIcon size={40} className="md:w-12 md:h-12 text-skywings-gold" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4"
          >
            Kenya Safaris
          </motion.h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the magic of the wild with our custom-tailored safari packages.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {gallery.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (item.fallback && target.src !== item.fallback) {
                        target.src = item.fallback;
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-skywings-navy/95 via-skywings-navy/50 to-transparent flex flex-col justify-end p-4 md:p-6 transition-all duration-300 ${
                  expandedIndex === index ? '!via-skywings-navy/70' : 'md:group-hover:via-skywings-navy/40'
                }`}>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className={`text-gray-200 text-sm transition-all duration-300 ${
                    expandedIndex === index ? 'opacity-100 max-h-40' : 'md:opacity-0 md:max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-40'
                  }`}>
                    {item.desc}
                  </p>
                  <div className={`mt-3 transition-all duration-300 ${
                    expandedIndex === index ? 'opacity-100' : 'md:opacity-0 md:group-hover:opacity-100'
                  }`}>
                    <a 
                      href={`https://wa.me/254727908262?text=Hi%20Skywings,%20I'm%20interested%20in%20a%20Safari%20to%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      className="inline-block bg-skywings-gold text-skywings-navy text-xs md:text-sm font-bold py-2 px-4 rounded-lg hover:bg-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Inquire for Package
                    </a>
                  </div>
                  <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-skywings-gold/90 flex items-center justify-center text-skywings-navy font-bold text-sm transition-transform duration-300 md:hidden ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=1000" 
              alt="Safari Vehicle" 
              className="rounded-xl shadow-xl w-full"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-skywings-navy mb-4 md:mb-6">Build Your Own Adventure</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Don't see exactly what you're looking for? We specialize in creating bespoke safari itineraries that match your schedule, budget, and interests. From luxury tented camps to family-friendly lodges, we handle it all.
            </p>
            <a 
              href="https://wa.me/254727908262?text=Hi%20Skywings,%20I%20want%20to%20plan%20a%20custom%20Safari."
              className="bg-skywings-blue text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-lg hover:shadow-skywings-blue/30 hover:-translate-y-0.5 transition-all inline-block text-sm md:text-base"
            >
              Start Planning with an Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safaris;
