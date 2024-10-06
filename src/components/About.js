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
        "https://ahithukukburosu.com/wp-content/uploads/2021/01/ahit-hukuk-burosu-giris-1024x643.jpg",
      imgAlt: "img-2"
    },
    {
      imgURL:
        "https://www.ahmetekin.av.tr/wp-content/uploads/2021/10/Downloader.la-6167bfa5ae77c_1200x628-780x470.jpg",
      imgAlt: "img-3"
    },
    {
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEA6ogS7rpZ5kw8hu4HUwx7yzGEjbsGo3Vg&s",
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
        <div  className='md:w-1/2 h-full '>
            <h1 className='text-4xl text-center font-semibold text-primary'>Hakkımızda</h1>
            <p className='text-center mt-10 text-lg'>Büromuz, 7 yıl önce Türkiye’nin saygın üniversitelerinden mezun olan Avukat Ayşe Yılmaz tarafından kurulmuştur. Hukuk alanındaki uzmanlık ve deneyimini titizlikle harmanlayarak, müvekkillerimize en iyi hukuki hizmetleri sunmayı amaçlamaktadır. Kuruluşumuzdan bu yana, güven ve profesyonellik ilkelerinden ödün vermeden hizmet veriyoruz. Avukat Ayşe Yılmaz’ın liderliğinde, ekibimize katılan Avukat Mehmet Demir ve Avukat Zeynep Kara da aile hukuku, iş hukuku ve ceza hukuku gibi geniş bir yelpazede müvekkillerimize profesyonel hukuki danışmanlık ve dava hizmetleri sunmaktadır. Büromuzdaki her avukat, alanındaki en güncel mevzuatı ve yargı kararlarını yakından takip ederek, müvekkillerimizin haklarını en iyi şekilde savunmak ve adaleti sağlamak için özveriyle çalışmaktadır.</p>
        </div>
      </div>
    </div>
  )
}

export default About
