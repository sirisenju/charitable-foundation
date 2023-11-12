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
        <div className="overflow-auto">
          <Hamburger 
            toggled={isOpen} 
            toggle={handleToggle} 
            size={32}
            rounded
            distance="sm"
            color="black"
            />
            {isOpen && (
              <div className="fixed z-10 hamburger-style h-full p-4 w-[70%] top-0 left-0 bg-red-300">
                <img src="/assets/logo1.png" className='h-10 w-10' alt="" />
                <p className='pt-2'>The Royal Charitable Foundation</p>
                <div className="grid place-content-start gap-y-5 pt-4 pb-10">
                  {navigation.map((item) => (
                    <NavLink
                    to={item.href}
                    key={item.id}
                    className={({ isActive }) => {
                      return (
                        "hover:text-slate-600 hover:scale-110 transition ease-in delay-75 border-b-2" +
                        (isActive ? " text-white" : " text-yellow-200")
                      );
                    }}
                    >
                      {item.name}
                    </NavLink>
                  ))
                  }
                </div>
                <div className='self-end'>
                  <p className='pb-4'>Support our mission today.</p>
                  <NavLink
                  to={"/donation"}>
                    <button className=' py-2 px-14 bg-orange-300'>Donate</button>
                  </NavLink>
                  </div>
              </div>
            )}
        </div>
      </OutsideClickHandler>    
    )
}

export default HamburgerComponent
