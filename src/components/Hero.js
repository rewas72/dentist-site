import React from 'react'
import dentist from '../assets/dentist3.png'
import { MdNavigateNext } from "react-icons/md";
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/AnimationVariants';


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
          <h1 className='text-4xl font-primary font-semibold  mb-4 md:4/5 leading-snug'>Gülüşünüz Geleceğinizdir, Biz Onu Parlatıyoruz!</h1>
          <p className='text-lg mb-12'>Diş sağlığınız, yaşam kalitenizin temelidir. Kliniğimizde, modern teknolojiler ve uzman kadromuzla size en iyi tedavi deneyimini sunuyoruz.
            İster rutin kontrolleriniz için, ister estetik diş tedavileri için bize güvenin. Gülüşünüzün ışığı, sağlığınızın aynasıdır.</p>
          <button onClick={e => handleScrollTo('contact')} className='flex flex-row px-4 py-4 bg-primary rounded-sm items-center gap-2 hover:bg-primary/90'>
            <a href='#contact'>İletişim</a>
            <MdNavigateNext className='text-xl' />
          </button>
        </motion.div>


        {/* sağ taraf */}
        <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 h-full' >
          <img src={dentist} alt='hero image' className='w-full object-cover' />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
