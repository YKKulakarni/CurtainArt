import React from 'react'
import PhotoGrid from './PhotoGrid';
import Image1 from '../assest/images/BestSeller-1.jpg'
import Image2 from '../assest/images/BestSeller-2.jpg'
import Image3 from '../assest/images/BestSeller-3.jpg'
import Image4 from '../assest/images/BestSeller-4.jpg'
import Image5 from '../assest/images/BestSeller-5.jpg'
import Image6 from '../assest/images/BestSeller-6.jpg'
import Image7 from '../assest/images/BestSeller-7.jpg'
import Image8 from '../assest/images/BestSeller-8.jpg'




const photos = [
    { url: Image1, alt: 'Placeholder 1' },
    { url: Image2, alt: 'Placeholder 2' },
    { url: Image3, alt: 'Placeholder 3' },
    { url: Image4, alt: 'Placeholder 4' },
    { url: Image5, alt: 'Placeholder 5' },
    { url: Image6, alt: 'Placeholder 6' },
    { url: Image7, alt: 'Placeholder 7' },
    { url: Image8, alt: 'Placeholder 8' },

];
function BestSeller() {

    return (
        <div className='flex items-center justify-center flex-col'>
            <h2 className='text-2xl md:text-5xl font-bold'>Shop our Best Seller</h2>
            <div className="container mx-auto">
                <PhotoGrid photos={photos} />
            </div>
            <div className='h-fit w-11/12 flex bg-[#837575] p-8 items-center justify-center rounded-xl flex-col gap-2 md:flex-row'>
                <img src={Image1} className='h-96' alt="" />
                <h2 className='text-2xl md:text-5xl font-bold w-1/2'>Custom made Blinds and Curtains</h2>
            </div>
        </div>
    )
}

export default BestSeller
