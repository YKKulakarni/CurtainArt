import React, { Suspense } from 'react'

function Home() {
    return (
        <Suspense>
            <div className="w-full h-screen flex justify-center my-6 items-center bg-[#f4e6de] relative backdrop-blur-md ">
                <img src={require('../assest/images/Home-banner.jpg')} alt="Home-Image" className="w-11/12 object-cover h-screen opacity-80 rounded-3xl md:w-3/4" />
                <div className="home-text absolute top-1/25 w-full z-10">
                    <h1 className="text-[8.5vw] font-bold  md:text-[3.5vw]">Custom made blinds <br /> and Curtains</h1>
                </div>
            </div>
        </Suspense>
    )
}

export default Home
