import React, { Suspense } from 'react'
import BannerImage from '../assest/images/home-banner.jpg'

function Home() {
    return (
        <Suspense>
            <div className="w-full h-screen flex justify-center items-center bg-[#242424] relative backdrop-blur-md ">
                <img src={BannerImage} alt="Home-Image" className="w-full h-screen opacity-80" />
                <div className="home-text absolute top-1/25 w-full z-10">
                    <h1 className="text-[8.5vw] font-bold  md:text-[3.5vw]">Custom made blinds <br /> and Curtains</h1>
                </div>
            </div>
        </Suspense>
    )
}

export default Home
