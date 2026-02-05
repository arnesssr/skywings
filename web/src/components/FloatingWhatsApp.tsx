import { WhatsAppIcon } from './Icons';

const FloatingWhatsApp = () => {
  const message = encodeURIComponent("Hi Skywings, I'm interested in your travel services.");
  const whatsappUrl = `https://wa.me/254727908262?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={32} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
