import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ortodonti from '../assets/ortodonti.jpg'

const Services = () => {
  return (
    <div id='services' className=' bg-[#f7f8fc]'>
      <div className=' px-4 container mx-auto'>
        <div className='space-y-5 '>
          <h2 className='text-4xl text-center leading-snug text-heroBg'>Hizmetlerimiz</h2>
          <p className='md:w-1/2 mx-auto text-center '>Kliniğimizde 5 yıllık deneyimle, ağız ve diş sağlığınızı korumak ve en iyi çözümleri sunmak için modern teknoloji ve alanında uzman kadromuzla hizmet veriyoruz.
            Diş estetiğinden implant tedavisine, ortodontiden genel diş bakımına kadar geniş yelpazede profesyonel
            hizmetler sunarak sağlıklı ve güzel bir gülüşe kavuşmanızı sağlıyoruz.</p>
        </div>
        {/* hizmetlerimiz sekmeleri */}
        <div className='py-12 md:w-3/5 mx-auto'>
          <Tabs  >
            <TabList className="flex flex-wrap items-center justify-between md:gap-8 gap-1">
              <Tab>Ortodonti</Tab>
              <Tab>Endodonti</Tab>
              <Tab>Pedodonti</Tab>
              <Tab>Estetik Diş Hekimliği</Tab>
            </TabList>

            <TabPanel>
              <div className='flex items-center px-6'>
                <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-4 gap-6'>
                  <div className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                    <h3 className='text-2xl font-semibold text-primary'>Ortodonti</h3>
                    <p className='mb-4'>Çapraşık veya düzensiz diş yapısını, diş teli ve şeffaf plak (Invisalign) 
                    tedavileri ile düzeltip, sağlıklı ve estetik bir gülüşe kavuşmanızı sağlıyoruz.</p>
                  </div>
                  <div className='md:w-1/2 bg-white p-4 rounded-sm h-64'>
                    <img src={ortodonti} alt='ortodonti' className='w-full h-full rounded-sm object-cover' />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>İlerlemiş çürük veya travma sonrası zarar gören dişlerin kök kanallarını temizleyerek, doğal dişlerinizi koruyor ve uzun ömürlü hale getiriyoruz.</h2>
            </TabPanel>
            <TabPanel>
              <h2>Çocukların diş sağlığına özel yaklaşımlarımızla, diş gelişimlerini destekliyor ve süt dişlerinden itibaren sağlıklı bir ağız yapısı oluşturuyoruz.</h2>
            </TabPanel>
            <TabPanel>
              <h2>Diş beyazlatma, porselen kaplama ve zirkonyum uygulamaları gibi estetik çözümlerle, daha beyaz ve düzgün bir gülüşe sahip olmanızı sağlıyoruz.</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services
