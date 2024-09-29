import React from 'react'
import dentist from '../assets/dentist3.png'
import { MdNavigateNext } from "react-icons/md";


const Hero = () => {
  return (
    <div id='home' className='bg-heroBg text-white flex items-center px-6 pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full '>
        {/* sol taraf*/}
        <div className='md:w-1/2 '>
        <h1 className='text-4xl font-primary font-semibold  mb-4 md:4/5 leading-snug'>Gülüşünüz Geleceğinizdir, Biz Onu Parlatıyoruz!</h1>
          <p className='text-lg mb-12'>Diş sağlığınız, yaşam kalitenizin temelidir. Kliniğimizde, modern teknolojiler ve uzman kadromuzla size en iyi tedavi deneyimini sunuyoruz.
           İster rutin kontrolleriniz için, ister estetik diş tedavileri için bize güvenin. Gülüşünüzün ışığı, sağlığınızın aynasıdır.</p>
           <button className='flex flex-row px-4 py-4 bg-primary rounded-sm items-center gap-2 hover:bg-primary/90'>
            <a href='#contact'>İletişim</a>
            <MdNavigateNext className='text-xl' />
           </button>
        </div>


        {/* sağ taraf */}
        <div className='md:w-1/2 h-full' >
          <img src={dentist} alt='hero image' className='w-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Hero
