import ProductHeader from "../components/product-header";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Button from "../components/button";
import { TimelineData } from "../components/data/timeline";






export default function Home() {
  return (
    <>
    <ProductHeader />
    <section className="relative bg-black flex items-center pt-16 pb-20 px-6 ">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start z-10">
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Available for new projects</span>
          </motion.div>
          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
           <motion.span  className="inline-block"
              initial={{ opacity: 0, y: "-50%"  }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0, ease: "linear" }}>
                Hello !
            </motion.span>
            <br />
            <motion.span className="inline-block"
              initial={{ y: "-50%" , opacity: 0 }} 
              animate={{ y: 0 , opacity: 1}} 
              transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}>
             I am
            {' '}
             <TypeAnimation
              sequence={[
                'Devendhiran',
                2000,          
                'a Developer',    
                2000           
              ]}
              cursor={true}
              repeat={Infinity}
              wrapper="span"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
              />
            </motion.span>
          </h1>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-[#848484] max-w-lg leading-relaxed hover:text-white transition-colors"
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 1, ease: "linear" }}
          >
         Transforming complex ideas into seamless digital experiences. As a Frontend Engineer, I focus on responsive layouts, clean code, and creating visually engaging web applications.
          </motion.p>
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: "-30%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5, ease: "linear" }}
          >
            <motion.a href="#contact"
              className="group inline-flex gap-2 items-center bg-[var(--brand-black)] text-white px-5 py-2.5 text-base font-lg rounded-xl"
              animate={{ scale: 1 }} 
              whileHover={{ scale: 1.1, boxShadow: "0 4px 20px rgba(79, 76, 76, 0.5)" , border: "1px solid rgba(255, 255, 255, 0.2)" }} 
              whileTap={{ scale: 0.95 }}
            >
            Let's Talk 
            <span className="group-hover:translate-x-1 transition-transform">
              <svg width="25px" height="25px" viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#fff" d="m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"></path><path fill="#fff" d="M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"></path></g></svg>
            </span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div className="relative" initial={{ x: "50%", opacity: 0 }} animate={{ x: "0%", opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <img  src="/src/assets/portfolio-dashboard.png" alt="Profile" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        </motion.div>
      </div>
    </section>
    <section className="bg-[var(--background-color)]">
        <div className="container mx-auto flex flex-nowrap items-center overflow-x-scroll  gap-8">
            <ul className="flex flex-col gap-4">
                {TimelineData.map((item, index) => (
                 <li key={index} className="text-xl font-bold text-white">{item.year}</li>
                ))}
            </ul>
            <div className="flex item-stretch  gap-8 grow-1 overflow-x-scroll h-full">
            {TimelineData.map((item, index) => (
              <div key={index} className="flex flex-col items-stretch shrink-0 grow-2 flex-nowrap w-[300px]">
                <h3 className="text-xl font-bold text-white mb-4">{item.year}</h3>
                <div className="flex flex-row gap-4 h-full shrink-0 w-[300px]">
                {item.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="p-4 p-4 grow-1 border border-white rounded-sm shadow-lg w-[300px]">
                    <h4 className="text-lg font-semibold text-white">{detail.title}</h4>
                    <p className="text-white">{detail.description}</p>
                    <img src={detail.refImg} alt={detail.title} className=""/>
                  </div>
                ))}
                 </div>
              </div>
            ))}
            </div>
          
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white"></h2>
    </section>
    </>
  );
}