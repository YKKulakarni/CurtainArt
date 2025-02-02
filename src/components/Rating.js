import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";


function Rating({ totalStars = 5 }) {
    const [rating, setRating] = useState(0);
    return (
        <div className='w-full h-fit flex flex-1 items-center justify-center flex-col'>
            <div className="rating w-full h-auto p-10 bg-[#837575] flex flex-col md:flex-row items-center justify-around md:h-[40vh]" id='rating'>
                {/* Left Section */}
                <div className="rating-left flex flex-col items-center justify-center text-center mb-5 md:mb-0">
                    <h2 className="text-lg md:text-[2.5vw] md:pb-5 ">Committed to</h2>
                    <h1 className="text-xl md:text-[3vw]">Your satisfaction</h1>
                </div>

                {/* Center Section */}
                <div className="rating-center flex items-center justify-center gap-2 bg-[#f4e6de] rounded-md shadow-[2px_2px_5px_rgba(0,0,0,0.4)] p-3 mb-4 md:mb-0">
                    <FcGoogle className='size-7' />
                    <p className="text-sm position-relative top-2 md:text-[1.2vw]">{rating} Rating</p>
                    {[...Array(totalStars)].map((star, index) => {
                        const starValue = index + 1;
                        return (
                            <span
                                className='text-4xl'
                                key={starValue}
                                onClick={() => setRating(starValue)}
                                style={{ cursor: 'pointer', color: starValue <= rating ? 'gold' : 'gray' }}
                            >
                                &#9733;
                            </span>
                        );
                    })}
                </div>

                {/* Right Section */}
                <div className="rating-right w-full md:w-1/3 flex flex-col items-center justify-center text-center">
                    <p className="text-base md:text-[1.8vw] leading-tight">Professional, personalized service, <br /> easy to reach for any questions. <br /> Punctual, highly recommended</p>
                </div>
            </div>
            <div className="w-full h-40 bg-[#f4e6de] flex items-center justify-center">
                <h1 className='text-[3.8vw] md:text-5xl'>Why +10,000 client trusted us</h1>
            </div>
        </div>
    )
}

export default Rating
