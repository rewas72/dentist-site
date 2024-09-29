import React, { useEffect, useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { motion } from "framer-motion"


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [activeSections, setActiveSections] = useState('home');

    const handleToggle = ()=> {
        setIsOpen(!isOpen);
    }

    const handleCloseMenu = () => {
        setIsOpen(false)
    }

    const handleScroll= () => {
        const sections = ['home', 'services', 'about', 'doctors'];
        const scrollPosition = window.scrollY + 100;
        sections.forEach(section=> {
            const element =document.getElementById(section);
            if(element){
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;
                if(scrollPosition>= offsetTop && scrollPosition < offsetTop+ height){
                    setActiveSections(section);
                    return;
                }
            }
        })
    }

    useEffect(()=>{
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScrollTo = (targetId)=> {
        const targetElement = document.getElementById(targetId);
        if(targetId){
            window.scrollTo({
                top:targetElement.offsetTop -100,
                behavior: "smooth"
            })
        }
    }

    const navLinks = (
         <ul className='font-medium flex flex-col md:flex-row lg:space-x-8  sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={(e)=>{e.preventDefault();
                handleCloseMenu(); handleScrollTo('home')}} href='#home' className={`text-white hover:text-primary/90`}>Ana Sayfa</motion.a>
            </li>
            <li>
                <a onClick={(e)=>{e.preventDefault();
                handleCloseMenu(); handleScrollTo('services') }} href='#services' className={`text-white hover:text-primary/90`}>Hizmetlerimiz</a>
            </li>
            <li>
                <a onClick={(e)=>{e.preventDefault();
                handleCloseMenu(); handleScrollTo('about')}} href='#about' className={`text-white hover:text-primary/90`}>Hakkımızda</a>
            </li>
            <li>
                <a onClick={(e)=>{e.preventDefault();
                handleCloseMenu(); handleScrollTo('doctors')}} href='#doctors' className={`text-white hover:text-primary/90`}>Doktorlarımız</a>
            </li>
         </ul>
    )

  return (
    <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
        <div className='container mx-auto flex justify-between items-center h-full'>
        {/*Logo */}
            <div className='text-white text-lg font-semibold'>
                <a href=''>
                    <img className="w-32 md:w-32 lg:w-48 ml-4" src='/logo.png' alt='logo' />
                </a>
            </div>
            {/* nav items */ }
            <div className=' hidden md:flex flex-grow justify-center'> 
                {navLinks}
            </div>

            <div className='hidden md:block'>
                <a href='#contact' className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-sm mr-4 ' >İletişim</a>
            </div>

            <div className='block md:hidden'>
                <button onClick={handleToggle} className={` text-white focus-outline-none ${isOpen? "border border-white ": ""}`}>
                <RiMenu3Fill className='size-6' />
                </button>
            </div>
        </div>

        {
            isOpen && (
               <nav>
                    <ul className='flex flex-col p-3 space-y-3'>
                        {navLinks.props.children}
                    </ul>
                    <li className='list-none p-3 space-y-3 text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-sm mr-4 '>
                        <a onClick={(e)=> {e.preventDefault()
                        handleCloseMenu()}} href='#contact'  >İletişim</a>
                    </li>
               </nav> 
            )
        }
       
    </header>
  )
}

export default Navbar


/* 
<div className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10 '>
      asdas
    </div>
*/