import React from 'react'
import NavLinks from '../../components/NavLinks'
import Footer from '../../components/Footer'

function OurWork() {
    return (
        <main>
            <NavLinks/>
            {/**hero section for our work.........................................................*/}
            <section className='min-h-min bg-[#F8F7FF] pt-[6%] pb-[6%]'>
                <div className='w-[80%] mx-auto flex justify-between items-center'>
                    <div className='max-w-xl p-2'>
                        <p className=' pb-3'>Our work</p>
                        <h2 className=' text-xl pb-3 font-semibold'>Lorem, ipsum dolor sit amet <br />consectetur adipisicing elit.</h2>
                        <p className=' text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Repellendus culpa exercitationem doloremque, provident ab atque eveniet quod eligendi.</p>
                    </div>
                    <div className='w-full bg-transparent pl-5 pr-5'>
                        <div className='h-[300px] pt-4'>
                            <img src="src/assets/4-kids.jpg" className='rounded-tr-[100px] rounded-bl-[100px] h-full w-full object-cover' alt="" />
                        </div>
                        <div className='flex w-full gap-x-4 pt-4 pb-4'>
                           <div className='w-1/2'>
                                <img src="src/assets/female-kids.jpg" className='h-[170px] w-full object-cover rounded-tr-[100px] rounded-bl-[100px]' alt="" />
                           </div>
                           <div className='w-1/2'>
                                <img src="src/assets/smilling-children.jpg" className='h-[170px] w-full object-cover rounded-tr-[100px] rounded-bl-[100px]' alt="" />
                           </div>
                        </div>
                    </div>
                </div>
            </section>
            {/**hero section for our work.........................................................*/}

            {/**seccond section starts for our work.........................................................*/}
                <section className='h-full bg-[#425F57]'>
                    <div className='w-[80%] min-h-min mx-auto pb-10'>
                        <div className='w-[75%] mx-auto mb-4 pt-4 pb-4 text-white'>
                            <h3 className=' text-xl pb-2'>Donate who Deserved</h3>
                            <p className=' text-base max-w-[500px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Voluptates modi assumenda possimus rem quas at itaque ipsum magnam voluptatum similique.
                            </p>
                        </div>
                        <div className='w-[75%] mx-auto p-14 relative'>
                            <img src="src/assets/connecting-lines.png" className='h-[600px] object-center mx-auto' alt="" />
                            <div className='h-auto max-w-sm absolute bg-[#526F67]/50 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg top-0 left-[10%] p-2 flex'>
                                <img src="src/assets/simple-smile.jpg" className=' object-cover h-28 w-28 relative' alt="" />
                                <div className='pl-2 self-center relative'>
                                    <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className='bg-yellow-300  px-7 py-1'>Donate</button>
                                </div>
                            </div>
                            <div className='min-h-min max-w-none p-2 absolute bg-[#526F67]/50 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg top-[25%] right-0'>
                                <img src="src/assets/simple-smile.jpg" className=' object-cover h-28 w-28 relative' alt="" />
                                <div className='max-w-[230px] relative'>
                                    <p className='pb-2 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className='bg-yellow-300 px-7 py-1'>Donate</button>
                                </div>
                            </div>
                            <div className='h-auto max-w-sm flex p-2 absolute bg-[#526F67]/50 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg  top-[43%] left-0'>
                                <img src="src/assets/simple-smile.jpg" className=' object-cover h-28 w-28 relative' alt="" />
                                <div className='pl-2 self-center max-w-[200px] relative'>
                                    <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className='bg-yellow-300 px-7 py-1'>Donate</button>
                                </div>
                            </div>
                            <div className='h-auto max-w-sm flex p-2 absolute bg-[#526F67]/50 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg  bottom-[13%] right-10'>
                                <img src="src/assets/simple-smile.jpg" className=' object-cover h-28 w-28' alt="" />
                                <div className='pl-2 self-center max-w-[200px]'>
                                    <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className='bg-yellow-300 px-7 py-1'>Donate</button>
                                </div>
                            </div>
                            <div className='h-auto max-w-sm flex p-2 absolute bg-[#526F67]/50 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg  bottom-0 left-0'>
                                <img src="src/assets/simple-smile.jpg" className=' object-cover h-28 w-28' alt="" />
                                <div className='pl-2 self-center max-w-[200px]'>
                                    <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className=' bg-yellow-300 px-7 py-1'>Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/**seccond section ends for our work.........................................................*/}

            {/**story section starts for our work.........................................................*/}
            <section className='h-full'>
                <div className=' w-[80%] min-h-min mx-auto'>
                    <div className='max-w-sm mx-auto'>
                        <h3 className='text-center text-2xl pb-2 pt-4'>Read our stories, share our dreams.</h3>
                        <p className='text-base pb-2 pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, recusandae. 
                            Molestias quia culpa at similique.
                        </p>
                    </div>
                    <div className='max-w-4xl mx-auto p-4'>
                        <h3 className='text-3xl pb-4'>Story of Emilia</h3>
                        <div className='float-right pl-10'>
                            <img src="src/assets/emilia.jpg" className='h-[330px] w-[290px] object-cover' alt="" />
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
                    <div className='max-w-4xl mx-auto p-4'>
                        <h3 className='text-3xl pb-4 text-end'>Story of Rohan</h3>
                        <div className='float-left pr-10'>
                            <img src="src/assets/emilia.jpg" className='h-[330px] w-[290px] object-cover' alt="" />
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
                    <div className='w-full mt-8 pb-10'>
                        <div className='max-w-xl mx-auto text-center'>
                            <h3 className='text-2xl pt-2 pb-2'>Sponsors and Partners.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Similique, sit perferendis! Ipsum soluta tempore quaerat quos voluptatem, iusto aliquam quisquam.
                            </p>
                        </div>
                        <div className='flex justify-center gap-x-20 pt-8'>
                            <img src="src/assets/logos/logo-1.png" className=' h-20 w-32 object-contain' alt="Logo" />
                            <img src="src/assets/logos/logo-2.png" className=' h-20 w-32 object-contain' alt="Logo" />
                            <img src="src/assets/logos/logo-3.png" className=' h-20 w-32 object-contain' alt="Logo" />
                            <img src="src/assets/logos/logo-4.png" className=' h-20 w-32 object-contain' alt="Logo" />
                            <img src="src/assets/logos/logo-5.png" className=' h-20 w-32 object-contain' alt="Logo" />
                        </div>
                    </div>
                </div>
            </section>
            {/**story section ends for our work.........................................................*/}
            <section className='min-h-min pb-4'>
                <div className=' min-h-min p-4 mx-auto relative text-white'>
                    <img src="src/assets/smilling-children.jpg" className='h-[570px] w-full object-cover object-center rounded-2xl' alt="" />
                    <p className='text-3xl font-semibold absolute right-10 top-[20%]'>We Make A Diffrence <br />In Their Lives.</p>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default OurWork
