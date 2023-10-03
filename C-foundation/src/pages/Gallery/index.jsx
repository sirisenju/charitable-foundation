import React from 'react'
import NavLinks from '../../components/NavLinks'

function Gallery() {
    return (
        <main>
            <NavLinks/>
            {/**the gallery section starts....................................................*/}
            <section className=' min-h-min'>
                <div className='w-[85%] mx-auto'>
                    {/**heading for our gallery */}
                    <div className='max-w-sm text-center mx-auto pt-8 pb-4'>
                        <h3 className='font-semibold text-3xl pb-2'>Welcome to our Gallery.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Molestiae a esse quam at commodi iste!
                        </p>
                    </div>

                    {/* the first image....this will be row and colums of images*/}
                    <div className='w-full min-h-min pt-4 pb-8'>
                        <div className='gallery'>
                            <div className='image-column'>
                                <div className='image'>
                                    <img src="src/assets/volunteer1.png" alt="" />
                                    <div className="overlay"><span>pop up kkkk</span></div>
                                </div>
                                <div className='image'>
                                    <img src="src/assets/volunteer2.png" className='h-[500px]' alt="" />
                                    <div className="overlay"><span>pop up iii</span></div>
                                </div>
                                <div className='image'>
                                    <img src="src/assets/volunteer1.png" alt="" />
                                    <div className="overlay"><span>pop up uu</span></div>
                                </div>
                                <div className='image'>
                                    <img src="src/assets/volunteer1.png" className=' w-[1000px] h-[400px]' alt="" />
                                    <div className="overlay"><span>pop up jjghuj</span></div>
                                </div>
                            </div>
                            <div className='image-column'>
                                <div className='image'>
                                    <img src="src/assets/volunteer1.png" className='h-[490px]' alt="" />
                                    <div className="overlay"><span>pop up vvvv</span></div>
                                </div>
                                <div className='image'>
                                    <img src="src/assets/volunteer2.png" className='h-[480px]' alt="" />
                                    <div className="overlay"><span>pop up ppp</span></div>
                                </div>
                                <div className='image flex-1'>
                                    <img src="src/assets/volunteer1.png" className='h-full' alt="" />
                                    <div className="overlay"><span>pop up yyy</span></div>
                                </div>
                                
                            </div>
                            <div className='image-column'>
                                <div className='image'>
                                    <img src="src/assets/volunteer1.png" className=' w-[1000px] h-[400px]' alt="" />
                                    <div className="overlay"><span>pop up eee</span></div>
                                </div>
                                <div className='image'>
                                    <img src="src/assets/volunteer2.png" className='h-[510px]' alt="" />
                                    <div className="overlay"><span>pop up lll</span></div>
                                </div>
                                <div className='image flex-1'>
                                    <img src="src/assets/volunteer1.png" className=' w-full h-full' alt="" />
                                    <div className="overlay"><span>pop up zzz</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Gallery
