import React from 'react';
import CurtainOne from '../assest/images/Curtain-1.jpg';
import CurtainTwo from '../assest/images/Curtain-2.jpg';
import CurtainThree from '../assest/images/Curtain-3.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function CurtainTypes() {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });

            return (
                <div className='bg-[#f4e6de] flex items-center justify-center flex-col gap-10 py-12'>
            <motion.img 
                src={CurtainOne} 
                alt=""
                className='w-3/4 h-1/2 object-contain shadow-2xl'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            />
            
            <div className='flex flex-col w-full h-full'>
                <motion.h2 
                    className='text-2xl font-bold underline uppercase md:text-3xl'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Blackout Curtains
                </motion.h2>
                
                <div className="flex flex-col min-h-screen w-full items-center justify-center gap-8 py-12 px-4 md:px-8">
                    {/* First Section */}
                    <motion.div 
                        ref={ref1}
                        className="flex flex-col min-h-96  md:flex-row w-full max-w-6xl items-center justify-center gap-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView1 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img
                            className="w-full md:w-1/2 md:h-96 object-contain rounded-lg shadow-xl"
                            src={CurtainTwo}
                            alt="Modern Curtain Design"
                            whileHover={{ scale: 1.05 }}
                        />
                        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
                            <p className="text-gray-700 text-center md:text-left text-base md:text-xl leading-relaxed">
                                We've simplified every step of the process. Get your estimate online and book a visit in seconds.
                                Enjoy a smooth home consultation and a seamless installation.
                            </p>
                            <motion.button 
                                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg uppercase text-sm md:text-base"
                                whileHover={{ scale: 1.1 }}
                            >
                                Book a free visit
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Second Section */}
                    <motion.div 
                        ref={ref2}
                        className="flex flex-col md:flex-row-reverse w-full max-w-6xl items-center justify-center gap-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView2 ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img
                            className="w-full md:w-1/2 md:h-96 object-contain rounded-lg shadow-xl"
                            src={CurtainThree}
                            alt="Flexible Payment Options"
                            whileHover={{ scale: 1.05 }}
                        />
                        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
                                Flexible Payment Options
                            </h2>
                            <p className="text-gray-700 text-center md:text-left text-base md:text-xl leading-relaxed">
                                Make your vision a reality now! Our convenient checkout process allows you to pay at your own pace.
                                With payment plans tailored to your budget.
                            </p>
                            <motion.button 
                                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg uppercase text-sm md:text-base"
                                whileHover={{ scale: 1.1 }}
                            >
                                Explore Payment Plans
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                className='w-11/12 h-24 md:h-36 bg-gray-800 flex items-center justify-center rounded-xl px-2 overflow-hidden mb-5'
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            >
                <h2 className='w-11/12 text-2xl md:text-5xl font-bold absolute text-wrap text-white'>
                    New! Motorized offers starting at 1,000 AED
                </h2>
            </motion.div>
        </div>
    )    
}


export default CurtainTypes
