import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function BestSeller() {
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className='w-full h-fit flex flex-col items-center justify-center'>
            <motion.h2
                className='text-5xl'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Shop Our BestSellers
            </motion.h2>
            <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Prices for standard 2m x 3m windows
            </motion.h4>
            <div className='w-5/6 h-screen flex flex-col items-center justify-between gap-2'>
                <motion.div
                    ref={ref1}
                    className='w-full h-1/2 flex items-center justify-center gap-2'
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9 }}
                >
                    <motion.img
                        src={require('../assest/images/BestSeller-One.jpg')}
                        className='w-1/2 h-full'
                        alt="Best Seller"
                        whileHover={{ scale: 1.01 }}
                    />
                    <motion.img
                        src={require('../assest/images/BestSeller-Two.jpg')}
                        className='w-1/2 h-full'
                        alt="Best Seller"
                        whileHover={{ scale: 1.01 }}
                    />
                </motion.div>
                <motion.div
                    ref={ref2}
                    className='w-full h-1/2 flex items-center justify-center'
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9 }}
                >
                    <motion.img
                        src={require('../assest/images/BestSeller-Three.jpg')}
                        className='w-full h-full'
                        alt="Best Seller"
                        whileHover={{ scale: 1.01 }}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default BestSeller;

