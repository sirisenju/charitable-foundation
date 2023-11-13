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
            color="blue"
            />
            {isOpen && (
              <div className="fixed z-10 hamburger-style h-full w-[70%] top-0 left-0 bg-red-300">
                <div className="grid place-content-center gap-y-5 pt-10 pb-10">
                  {navigation.map((item) => (
                    <NavLink
                    to={item.href}
                    key={item.id}
                    className={({ isActive }) => {
                      return (
                        "hover:text-slate-600 hover:scale-110 transition ease-in delay-75" +
                        (isActive ? " text-white" : " text-yellow-200")
                      );
                    }}
                    >
                      {item.name}
                    </NavLink>
                  ))
                  }
                </div>
              </div>
            )}
        </div>
      </OutsideClickHandler>    
    )
}

export default HamburgerComponent
