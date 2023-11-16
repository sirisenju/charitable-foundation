import React from 'react'
import { FaChevronRight, FaEnvelope, FaEnvelopeSquare, FaFacebook, FaFacebookSquare, FaTwitter, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'

function Footer() {
    return (
        <section className='min-h-min bg-[#2c2c2c]/90 pb-[6%] pt-[6%] xl:pb-[2%] xl:pt-[2%] text-white'>
            <div className='w-full md:w-[80%] grid grid-cols-1 sm:grid-cols-2 mx-auto h-[40%] xl:max-w-6xl'>
                <div className='max-w-lg p-4'>
                    <div className='flex items-center pb-3'>
                        <img src="/assets/logo1.png" className='h-10 w-10' alt="" /> 
                        <p className='pl-3'>The Royal Family Charitable Foundation</p>     
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='flex pt-2 gap-x-2'>
                        <FaFacebook size={25}/>
                        <FaWhatsapp size={25}/>
                        <FaEnvelope size={25}/>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3'>
                    <div className='max-w-lg p-4'>
                        <p className='pb-2'>Menu</p>
                        <ul>
                            <li className='flex items-center'><FaChevronRight/>Home</li>
                            <li className='flex items-center'><FaChevronRight/>About us</li>
                            <li className='flex items-center'><FaChevronRight/>Contact us</li>
                            <li className='flex items-center'><FaChevronRight/>Gallery</li>
                        </ul>
                    </div>
                    <div className='max-w-lg p-4'>
                        <p className='pb-2'>About us</p>
                        <ul>
                            <li className='flex items-center'><FaChevronRight/>Contact us</li>
                            <li className='flex items-center'><FaChevronRight/>FAQ</li>
                            <li className='flex items-center'><FaChevronRight/>Help</li>
                        </ul>
                    </div>
                    <div className='max-w-lg p-4'>
                        <p className='pb-2'>Categories</p>
                        <ul>
                            <li className='flex items-center'><FaChevronRight/>Education</li>
                            <li className='flex items-center'><FaChevronRight/>Healthy food</li>
                            <li className='flex items-center'><FaChevronRight/>Medical help</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mx-auto w-full md:w-[80%] flex justify-between p-4 border-t-2 border-gray-400 xl:max-w-6xl'>
                <p>Powered by ROOT. All rights reserved.</p>
                <p>copyright 2023</p>
            </div>
        </section>
    )
}

export default Footer
