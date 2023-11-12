import React from 'react'
import NavLinks from '../../components/NavLinks'
import Footer from '../../components/Footer'

function OurWork() {
    return (
        <main>
            <NavLinks/>
            {/**hero section for our work.........................................................*/}
            <section className='h-full bg-[#F8F7FF] pb-[6%]'>
                <div className='w-full md:w-[90%] mx-auto sm:flex justify-between items-center max-w-5xl'>
                    <div className='w-full sm:max-w-xl p-2'>
                        <p className='pb-3'>Our Work at The Royal Family Charitable Foundation</p>
                        <h2 className='text-xl pb-3 font-semibold'>Making a Tangible Impact Through Dedicated Initiatives</h2>
                        <p className='text-base'>
                            At The Royal Family Charitable Foundation, our work is driven by the commitment to create positive change in the lives of 
                            children and communities. We focus on areas where we can make the most impact, aligning with our 
                            mission to providing for humanity.
                        </p>
                    </div>
                    <div className='w-full bg-transparent p-2 sm:p-5'>
                        <div className='h-[300px] sm:h-[280px]'>
                            <img src="/assets/4-kids.jpg" className='sm:rounded-tr-[100px] sm:rounded-bl-[100px] h-full w-full object-cover' alt="" />
                        </div>
                        <div className='sm:flex sm:flex-wrap w-full sm:gap-x-4'>
                           <div className='w-full sm:w-1/2 flex-grow basis-[210px] sm:pt-4'>
                                <img src="/assets/female-kids.jpg" className='h-[210px] sm:h-[190px] w-full object-cover sm:rounded-tr-[100px] sm:rounded-bl-[100px]' alt="" />
                           </div>
                           <div className='w-full sm:w-1/2 sm:pt-4 flex-grow basis-[210px]'>
                                <img src="/assets/smilling-children.jpg" className='h-[210px] sm:h-[190px] w-full object-cover sm:rounded-tr-[100px] sm:rounded-bl-[100px]' alt="" />
                           </div>
                        </div>
                    </div>
                </div>
            </section>
            {/**hero section for our work.........................................................*/}

            {/**seccond section starts for our work.........................................................*/}
                <section className='h-full bg-[#425F57]'>
                    <div className='w-full sm:w-[90%] min-h-min mx-auto pb-14 p-2 max-w-6xl'>
                        <div className='sm:w-[75%] mx-auto mb-4 pt-4 pb-4 text-white'>
                            <h3 className='text-xl pb-2'>Donate who Deserved</h3>
                            <p className='text-base max-w-[500px]'>
                                Your contributions, both big and small, are more than just donations — they are 
                                investments in a brighter, more hopeful future.
                            </p>
                        </div>
                        <div className='w-full sm:w-[75%] mx-auto sm:p-14 relative'>
                            <img src="/assets/connecting-lines.png" className='h-[600px] object-center mx-auto hidden sm:block' alt="" />
                            <div className='h-auto w-full sm:max-w-md sm:absolute bg-[#526F67]/50 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg top-0 left-[10%] p-2 flex flex-wrap mb-4'>
                                <img src="/assets/simple-smile.jpg" className=' object-cover h-28 w-28 relative' alt="" />
                                <div className='pl-4 self-center relative flex-grow basis-[120px] items-start'>
                                    <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className='bg-yellow-300  px-7 py-1'>Donate</button>
                                </div>
                            </div>
                            <div className='min-h-min w-full sm:max-w-sm sm:absolute p-2 bg-[#526F67]/50 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg top-[23%] -right-[18%] flex flex-wrap mb-4'>
                                <img src="/assets/simple-smile.jpg" className=' object-cover h-28 w-28 relative' alt="" />
                                <div className='relative flex-grow basis-[120px] pl-4 items-start'>
                                    <p className='pb-2 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className='bg-yellow-300 px-7 py-1'>Donate</button>
                                </div>
                            </div>
                            <div className='h-auto w-full sm:max-w-sm p-2 sm:absolute bg-[#526F67]/50 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg top-[43%] -left-[10%] flex flex-wrap mb-4'>
                                <img src="/assets/simple-smile.jpg" className=' object-cover h-28 w-28 relative' alt="" />
                                <div className='flex-grow basis-[120px] pl-4 relative items-start'>
                                    <p className='pb-2 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className='bg-yellow-300 px-7 py-1'>Donate</button>
                                </div>
                            </div>
                            <div className='h-auto w-full sm:max-w-sm p-2 sm:absolute bg-[#526F67]/50 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg  bottom-[13%] right-[3%] flex flex-wrap mb-4'>
                                <img src="/assets/simple-smile.jpg" className=' object-cover h-28 w-28' alt="" />
                                <div className='flex-grow basis-[120px] pl-4 relative items-start'>
                                    <p className='pb-2 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className='bg-yellow-300 px-7 py-1'>Donate</button>
                                </div>
                            </div>
                            <div className='h-auto w-full sm:max-w-sm p-2 sm:absolute bg-[#526F67]/50 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg -bottom-[5%] -left-[8%] flex flex-wrap'>
                                <img src="/assets/simple-smile.jpg" className=' object-cover h-28 w-28' alt="" />
                                <div className='flex-grow basis-[120px] pl-4 relative items-start'>
                                    <p className='pb-2 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className=' bg-yellow-300 px-7 py-1'>Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/**seccond section ends for our work.........................................................*/}

            {/**story section starts for our work.........................................................*/}
            <section className='h-full'>
                <div className='w-full sm:w-[80%] min-h-min mx-auto p-2'>
                    <div className='max-w-sm mx-auto'>
                        <h3 className='text-start sm:text-center text-2xl pb-2 pt-4'>Read our stories, share our dreams.</h3>
                        <p className='text-base pb-2 pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, recusandae. 
                            Molestias quia culpa at similique.
                        </p>
                    </div>
                    <div className='max-w-4xl mx-auto mt-5'>
                        <h3 className='text-3xl pb-4'>Story of Emilia</h3>
                        <div className='float-none sm:float-right pl-0 sm:pl-10'>
                            <img src="/assets/emilia.jpg" className='h-[330px] sm:w-[290px] w-full object-cover' alt="" />
                        </div>
                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime veniam, illo, exercitationem, 
                            sint omnis ducimus ratione provident tempore sed accusamus facilis. Rerum nostrum illo earum aliquam iusto fugit aut 
                            reprehenderit alias, quo aperiam minus, consequuntur repellat, recusandae fuga odio architecto nihil. Iste quaerat architecto itaque 
                            fuga tenetur, quidem quasi tempora voluptatem, debitis fugiat facere blanditiis illum, obcaecati accusamus maiores earum veniam esse 
                            aspernatur repellat totam ipsam! Maxime labore nihil modi reiciendis ea, similique ex eum voluptate quod exercitationem minima. Minus 
                            repellendus veritatis, non itaque quisquam rerum labore necessitatibus voluptas eum sint alias fuga. Excepturi aspernatur provident rerum 
                            quibusdam enim, natus ducimus harum sequi veritatis ipsam dignissimos ullam vel pariatur recusandae quisquam non aliquam delectus! Modi vitae 
                            porro sunt id minima quos atque eveniet dolorum maxime odio cupiditate illo libero aut quaerat, excepturi doloribus distinctio, quae quibusdam
                            harum, natus veniam blanditiis necessitatibus veritatis dolorum voluptates porro est cum tenetur eum at expedita? 
                            dolore placeat. Provident voluptatibus est ab voluptates! Voluptatem rerum delectus cum temporibus error autem voluptates, soluta quidem, obcaecati 
                            magnam laborum fuga deleniti nobis natus voluptatum totam facere aperiam sequi unde esse molestias in impedit? 
                            Itaque animi repellat excepturi minima ea sunt eos accusantium dignissimos culpa!
                        </p>
                    </div>
                    <div className='max-w-4xl mx-auto mt-5'>
                        <h3 className='text-3xl pb-4 text-start sm:text-end'>Story of Rohan</h3>
                        <div className='float-none sm:float-left pr-0 sm:pr-10'>
                            <img src="/assets/emilia.jpg" className='h-[330px] sm:w-[290px] w-full object-cover' alt="" />
                        </div>
                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime veniam, illo, exercitationem, 
                            sint omnis ducimus ratione provident tempore sed accusamus facilis. Rerum nostrum illo earum aliquam iusto fugit aut 
                            reprehenderit alias, quo aperiam minus, consequuntur repellat, recusandae fuga odio architecto nihil. Iste quaerat architecto itaque 
                            fuga tenetur, quidem quasi tempora voluptatem, debitis fugiat facere blanditiis illum, obcaecati accusamus maiores earum veniam esse 
                            aspernatur repellat totam ipsam! Maxime labore nihil modi reiciendis ea, similique ex eum voluptate quod exercitationem minima. Minus 
                            repellendus veritatis, non itaque quisquam rerum labore necessitatibus voluptas eum sint alias fuga. Excepturi aspernatur provident rerum 
                            quibusdam enim, natus ducimus harum sequi veritatis ipsam dignissimos ullam vel pariatur recusandae quisquam non aliquam delectus! Modi vitae 
                            porro sunt id minima quos atque eveniet dolorum maxime odio cupiditate illo libero aut quaerat, excepturi doloribus distinctio, quae quibusdam
                            harum, natus veniam blanditiis necessitatibus veritatis dolorum voluptates porro est cum tenetur eum at expedita? 
                            dolore placeat. Provident voluptatibus est ab voluptates! Voluptatem rerum delectus cum temporibus error autem voluptates, soluta quidem, obcaecati 
                            magnam laborum fuga deleniti nobis natus voluptatum totam facere aperiam sequi unde esse molestias in impedit? 
                            Itaque animi repellat excepturi minima ea sunt eos accusantium dignissimos culpa!
                        </p>
                    </div>
                    <div className='w-full mt-8 pb-10 p-2'>
                        <div className='max-w-xl mx-auto text-center'>
                            <h3 className='text-2xl pt-2 pb-2'>Sponsors and Partners.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Similique, sit perferendis! Ipsum soluta tempore quaerat quos voluptatem, iusto aliquam quisquam.
                            </p>
                        </div>
                        <div className='flex flex-wrap justify-center gap-x-20 gap-y-10 pt-8'>
                            <img src="/assets/logos/logo-1.png" className=' h-20 w-32 object-contain flex-grow basis-[100px]' alt="Logo" />
                            <img src="/assets/logos/logo-2.png" className=' h-20 w-32 object-contain flex-grow basis-[100px]' alt="Logo" />
                            <img src="/assets/logos/logo-3.png" className=' h-20 w-32 object-contain flex-grow basis-[100px]' alt="Logo" />
                            <img src="/assets/logos/logo-4.png" className=' h-20 w-32 object-contain flex-grow basis-[100px]' alt="Logo" />
                            <img src="/assets/logos/logo-5.png" className=' h-20 w-32 object-contain flex-grow basis-[100px]' alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>
            {/**story section ends for our work.........................................................*/}
            <section className='min-h-min'>
                <div className='min-h-min sm:p-2 mx-auto relative text-white'>
                    <img src="/assets/smilling-children.jpg" className='h-[570px] w-full object-cover object-center sm:rounded-2xl' alt="" />
                    <p className='text-3xl font-semibold absolute right-[10%] top-[25%]'>We Make A Diffrence <br />In Their Lives.</p>
                </div>
            </section>
            {/**story section ends for our work.........................................................*/}
            <Footer/>
        </main>
    )
}

export default OurWork
