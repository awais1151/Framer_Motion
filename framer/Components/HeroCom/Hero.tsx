'use client'
import {Stars} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {motion, useMotionTemplate, useMotionValue,animate } from "framer-motion"
import { useEffect } from "react";
const COLORS=["#13ffaa","#1e67c6","#ce84cf","#dd335c"];
const Hero = () => {
const color=useMotionValue(COLORS[0]);

  const backgroundImage=useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
 const  border=useMotionTemplate`1px solid ${color}`;
 const boxShadow=useMotionTemplate`0px 4px 24px ${color}`;
  useEffect(() => {
    animate(color,COLORS,{
      ease:'easeInOut',
      duration:10,
      repeat:Infinity,
      repeatType:"mirror"
    })
  }, [])
  
  return (
  
      <  motion.section style={{backgroundImage}}   
       className=" flex h-screen justify-center items-center bg-gray-950   py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">Unleash Your Creativity</h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">Discover the tools and inspiration to bring your ideas to life.</p>
        <div className="flex justify-center">
            <motion.button  style={{boxShadow, border}} whileHover={{scale:1.015}} whileTap={{scale:0.985}} className="bg-white hover:bg-gray-200 text-purple-600 font-bold py-3 px-8 rounded-full uppercase tracking-wide transition duration-300">Get Started</motion.button>
        </div>
    </div>

    <div className="absolute inset-0 z-0 ">
      <Canvas>
        <Stars radius={50} count={2500} factor={4} fade speed={2}/>
      </Canvas>
    </div>
</motion.section>

      
  )
}

export default Hero