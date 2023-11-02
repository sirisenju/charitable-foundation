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
                    <div className='max-w-sm text-center mx-auto'>
                            <h3 className='font-semibold text-4xl pb-2'>Volunteers</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Molestiae a esse quam at commodi iste!
                            </p>
                    </div>
                    <div>
                    <div className='block sm:flex sm:flex-wrap w-full gap-x-4 pt-4 justify-center'>
                        <img src="src/assets/volunteer1.png" className='w-[570px] h-[450px] object-cover object-center' alt="" />
                        <img src="src/assets/volunteer2.png" className='w-[570px] h-[450px] object-cover object-center' alt="" />
                    </div>
                    <div className='text-start sm:text-justify pt-4'>
                        <h3 className=' text-3xl font-semibold pb-2'>Become a volunteer today, become one of us.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel doloribus quas, cumque inventore numquam sunt explicabo 
                            enim consectetur veritatis quis esse distinctio saepe repudiandae assumenda omnis obcaecati, iste expedita. 
                            Nam praesentium iure fuga pariatur non numquam, tempore saepe repellat! Ut perspiciatis aspernatur enim, ipsam, molestias 
                            odio quis cupiditate totam illo quae laborum, ab et doloribus error itaque. Eveniet, voluptatum dolor!
                        </p>
                    </div>
                </div>
                </div>
            </section>
            {/**volunteer section starts...................................................................... */}

            {/**volunteer team section starts...................................................................... */}
            <section className='min-h-min'>
                <div className='w-full sm:w-[80%] mx-auto pb-0 sm:pb-[5%] p-2'>
                    <div className='max-w-lg pt-10'>
                        <h3 className='text-3xl'>Volunteer Team</h3>
                        <p className='text-start sm:text-justify text-base pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor eius porro rem odit officia 
                            aliquam necessitatibus magni, incidunt maiores? Eos, sed qui eveniet maxime est modi assumenda?
                        </p>
                    </div>
                    <div className='block sm:flex sm:flex-wrap h-full justify-between'>
                        <div className='max-w-[290px] relative mx-auto'>
                            <img src="src/assets/person1.jpg" className='w-full object-cover' alt="" />
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
                            <img src="src/assets/person1.jpg" className='w-full object-cover' alt="" />
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
                            <img src="src/assets/person1.jpg" className='w-full object-cover' alt="" />
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
                            <img src="src/assets/person1.jpg" className='w-full object-cover' alt="" />
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
                <div className='w-full sm:w-[80%] mx-auto p-4'>
                    <div className='max-w-lg sm:pt-10 text-center mx-auto'>
                        <h3 className='text-3xl pb-2'>Our Donors</h3>
                        <p className=' text-base pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor eius porro rem odit officia 
                            aliquam necessitatibus magni, incidunt maiores? Eos, sed qui eveniet maxime est modi assumenda?
                        </p>
                    </div>
                    <img src="src/assets/Donor-Map.png" className='object-center object-contain h-full w-full' alt="" />
                </div>
            </section>
            {/**our donors map start...................................................................... */}

            {/**stay in contact section starts...................................................................... */}
            <section className='min-h-min'>
                <div className='bg-[#FFF8F8] w-full sm:w-[80%] mx-auto pb-10 p-2'>
                    <div className='max-w-lg pt-10 text-center mx-auto'>
                        <h3 className='text-3xl pb-2'>Connect with us.</h3>
                        <p className=' text-base pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolor eius porro rem odit officia 
                            aliquam necessitatibus magni, incidunt maiores? Eos, sed qui eveniet maxime est modi assumenda?
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
