import React from 'react'

function NavLinks() {
    return (
        <section className='w-full flex justify-between bg-nav-color'>
            <div className='flex p-2'>
                <img src="src/assets/logo1.png" className='w-10 h-10 ml-8' alt="" />
                <ul className='flex gap-x-6 items-center ml-10'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Our Work</li>
                    <li>Contact Us</li>
                    <li>Gallery</li>
                </ul>
            </div>
            <div className='flex items-center m-2'>
                <ul className='flex gap-x-6 pr-10 items-center'>
                    <li>+234 806 789 0957</li>
                    <li>
                        <button className='bg-[#FFD8BE] rounded-tl-3xl rounded-br-3xl p-2'>Make a Donation</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default NavLinks
