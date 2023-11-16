import React from "react";
import { NavLink } from "react-router-dom";
import navigation from "../../lib/navigationCtr";
import HamburgerComponent from "./HamburgerComponent";

function NavLinks() {
  return (
    <section className="bg-[#2C2C2C]/90">
      <div className="w-full md:w-[90%] text-white mx-auto flex justify-between xl:max-w-6xl">
      <div className="flex p-4">
        <img src="/assets/logo1.png" className="w-8 h-8" alt="" />
        <p className="pl-2 sm:hidden">The Royal Family Charitable Foundation</p>
        <ul className="flex gap-x-6 items-center ml-16">
          {navigation.map((item) => (
            <li className="hidden sm:inline font-primaryfont text-base hover:underline">
              <NavLink
                to={item.href}
                key={item.id}
                className={({ isActive }) =>
                  isActive ? "" : " "
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-x-4 items-center">
          <li className="hidden lg:inline">+234 806 789 0957</li>
          <li className="hidden md:inline">
            <NavLink 
              to="/Donation"
              className={({ isActive }) => isActive ? "bg-[#b8AAA1] rounded-3xl px-6 py-2" : "bg-[#c5bAAA]/30  rounded-3xl px-6 py-2"}>
                Donate
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sm:hidden items-start pr-4 flex">
        <HamburgerComponent/>
      </div>
      </div>
    </section>
  );
}

export default NavLinks;
