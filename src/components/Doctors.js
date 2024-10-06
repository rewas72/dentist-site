import React from 'react'
import dentist from "../assets/dentist.jpeg"
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/AnimationVariants';
import lawyer from '../assets/lawyer.png'



const Doctors = () => {
  return (
    <div id='doctors' className=' bg-heroBg '>
    <h2 className='text-4xl text-center leading-snug text-white pt-10'>Avukatlarımız</h2>
      <div className='container md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full '>
        <div className='md:w-1/3 p-6 bg-[#f7f8fc] rounded-sm hover:bg-[#e2e5ed] transition-all duration-300'>
          <img className='rounded-3xl w-full object-cover transform hover:scale-105 transition-transform duration-300' src={lawyer} alt="Dr. Ayşe Yılmaz" />
          <h1 className='text-center mt-4 text-primary text-3xl font-primary '>Av. Ayşe Yılmaz</h1>
          <hr className="my-4 border-t-2 border-gray-500 w-3/4 mx-auto"/>
          <p className='text-center mt-6 text-lg'>Ankara Üniversitesi Hukuk Fakültesi’nden mezun olan Avukat Ayşe Kılıç, özellikle aile hukuku ve boşanma davaları konusunda uzmanlaşmıştır. Mezuniyetinin ardından birçok ileri düzey eğitim ve seminerlere katılarak bu alandaki en güncel mevzuat ve uygulamaları öğrenmiştir.</p>
        </div>
        <div className='md:w-1/3 p-6 bg-[#f7f8fc] rounded-sm hover:bg-[#e2e5ed] transition-all duration-300'>
          <img className='rounded-3xl w-full object-cover transform hover:scale-105 transition-transform duration-300' src={lawyer} alt="Dr. Ayşe Yılmaz" />
          <h1 className='text-center mt-4 text-primary text-3xl font-primary '>Av. Ayşe Yılmaz</h1>
          <hr className="my-4 border-t-2 border-gray-500 w-3/4 mx-auto"/>
          <p className='text-center mt-6 text-lg'>Ankara Üniversitesi Hukuk Fakültesi’nden mezun olan Avukat Ayşe Kılıç, özellikle aile hukuku ve boşanma davaları konusunda uzmanlaşmıştır. Mezuniyetinin ardından birçok ileri düzey eğitim ve seminerlere katılarak bu alandaki en güncel mevzuat ve uygulamaları öğrenmiştir..</p>
        </div>
        <div className='md:w-1/3 p-6 bg-[#f7f8fc] rounded-sm hover:bg-[#e2e5ed] transition-all duration-300'>
          <img className='rounded-3xl w-full object-cover transform hover:scale-105 transition-transform duration-300' src={lawyer} alt="Dr. Ayşe Yılmaz" />
          <h1 className='text-center mt-4 text-primary text-3xl font-primary '>Av. Ayşe Yılmaz</h1>
          <hr className="my-4 border-t-2 border-gray-500 w-3/4 mx-auto"/>
          <p className='text-center mt-6 text-lg'>Ankara Üniversitesi Hukuk Fakültesi’nden mezun olan Avukat Ayşe Kılıç, özellikle aile hukuku ve boşanma davaları konusunda uzmanlaşmıştır. Mezuniyetinin ardından birçok ileri düzey eğitim ve seminerlere katılarak bu alandaki en güncel mevzuat ve uygulamaları öğrenmiştir.</p>
        </div>
      </div>
    </div>
  )
}

export default Doctors
