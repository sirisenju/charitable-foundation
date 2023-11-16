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
                        <h2 className='text-lg'>Transform Lives with Your Generosity</h2>
                        <p className=' text-lg pt-2 pb-2'>Your donation is more than a contribution; it's a lifeline for those in need. 
                            At The Royal Family Charitable Foundation, we believe in the power of collective 
                            action to create lasting change. Your support enables us to provide education, 
                            healthcare, and hope to individuals and communities facing challenges.
                        </p>
                        <div className='block sm:flex max-w-5xl'>
                            <img src="/assets/simple-smile.jpg" className='w-[360px] h-full' alt="" />
                            <div className='w-full sm:max-w-2xl p-4 pt-4'>
                                <p className=' text-xl font-semibold'>Why Donate?</p>
                                <ul>
                                    <li className='pt-2 text-base'><span className=' font-semibold'>Empower Tomorrow's Leaders: </span> Your donation directly contributes to the education and 
                                        development of young minds, empowering them to break the cycle of adversity.
                                    </li>
                                    <li className='pt-2 text-base'><span className=' font-semibold'>Provide Vital Healthcare:</span> Support our mission to ensure access to essential healthcare for 
                                        those who need it most, 
                                        offering a chance at a healthier and brighter future.
                                    </li>
                                    <li className='pt-2 text-base'><span className=' font-semibold'>Foster Hope: </span>
                                         Your generosity helps us create a nurturing environment, fostering hope 
                                        and resilience in the face of difficult circumstances.
                                    </li>
                                </ul>
                                <p className='pb-3 pt-3'>Enter any amount, donate now.</p>
                                <input type="number" className='h-[30px] w-full sm:w-[200px] p-2 outline-none rounded-3xl' placeholder='10,000.00'/>
                            </div>
                        </div>
                        <div className='max-w-2xl mt-4'>
                            <form action="" className=''>
                                <p className='pb-4 font-semibold text-xl'>Personal info.</p>
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
