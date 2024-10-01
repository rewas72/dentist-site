import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ortodonti from '../assets/ortodonti.jpg'
import endodonti from '../assets/endodonti.jpg'
import pedodonti from '../assets/pedodonti.jpg'
import estetik from '../assets/estetik.jpg'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/AnimationVariants';


const Services = () => {
  return (
    <div id='services' className=' bg-[#f7f8fc]'>
      <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className=' px-4 container mx-auto'>
        <div className='space-y-5 '>
          <h2 className='text-4xl text-center leading-snug text-heroBg'>Hizmetlerimiz</h2>
          <p className='md:w-1/2 mx-auto text-center '>Kliniğimizde 5 yıllık deneyimle, ağız ve diş sağlığınızı korumak ve en iyi çözümleri sunmak için modern teknoloji ve alanında uzman kadromuzla hizmet veriyoruz.
            Diş estetiğinden implant tedavisine, ortodontiden genel diş bakımına kadar geniş yelpazede profesyonel
            hizmetler sunarak sağlıklı ve güzel bir gülüşe kavuşmanızı sağlıyoruz.</p>
        </div>
        {/* hizmetlerimiz sekmeleri */}
        <div className='py-12 md:w-3/5 mx-auto'>
          <Tabs  >
            <TabList className="flex flex-wrap items-center justify-center md:gap-8 gap-1  ">
              <Tab>Ortodonti</Tab>
              <Tab>Endodonti</Tab>
              <Tab>Pedodonti</Tab>
              <Tab>Estetik Diş Hekimliği</Tab>
            </TabList>

            <TabPanel className="grid grid-flow-col md:grid-flow-row gap-8 mt-8 items-center">
            <div className='flex items-center px-6'>
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-6'>
                  <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                    <h3 className='text-2xl font-semibold text-primary'>Ortodonti</h3>
                    <p className='mb-4'>Çapraşık veya düzensiz diş yapısını, diş teli ve şeffaf plak (Invisalign) 
                    tedavileri ile düzeltip, sağlıklı ve estetik bir gülüşe kavuşmanızı sağlıyoruz.</p>
                  </motion.div>
                  <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                    <img src={ortodonti} alt='ortodonti' className='w-full h-full rounded-sm object-cover' />
                  </motion.div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
            <div className='flex items-center px-6'>
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-6'>
                  <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                    <h3 className='text-2xl font-semibold text-primary'>Endodonti</h3>
                    <p className='mb-4'>Çapraşık veya düzensiz diş yapısını, diş teli ve şeffaf plak (Invisalign) 
                    tedavileri ile düzeltip, sağlıklı ve estetik bir gülüşe kavuşmanızı sağlıyoruz.</p>
                  </motion.div>
                  <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                    <img src={endodonti} alt='ortodonti' className='w-full h-full rounded-sm object-cover' />
                  </motion.div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
            <div className='flex items-center px-6'>
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-6'>
                  <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                    <h3 className='text-2xl font-semibold text-primary'>Pedodonti</h3>
                    <p className='mb-4'>Çapraşık veya düzensiz diş yapısını, diş teli ve şeffaf plak (Invisalign) 
                    tedavileri ile düzeltip, sağlıklı ve estetik bir gülüşe kavuşmanızı sağlıyoruz.</p>
                  </motion.div>
                  <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                    <img src={pedodonti} alt='ortodonti' className='w-full h-full rounded-sm object-cover' />
                  </motion.div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
            <div className='flex items-center px-6'>
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-6'>
                  <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                    <h3 className='text-2xl font-semibold text-primary'>Estetik Diş Hekimliği</h3>
                    <p className='mb-4'>Çapraşık veya düzensiz diş yapısını, diş teli ve şeffaf plak (Invisalign) 
                    tedavileri ile düzeltip, sağlıklı ve estetik bir gülüşe kavuşmanızı sağlıyoruz.</p>
                  </motion.div>
                  <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                    <img src={estetik} alt='ortodonti' className='w-full h-full rounded-sm object-cover' />
                  </motion.div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </motion.div>
    </div>
  )
}

export default Services
