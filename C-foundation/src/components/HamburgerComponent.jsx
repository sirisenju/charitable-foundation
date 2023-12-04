import React from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import OutsideClickHandler from "react-outside-click-handler";
import navigation from '../../lib/navigationCtr';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function HamburgerComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsOpen(false);
        }}
      >
        <div className="overflow-auto text-white">
          <Hamburger 
            toggled={isOpen} 
            toggle={handleToggle} 
            size={32}
            rounded
            distance="sm"
            color="white"
            />
            {isOpen && (
              <div className="fixed z-10 hamburger-style h-full w-[65%] top-0 left-0 bg-[#C5BAAA] p-4" data-aos="slide-down">
                <div className='flex gap-x-2'>
                  <img src="/assets/logo1.png" loading='lazy' className='h-12 w-12' alt="" />
                  <p className='text-white'>The Royal Family Charitable Empowerment Foundation</p>
                </div>
                <div className="grid place-content-start gap-y-5 pt-10 pb-10">
                  {navigation.map((item) => (
                    <NavLink
                    to={item.href}
                    key={item.id}
                    className={({ isActive }) => {
                      return (
                        "hover:text-slate-600 hover:scale-110 text-lg transition ease-in delay-75 border-b-[#806D61] border-b-2" +
                        (isActive ? " text-white" : " text-[#2C2C2C]")
                      );
                    }}
                    >
                      {item.name}
                    </NavLink>
                  ))
                  }
                  <p className='italic text-2xl font-semibold pt-4'>The joy is in giving</p>
                </div>
                <div className='w-full'>
                  <NavLink 
                  to={"/donation"}>
                    <button className='shadow-lg px-11 py-2 bg-yellow-500 rounded-lg font-boldFont'>Donate</button>
                  </NavLink>
                </div>
              </div>
            )}
        </div>
      </OutsideClickHandler>    
    )
}

export default HamburgerComponent
