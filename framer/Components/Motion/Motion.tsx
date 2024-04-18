'use client'

import React from 'react'
import { motion, useScroll } from "framer-motion";
import { reverse } from 'dns';
const gridVariantsContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.25 } } }
const gridSquareVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } }

const SVGIconsVariants = {
    hidden: {
        opacity: 0,
        pathlength: 0,
        fill: "rgba(252,211,77,0)",
    },
    visible: {
        opacity: 1,
        pathlength: 1,
        fill: "rgba(252,211,77,1)",
    }
}
const Motion = () => {

    const { scrollYProgress: completionProgress } = useScroll();
    return (
        <div className='flex flex-col gap-10 overflow-x-hidden'>
            <motion.section
                variants={gridVariantsContainer}

                initial="hidden"
                animate="show"
                className='grid grid-cols-3 gap-10 p-10 '>
                <motion.div variants={gridSquareVariants} className='bg-slate-500 rounded-lg aspect-square justify-center flex items-center gap-10'>

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 5, ease: "easeOut", delay: 0.5, repeat: 2 }}

                        className='w-20 h-20 bg-stone-100 rounded-lg '>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 5, ease: "easeIn", repeat: 2 }}

                        className='w-20 h-20 bg-stone-100 rounded-full ' />

                </motion.div>

                {/* //transform 1 keyframes to another */}
                <motion.div variants={gridSquareVariants} className='bg-slate-500 rounded-lg aspect-square justify-center flex items-center gap-10'>
                    <motion.div className='w-1/3 h-1/3 bg-rose-500 shadow-md'
                        animate={{
                            scale: [1, 2, 2, 1],
                            rotate: [0, 90, 90, 0],
                            borderRadius: ["10%", "10%", "70%", "10%"]
                        }}

                        transition={{
                            duration: 5,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 1

                        }}
                    >

                    </motion.div>

                </motion.div>


                <motion.div variants={gridSquareVariants} className='bg-slate-500 rounded-lg aspect-square justify-center flex items-center gap-10'>

                    <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1, backgroundColor: "#d1d5db", color: "black" }} transition={{ bounceDamping: 10, bounceStiffness: 600 }} className='w-1/2 py-5 bg-emerald-600 text-2xl  text-gray-100 font-light tracking-wide'>Subscribe</motion.button>
                </motion.div>
                {/* Drag and Drop */}
                <motion.div variants={gridSquareVariants} className='bg-slate-500 rounded-lg aspect-square justify-center flex items-center gap-10'>

                    <motion.div className='w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab'
                        drag
                        dragConstraints={{ top: -125, bottom: 125, left: -125, right: 125 }}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                    >


                    </motion.div>

                </motion.div>

                {/* animation scrolling? */}
                <motion.div variants={gridSquareVariants} className='bg-slate-500 rounded-lg aspect-square justify-center flex items-center gap-10'>

                    <motion.div className='w-40 aspect-square rounded-xl bg-gray-50/20'>
                        <motion.div className='w-full h-full rounded-lg bg-gray-900 origin-bottom' style={{ scaleY: completionProgress }} />
                    </motion.div>

                </motion.div>

                {/* SVG Animations */}
                <motion.div variants={gridSquareVariants} className='bg-slate-500 rounded-lg aspect-square justify-center flex items-center gap-10'>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-1/2 stroke-amber-500 stroke-[0.5]"
                    >
                        <motion.path
                            d="M12 2l2.892 6.191 6.975.976-5.043 4.905 1.181 7.281L12 18.5l-5.006 3.154 1.181-7.281L2.133 9.167l6.975-.976L12 2zm0  "
                            variants={SVGIconsVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut", delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 },
                                fill: { duration: 2, ease: "easeIn", delay: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 },

                            }}
                        />
                    </motion.svg>

                </motion.div>
            </motion.section>

        </div>
    )
}

export default Motion