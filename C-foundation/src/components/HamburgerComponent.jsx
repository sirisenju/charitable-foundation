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
              <div className="fixed z-10 hamburger-style h-full w-[75%] top-0 left-0 bg-red-300 p-4">
                <div className='flex gap-x-2'>
                  <img src="/assets/logo1.png" className=' h-12 w-12' alt="" />
                  <p>The Royal Family Charitable Foundation</p>
                </div>
                <div className="grid place-content-start gap-y-5 pt-10 pb-10">
                  {navigation.map((item) => (
                    <NavLink
                    to={item.href}
                    key={item.id}
                    className={({ isActive }) => {
                      return (
                        "hover:text-slate-600 hover:scale-110 transition ease-in delay-75 border-b-white border-b-2" +
                        (isActive ? " text-white" : " text-yellow-200")
                      );
                    }}
                    >
                      {item.name}
                    </NavLink>
                  ))
                  }
                  <p className='italic text-lg font-semibold pt-4'>The joy is in giving</p>
                </div>
                <div className=' w-full'>
                  <NavLink 
                  to={"/donation"}>
                    <button className='px-11 py-2 bg-yellow-400 rounded-lg'>Donate</button>
                  </NavLink>
                </div>
              </div>
            )}
        </div>
      </OutsideClickHandler>    
    )
}

export default HamburgerComponent
