import React from 'react'
import NavLinks from '../../components/NavLinks'
import Footer from '../../components/Footer'

function Donation() {
    return (
        <main>
            <NavLinks/>
            {/* first section for donation............................................. */}
            <section className='h-full w-full '>
                <div className='bg-[#526F67] w-full lg:w-[80%] mx-auto p-2 sm:p-8 xl:max-w-6xl'>
                    <div className='pt-4 text-white'>
                        <p className='text-lg pt-4 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, nam?</p>
                        <div className='block sm:flex max-w-3xl'>
                            <img src="/assets/simple-smile.jpg" className='w-[360px] h-full' alt="" />
                            <div className='w-full sm:max-w-sm p-4 pt-10'>
                                <p>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Tenetur beatae accusantium dicta neque illo excepturi?
                                </p>
                                <p className='pb-3 pt-3'>Enter any amount, donate now.</p>
                                <input type="number" className='h-[30px] w-full sm:w-[200px] p-2 outline-none rounded-3xl' placeholder='10,000.00'/>
                            </div>
                        </div>
                        <div className='max-w-xl mt-4'>
                            <form action="" className=''>
                                <p className='pb-4'>Personal info.</p>
                                <div className='flex gap-x-4 text-white max-[390px]:inline'>
                                    <input type="text"  placeholder='First name' className='max-[390px]:w-full w-[50%] p-3 h-10 mb-4 outline-none rounded-3xl bg-transparent border-2 border-[#CFFF8D]'/>
                                    <input type="text"  placeholder='Email' className='max-[390px]:w-full w-[50%] p-3 h-10 mb-4 outline-none rounded-3xl bg-transparent border-2 border-[#CFFF8D]'/>
                                </div>
                                <div className='flex gap-x-4 text-white max-[390px]:inline'>
                                    <input type="text"  placeholder='Phone' className='max-[390px]:w-full w-[50%] p-3 h-10 mb-4 outline-none rounded-3xl bg-transparent border-2 border-[#CFFF8D]'/>
                                </div>
                            </form>
                            <div className='w-full flex justify-center sm:justify-start pt-2'>
                                <button className='bg-green-200 py-2 px-10 rounded-3xl self-center'>Donate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default Donation
