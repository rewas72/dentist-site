import React from 'react'
import CustomSlider from "./costum-slider";
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/AnimationVariants';

const About = () => {


  const images = [
    {
      imgURL:
        "https://avatars.mds.yandex.net/get-altay/6143287/2a00000186b1409312681887a5e77de9397a/XL",
      imgAlt: "img-1"
    },
    {
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMNqSMDTV_Qpm-UJXhvggnhHSw1f1_4_xTQ&s",
      imgAlt: "img-2"
    },
    {
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGU_mRx2F9Ai1y5dFdEQT6wdgS2LHGHsbNQ&s",
      imgAlt: "img-3"
    },
    {
      imgURL:
        "https://winnfamilydentistry.com/wp-content/uploads/2020/09/178570688_xl-2015-780x520.jpg",
      imgAlt: "img-4"
    }
  ];

  return (
    <div id='about' className='bg-[#f7f8fc] flex items-center px-6 pt-28 px-6 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full '>
        {/* sol taraf*/}
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 h-full'>
          <CustomSlider>
            {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomSlider>
        </motion.div>
        {/* sağ taraf*/}
        <motion.div variants={fadeIn('left', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='md:w-1/2 h-full '>
            <h1 className='text-4xl text-center font-semibold text-primary'>Hakkımızda</h1>
            <p className='text-center mt-10 text-lg'>Kliniğimiz, 7 yıl önce Türkiye'nin saygın üniversitelerinden birinden mezun olan Dr. Ayşe Yılmaz tarafından kurulmuştur. Diş hekimliği alanındaki uzmanlık ve deneyimlerini modern teknolojilerle birleştirerek, hastalarımıza en iyi ağız ve diş sağlığı hizmetlerini sunmayı amaçlamaktadır.

Kuruluşumuzdan bu yana, kliniğimizde güven ve titizlikle hizmet veriyoruz. Dr. Ayşe Yılmaz’ın liderliğinde, diş hekimlerimiz Dr. Mehmet Demir ve Dr. Zeynep Kara da ekibimize katılarak, hastalarımıza geniş bir yelpazede profesyonel tedavi hizmetleri sunmaktadır. Ortodontiden implant tedavisine, estetik diş hekimliğinden genel diş bakımına kadar tüm alanlarda hastalarımızın gülüşlerini güzelleştirmek için çalışıyoruz.

Kliniğimizdeki her diş hekimi, alanındaki en güncel bilgileri takip ederek, hastalarımızın sağlıklı ve estetik bir gülüşe kavuşmalarını sağlamak için özveriyle çalışmaktadır.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
