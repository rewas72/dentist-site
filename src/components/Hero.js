import React from 'react'
import dentist from '../assets/dentist3.png'
import { MdNavigateNext } from "react-icons/md";
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/AnimationVariants';
import lawyer from '../assets/lawyer.png'


const Hero = () => {

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetId) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth"
      })
    }
  }



  return (
    <div id='home' className='bg-heroBg text-white flex items-center px-6 pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full '>
        {/* sol taraf*/}
        <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 '>
          <h1 className='text-4xl font-primary font-semibold  mb-4 md:4/5 leading-snug'>Güvenilir Hukuki Çözümler, Profesyonel Hizmet</h1>
          <p className='text-lg mb-12'>Hukuk büromuz, bireysel ve kurumsal müvekkillerimize geniş bir yelpazede hukuki hizmetler sunmaktadır. Alanında uzman avukatlarımızla, dava takibi, sözleşme hazırlama, hukuki danışmanlık ve çözüm odaklı arabuluculuk hizmetlerinde güvenilir ve profesyonel çözümler üretiyoruz.</p>
          <button onClick={e => handleScrollTo('contact')} className='flex flex-row px-4 py-4 bg-primary rounded-sm items-center gap-2 hover:bg-primary/90'>
            <a href='#contact'>İletişim</a>
            <MdNavigateNext className='text-xl' />
          </button>
        </motion.div>


        {/* sağ taraf */}
        <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 h-full' >
          <img src={lawyer} alt='hero image' className='w-full object-cover' />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
