import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function BestSeller() {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className='w-full py-16 px-4 md:px-8 bg-gray-50'>
            <div className='max-w-7xl mx-auto flex flex-col items-center'>
                <motion.h2
                    className='text-3xl md:text-5xl font-bold text-gray-900 mb-4 text-center'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Shop Our Best Sellers
                </motion.h2>
                
                <motion.p
                    className='text-lg md:text-xl text-gray-600 mb-8 md:mb-12 text-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Prices for standard 2m × 3m windows
                </motion.p>

                <div className='w-full space-y-8'>
                    <motion.div
                        ref={ref1}
                        className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4'
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView1 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {[
                            { src: 'BestSeller-One.jpg', alt: 'Modern window design' },
                            { src: 'BestSeller-Two.jpg', alt: 'Energy efficient windows' },
                            { src: 'BestSeller-Three.jpg', alt: 'Vintage style windows' },
                            { src: 'BestSeller-Four.jpg', alt: 'Contemporary bay windows' },
                        ].map((image, index) => (
                            <div key={index} className='relative aspect-square overflow-hidden rounded-xl shadow-lg'>
                                <motion.img
                                    src={require(`../assets/images/${image.src}`)}
                                    className='w-full h-full object-cover'
                                    alt={image.alt}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        ref={ref2}
                        className='w-full'
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView2 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className='relative aspect-video md:aspect-[3/1] overflow-hidden rounded-xl shadow-lg'>
                            <motion.img
                                src={require('../assets/images/BestSeller-Five.jpg')}
                                className='w-full h-full object-cover'
                                alt="Panoramic view windows"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default BestSeller;