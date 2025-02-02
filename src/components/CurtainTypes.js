import React from 'react'
import CurtainOne from '../assest/images/Curtain-1.jpg'
import CurtainTwo from '../assest/images/Curtain-2.jpg'
import CurtainThree from '../assest/images/Curtain-3.jpg'
// import ConfettiExplosion from 'react-confetti';

function CurtainTypes() {
    // const [isExploding, setIsExploding] = React.useState(false);
    return (
        <div className='bg-[#f4e6de] flex items-center justify-center flex-col gap-10'>
            <img src={CurtainOne} alt="" className='w-full' />
            <div className='flex flex-col gap-2 w-full h-fit p-2'>
                <h2 className='text-2xl font-bold underline uppercase md:text-3xl'>blackout curtains</h2>
                <div className='flex w-full items-center justify-center gap-2'>
                    <img className='w-1/2 object-cover' src={CurtainTwo} alt="" />
                    <div className='flex flex-col items-center gap-4 text-sm w-1/2 md:text-3xl'>
                        <p>We've simplified every step of the process. Get your estimate online and book a visit in seconds. Enjoy a smooth home consultation and a seamless installation.</p>
                        <button className='bg-gray-200 px-6 py-2 rounded-md font-bold hover:bg-[#837575] hover:text-gray-100 transition-all 0.3s ea shadow-md uppercase'>Book a free visit</button>
                    </div>
                </div>
                <div className='flex w-full items-center justify-center gap-1'>
                    <div className='flex flex-col items-center gap-4 text-sm w-1/2 md:text-3xl'>
                        <h2 className='text-2xl md:text-5xl font-bold'>Flexible Payment Option</h2>
                        <p>Make your vision a reality now! Our convenient checkout process allows you to pay at your own place. With payment plans tailored to your budget.</p>
                        <button className='bg-gray-200 px-6 py-2 rounded-md font-bold hover:bg-[#837575] hover:text-gray-100 transition-all 0.3s ea shadow-md uppercase
                        '>Book a free visit</button>
                    </div>
                    <img className='w-1/2 object-cover' src={CurtainThree} alt="" />
                </div>
            </div>
            <div className='w-11/12 h-24 md:h-36 bg-[#837575] flex items-center justify-center rounded-xl px-2 overflow-hidden mb-5'>
            {/* <img src="https://www.gifcen.com/wp-content/uploads/2022/11/confetti-gif-2.gif" alt="" className='w-full' /> */}
             {/* <ConfettiExplosion className='w-full h-1/4 z-10 ' /> */}
                <h2 className='w-11/12 text-2xl md:text-5xl font-bold absolute text-wrap'>New! Motorized offers starting at 1,000 AED</h2>
            </div>
        </div>
    )
}


export default CurtainTypes
