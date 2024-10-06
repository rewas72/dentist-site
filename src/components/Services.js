import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ortodonti from '../assets/ortodonti.jpg'
import endodonti from '../assets/endodonti.jpg'
import pedodonti from '../assets/pedodonti.jpg'
import estetik from '../assets/estetik.jpg'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/AnimationVariants';
import ailehukuku from '../assets/ailehukuku.jpg';
import ishukuku from '../assets/ishukuku.jpg';
import cezahukuku from '../assets/cezahukuku.jpeg'

const Services = () => {
  return (
    <div id='services' className=' bg-[#f7f8fc]'>
      <div className=' pt-5 px-4 container mx-auto'>
        <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='space-y-5 '>
          <h2 className='text-4xl text-center leading-snug text-heroBg'>Hizmetlerimiz</h2>
          <p className='md:w-1/2 mx-auto text-center '>Büromuzda 5 yıllık deneyimle, haklarınızı korumak ve en etkili hukuki çözümleri sunmak için uzman kadromuz ve güncel yasal bilgi birikimimizle hizmet veriyoruz. Aile hukukundan iş hukukuna, ticari davalardan ceza hukukuna kadar geniş bir yelpazede profesyonel hizmet sunarak adaletin yanınızda olmasını sağlıyoruz..</p>
      </motion.div>
      {/* hizmetlerimiz sekmeleri */}
      <div className='py-12 md:w-3/5 mx-auto'>
        <Tabs  >
          <TabList className="flex flex-wrap items-center justify-center md:gap-8 gap-1  ">
            <Tab>Aile Hukuku</Tab>
            <Tab>Ceza Hukuku</Tab>
            <Tab>İş Hukuku</Tab>
          </TabList>

          <TabPanel className="grid grid-flow-col md:grid-flow-row gap-8 mt-8 items-center">
            <div className='flex items-center px-6'>
              <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-6'>
                <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                  <h3 className='text-2xl font-semibold text-primary'>Aile Hukuku</h3>
                  <p className='mb-4'>Boşanma, velayet, mal paylaşımı ve aile içi sorunlara ilişkin tüm davalarda yanınızdayız. Anlayış ve profesyonellik çerçevesinde, ailenizi ve haklarınızı en iyi şekilde korumak için çalışıyoruz.</p>
                </motion.div>
                <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                  <img src={ailehukuku} alt='ortodonti' className='w-full h-full rounded-sm object-cover' />
                </motion.div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='flex items-center px-6'>
              <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-6'>
                <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                  <h3 className='text-2xl font-semibold text-primary'>Ceza Hukuku</h3>
                  <p className='mb-4'>Ceza davalarında haklarınızı savunmak, soruşturma süreçlerinde etkili bir savunma sunmak ve adaletin doğru işlemesini sağlamak amacıyla kapsamlı bir hukuki destek sunuyoruz.</p>
                </motion.div>
                <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                  <img src={cezahukuku} alt='ortodonti' className='w-full h-full rounded-sm object-cover' />
                </motion.div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='flex items-center px-6'>
              <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-6'>
                <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                  <h3 className='text-2xl font-semibold text-primary'>İş Hukuku</h3>
                  <p className='mb-4'>İşçi ve işveren arasındaki uyuşmazlıklarda, tazminat, iş sözleşmeleri ve iş güvenliği gibi konularda deneyimli ekibimizle hukuki çözümler sunuyoruz. İş dünyasında adaleti sağlamak için sizinleyiz.</p>
                </motion.div>
                <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                  <img src={ishukuku} alt='ortodonti' className='w-full h-full rounded-sm object-cover' />
                </motion.div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='flex items-center px-6'>
              <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-6'>
                <motion.div variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                  <h3 className='text-2xl font-semibold text-primary'>Estetik Diş Hekimliği</h3>
                  <p className='mb-4'>Çapraşık veya düzensiz diş yapısını, diş teli ve şeffaf plak (Invisalign)
                    tedavileri ile düzeltip, sağlıklı ve estetik bir gülüşe kavuşmanızı sağlıyoruz.</p>
                </motion.div>
                <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                  <img src={estetik} alt='ortodonti' className='w-full h-full rounded-sm object-cover' />
                </motion.div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
    </div >
  )
}

export default Services
