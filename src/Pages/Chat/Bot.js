import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Bot = () => {
  const whatsappNumber = "+8801960064557"; // Updated WhatsApp number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div>
      <div
        className="fixed bottom-5 sm:right-8 right-4 z-50 cursor-pointer text-white text-4xl  bg-secondary w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
        onClick={handleWhatsAppClick}
      >
        <IoLogoWhatsapp />
      </div>
    </div>
  );
};

export default Bot;