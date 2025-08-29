import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppFloat = () => {
  const phoneNumber = "+923288101603";
  const message = "Hello! I'm interested in your web development services.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} className="transition-transform duration-200" />
      </button>
    </div>
  );
};