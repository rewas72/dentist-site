import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/AnimationVariants';

const Contact = () => {
    return (
        <div className='flex items-center bg-heroBg justify-center py-28 px-8 ' id='contact'>
            <div className='container mx-auto '>
                <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
                    {/* sol taraf*/}
                    <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='space-y-8'>
                        <h2 className='text-4xl text-white text-center font-bold font-secondary'>İletişim</h2>
                        <div>
                            <div className='flex items-start gap-4'>
                                <div className='flex items-center justify-center rounded-full bg-gray-800 p-5'>
                                    <BsFillTelephoneFill className='text-primary text-xl' />
                                </div>
                                <div>
                                    <h3 className='text-white text-2xl py-2'>+90 534 083 4440</h3>
                                </div>
                            </div>
                            <div className='flex items-start gap-4 mt-10'>
                                <div className='flex items-center justify-center rounded-full bg-gray-800 p-5'>
                                    <IoMailSharp className='text-primary text-xl' />
                                </div>
                                <div>
                                    <h3 className='text-white text-2xl py-2'>rewas7272@gmail.com</h3>
                                </div>
                            </div>
                            <div className='flex items-start gap-4 mt-10'>
                                <div className='flex items-center justify-center rounded-full bg-gray-800 p-5'>
                                    <FaLocationDot className='text-primary text-xl' />
                                </div>
                                <div>
                                    <h3 className='text-white text-2xl py-2'>Samsun Atakum</h3>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* sağ taraf */}
                    <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount:0.7}} className='w-full h-full'>
                        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=samsun%20atakum+(Samsun)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
