import React from 'react'
import whatsapp from "../assets/whatsapp.png"

const WhatsappLogo = () => {
    return (
        <div className="fixed bottom-4 right-4 p-3 z-50">
            <a href="https://wa.me/905340834440" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="WhatsApp" className="w-12 h-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-300" />
            </a>
        </div>

    )
}

export default WhatsappLogo
