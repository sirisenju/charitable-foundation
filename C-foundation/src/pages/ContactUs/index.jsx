import React from 'react'
import NavLinks from '../../components/NavLinks'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import Footer from '../../components/Footer'

function ContactUs() {
    return (
        <main>
            <NavLinks/>
            {/**volunteer section starts...................................................................... */}
            <section className='min-h-max pb-10 sm:mt-10'>
                <div className='w-full sm:w-[80%] mx-auto p-2 max-w-7xl'>
                    <div className='max-w-xl text-center mx-auto'>
                            <h3 className='font-semibold text-4xl pb-2'>Volunteers</h3>
                            <p>Together, let's compose a masterpiece of compassion, where every note 
                                played and every emotion shared contributes to a more empathetic and connected world. 
                            </p>
                    </div>
                    <div>
                    <div className='block sm:flex sm:flex-wrap w-full gap-x-4 pt-4 justify-center'>
                        <img src="/assets/volunteer1.png" className='w-[570px] h-[450px] object-cover object-center' alt="" />
                        <img src="/assets/volunteer2.png" className='w-[570px] h-[450px] object-cover object-center' alt="" />
                    </div>
                    <div className='text-start sm:text-justify pt-4'>
                        <h3 className='text-2xl font-semibold pb-2'>Become a volunteer today, become one of us.</h3>
                        <p>At The Royal Family Charitable Foundation, we believe in the transformative power of 
                            emotions — the profound impact of a shared smile, the warmth of a comforting embrace, 
                            and the joy that emanates from the depths of genuine connection. Volunteering and helping 
                            are not just actions for us; they are the threads that weave a tapestry of hope, compassion, and love.
                        </p>
                        <h3 className='text-2xl font-semibold pt-4'>The Heartbeat of Hope:</h3>
                        <p>Volunteering is the heartbeat of hope in our mission. It's the rhythmic pulse of individuals who 
                            choose to extend the reach of their hearts beyond themselves. In every volunteered moment, we witness 
                            the birth of hope, as our volunteers become storytellers of resilience, crafting tales of strength and 
                            optimism for the children we serve.
                        </p>
                    </div>
                </div>
                </div>
            </section>
            {/**volunteer section starts...................................................................... */}

            {/**volunteer team section starts...................................................................... */}
            <section className='min-h-min'>
                <div className='w-full sm:w-[80%] mx-auto pb-0 sm:pb-[5%] p-2 xl:max-w-7xl'>
                    <div className='w-full pt-10'>
                        <h3 className='text-3xl'>Volunteer Team</h3>
                        <p className='text-start sm:text-justify text-lg sm:text-base pb-5'>
                            At The Royal Family Charitable Foundation, our team of volunteers is not just a collection 
                            of individuals; they are the architects of dreams, the weavers of hope, and the heartbeat of 
                            our mission. Each volunteer brings a unique melody to the symphony of compassion, creating a 
                            harmonious ensemble that resonates with warmth, empathy, and a shared commitment to making a 
                            difference.
                        </p>
                    </div>
                    <div className='block sm:flex sm:flex-wrap h-full justify-between'>
                        <div className='max-w-[290px] relative mx-auto'>
                            <img src="/assets/person1.jpg" className='w-full object-cover' alt="" />
                            <div className=' bg-[#FFF8F8] relative mxl:absolute w-[90%] bottom-12 mxl:-bottom-16 mx-auto left-0 right-0 text-center rounded-3xl p-2'>
                                <p className='text-xl'>Ketty Perry</p>
                                <p className='text-base'>Head Volunteer</p>
                                <div className='flex w-full gap-x-4 justify-center'>
                                    <FaInstagramSquare size={30}/>
                                    <FaTwitterSquare size={30}/>
                                    <FaFacebookSquare size={30}/>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-[290px] relative mx-auto'>
                            <img src="/assets/person1.jpg" className='w-full object-cover' alt="" />
                            <div className=' bg-[#FFF8F8] relative mxl:absolute w-[90%] bottom-12 mxl:-bottom-16 mx-auto left-0 right-0 text-center rounded-3xl p-2'>
                                <p className='text-xl'>Ketty Perry</p>
                                <p className='text-base'>Head Volunteer</p>
                                <div className='flex w-full gap-x-4 justify-center relative'>
                                    <FaInstagramSquare size={30}/>
                                    <FaTwitterSquare size={30}/>
                                    <FaFacebookSquare size={30}/>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-[290px] relative mx-auto'>
                            <img src="/assets/person1.jpg" className='w-full object-cover' alt="" />
                            <div className=' bg-[#FFF8F8] relative mxl:absolute w-[90%] bottom-12 mxl:-bottom-16 mx-auto left-0 right-0 text-center rounded-3xl p-2'>
                                <p className='text-xl'>Ketty Perry</p>
                                <p className='text-base'>Head Volunteer</p>
                                <div className='flex w-full gap-x-4 justify-center relative'>
                                    <FaInstagramSquare size={30}/>
                                    <FaTwitterSquare size={30}/>
                                    <FaFacebookSquare size={30}/>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-[290px] relative mx-auto'>
                            <img src="/assets/person1.jpg" className='w-full object-cover' alt="" />
                            <div className=' bg-[#FFF8F8] relative mxl:absolute w-[90%] bottom-12 mxl:-bottom-16 mx-auto left-0 right-0 text-center rounded-3xl p-2'>
                                <p className='text-xl'>Ketty Perry</p>
                                <p className='text-base'>Head Volunteer</p>
                                <div className='flex w-full gap-x-4 justify-center relative'>
                                    <FaInstagramSquare size={30}/>
                                    <FaTwitterSquare size={30}/>
                                    <FaFacebookSquare size={30}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/**volunteer team section ends...................................................................... */}

            {/**our donors map start...................................................................... */}
            <section className='min-h-min'>
                <div className='w-full sm:w-[80%] mx-auto p-4 xl:max-w-6xl'>
                    <div className='max-w-3xl sm:pt-10 sm:text-center mx-auto'>
                        <h3 className='text-3xl pb-2'>Our Donors</h3>
                        <p className='text-lg sm:text-base pb-5'>As we strive to make a lasting impact, we invite you to join 
                            hands with us once again. Your donation, no matter the size, fuels the engine of change, 
                            turning dreams into reality. Together, let's continue this journey of compassion and transformation.
                            Your generosity is not just a donation; it's a catalyst for change. Join us in shaping a world where 
                            every child's potential is realized. Together, we can make a difference.
                        </p>
                    </div>
                    <img src="/assets/Donor-Map.png" className='object-center object-contain h-full w-full' alt="" />
                </div>
            </section>
            {/**our donors map start...................................................................... */}

            {/**stay in contact section starts...................................................................... */}
            <section className='min-h-min'>
                <div className='bg-[#FFF8F8] w-full sm:w-[80%] mx-auto pb-10 p-2 xl:max-w-6xl'>
                    <div className='max-w-2xl pt-10 text-center mx-auto'>
                        <h3 className='text-3xl pb-2'>Connect with us.</h3>
                        <p className=' text-base pb-5'>Stay in the loop with The Royal Family Charitable Foundation! Connect with us for the 
                            latest updates, inspiring stories, and opportunities to make a difference.
                            Drop us a message here. Together, let's build a community of positive change!
                        </p>
                    </div>
                    <div className='max-w-3xl mx-auto pt-7'>
                        <form action="" className=''>
                            <div className='flex gap-x-4 text-[#7F7F7F] max-[390px]:inline'>
                                <input type="text"  placeholder='First name' className='max-[390px]:w-full w-[50%] p-3 h-12 mb-4 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]'/>
                                <input type="text"  placeholder='Email' className='max-[390px]:w-full w-[50%] p-3 h-12 mb-4 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]'/>
                            </div>
                            <div className='flex gap-x-4 text-[#7F7F7F] max-[390px]:inline'>
                                <input type="text"  placeholder='Phone' className='max-[390px]:w-full w-[50%] p-3 h-12 mb-4 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]'/>
                                <input type="text"  placeholder='Subject' className='max-[390px]:w-full w-[50%] p-3 h-12 mb-4 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]'/>
                            </div>
                            <textarea name="" placeholder='Message' id="" className=' w-full h-28 p-3 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]'>
                            </textarea>
                        </form>
                        <div className=' w-full flex justify-center pt-4'>
                            <button className='bg-green-200 py-2 px-10 rounded-3xl self-center'>Send</button>
                        </div>
                    </div>
                </div>
            </section>
            {/**stay in contact section ends...................................................................... */}
            <Footer/>
        </main>
    )
}

export default ContactUs
