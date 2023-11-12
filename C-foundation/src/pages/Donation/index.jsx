import React from 'react'
import NavLinks from '../../components/NavLinks'
import Footer from '../../components/Footer'

function Donation() {
    return (
        <main>
            <NavLinks/>
            {/* first section for donation............................................. */}
            <section className='h-full'>
                <div className='bg-[#526F67] w-full sm:w-[80%] mx-auto p-2 sm:p-8 xl:max-w-6xl'>
                    <div className='pt-4 text-white'>
                        <h3 className=' text-lg font-bold.'>Your Support Matters.</h3>
                        <p className='text-lg pt-4 pb-4'>Every donation, big or small, makes a profound impact. When you donate to The Royal Family Charitable Foundation, 
                        you're not just giving money; you're giving hope, opportunity, and support to those who need it most. Your generosity helps us continue our vital 
                        work in education, healthcare, and public work.</p>
                        <div className='block md:flex w-full sm:max-w-3xl'>
                            <img src="/assets/simple-smile.jpg" className='w-full sm:w-[360px] h-full' alt="" />
                            <div className='max-w-sm sm:p-4 pt-10'>
                                <h3>How your donations helps?</h3>
                                <ul className='list-disc pl-5'>
                                    <li>Your contributions enable us to provide food and educational materials to underprivileged children.</li>
                                    <li>Your support helps us in fund medical clinics in remote areas.</li>
                                    <li> Every amount you donate goes towards providing basic nessities for children all around.</li>
                                </ul>
                                <p className='pb-3 pt-3'>Join us in making a difference. Enter any amount, donate now.</p>
                                <input type="number" className='h-[50px] lg:h-[30px] w-full sm:w-[170px] p-4 outline-none rounded-3xl' placeholder='10,000.00'/>
                            </div>
                        </div>
                        <div className='max-w-xl mt-4'>
                            <form action="" className=''>
                                <p className='pb-4'>Personal info.</p>
                                <div className='flex gap-x-4 text-white max-[390px]:inline'>
                                    <input type="text"  placeholder='First name' className='max-[390px]:w-full w-[50%] p-3 h-12 mb-4 outline-none rounded-3xl bg-transparent border-2 border-[#CFFF8D]'/>
                                    <input type="text"  placeholder='Email' className='max-[390px]:w-full w-[50%] p-3 h-12 mb-4 outline-none rounded-3xl bg-transparent border-2 border-[#CFFF8D]'/>
                                </div>
                                <div className='flex gap-x-4 text-white max-[390px]:inline'>
                                    <input type="text"  placeholder='Phone' className='max-[390px]:w-full w-[50%] p-3 h-12 mb-4 outline-none rounded-3xl bg-transparent border-2 border-[#CFFF8D]'/>
                                </div>
                            </form>
                            <div className='w-full flex justify-center sm:justify-start pt-2'>
                                <button className='bg-green-200 py-2 px-14 rounded-3xl self-center'>Donate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* first section for donation ends............................................. */}
            <Footer/>
        </main>
    )
}

export default Donation
