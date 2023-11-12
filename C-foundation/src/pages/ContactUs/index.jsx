import React from 'react'
import NavLinks from '../../components/NavLinks'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import Footer from '../../components/Footer'
import Email from '../../components/Email'

function ContactUs() {
    return (
        <main>
            <NavLinks/>
            {/**volunteer section starts...................................................................... */}
            <section className='min-h-max pb-10 sm:mt-10'>
                <div className='w-full sm:w-[80%] mx-auto p-2 max-w-7xl'>
                    <div className='max-w-4xl text-center mx-auto'>
                            <h3 className='font-semibold text-4xl pb-2'>Volunteers</h3>
                            <p>Your Time and Skills Can Create a World of Difference
                            </p>
                            <p>At The Royal Family Charitable Foundaion, we believe that volunteers are the backbone of our efforts to bring about positive change. 
                                Whether you can give a few hours a month or a more substantial commitment, your contribution is invaluable to 
                                us and the communities we serve.
                            </p>
                    </div>
                    <div>
                    <div className='block sm:flex sm:flex-wrap w-full gap-x-4 pt-4 justify-center'>
                        <img src="/assets/volunteer1.png" className='w-[570px] h-[450px] object-cover object-center' alt="" />
                        <img src="/assets/volunteer2.png" className='w-[570px] h-[450px] object-cover object-center' alt="" />
                    </div>
                    <div className='text-start sm:text-justify pt-4'>
                        <h3 className='text-3xl font-semibold pb-2'>Become a volunteer today, become one of us.</h3>
                        <ul className='list-disc sm:pl-10'>
                            <li><span className=' font-bold text-lg'>Make an Impact:</span> Directly contribute to our projects and see the tangible results of your efforts.</li>
                            <li><span className=' font-bold text-lg'>Gain Experience:</span> Develop new skills and gain experience in areas such as community development, education, healthcare, or environmental conservation.</li>
                            <li><span className=' font-bold text-lg'>Connect with Community:</span> Join a network of passionate individuals dedicated to making a difference.</li>
                        </ul>
                    </div>
                </div>
                </div>
            </section>
            {/**volunteer section starts...................................................................... */}

            {/**volunteer team section starts...................................................................... */}
            <section className='min-h-min'>
                <div className='w-full sm:w-[80%] mx-auto pb-0 sm:pb-[5%] p-2 xl:max-w-7xl'>
                    <div className='max-w-2xl pt-10'>
                        <h3 className='text-3xl'>
                        Our Volunteer Team - The Heart of Our Foundation.</h3>
                        <p className='text-start sm:text-justify text-base pb-5'>
                            Our volunteer team at The Royal Family Charitable Foundation is a vibrant and diverse group of individuals 
                            who share a common goal: to make a positive impact in the lives of others. They are the driving 
                            force behind our projects, bringing enthusiasm, skills, and a deep commitment to our mission.
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
                    <div className='max-w-3xl sm:pt-10 text-center mx-auto'>
                        <h3 className='text-3xl pb-2'>Our Donors</h3>
                        <p className=' text-base pb-5'>We are immensely grateful to our donors whose generosity is the cornerstone 
                        of our efforts at The Royal Family Charitable Foundation. Your contributions empower us to make real change, impacting lives 
                        across communities. Every donation, big or small, is a step towards a brighter future. Thank you for believing
                         in our mission and joining us in this journey of hope and transformation.
                        </p>
                    </div>
                    <img src="/assets/Donor-Map.png" className='object-center object-contain h-full w-full' alt="" />
                </div>
            </section>
            {/**our donors map start...................................................................... */}

            {/**stay in contact section starts...................................................................... */}
            <section className='min-h-min'>
                <div className='bg-[#FFF8F8] w-full sm:w-[80%] mx-auto pb-10 p-2 xl:max-w-6xl'>
                    <div className='max-w-4xl pt-10 text-center mx-auto'>
                        <h3 className='text-3xl pb-2'>Connect with us.</h3>
                        <p className=' text-base pb-5'>We welcome your inquiries, suggestions, and support at The Royal Family Charitable Foundation. 
                        Please feel free to reach out to us using the form below. Whether you have questions, need more information, 
                        or want to get involved, we're here to listen and respond. Your input is valuable to us, and we look forward 
                        to hearing from you.
                        </p>
                    </div>
                    <Email/>
                </div>
            </section>
            {/**stay in contact section ends...................................................................... */}
            <Footer/>
        </main>
    )
}

export default ContactUs
