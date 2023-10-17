import React from "react";
import { NavLink } from "react-router-dom";
import navigation from "../../lib/navigationCtr";

function NavLinks() {
  return (
    <section className="bg-nav-color">
      <div className="w-full md:w-[90%] mx-auto flex justify-between ">
      <div className="flex p-4">
        <img src="src/assets/logo1.png" className="w-8 h-8" alt="" />
        <p className="pl-2 sm:hidden">The Royal Family Charitable Foundation</p>
        <ul className="flex gap-x-6 items-center ml-20">
          {navigation.map((item) => (
            <li className="hidden sm:inline">
              <NavLink
                to={item.href}
                key={item.id}
                className={({ isActive }) =>
                  isActive ? " " : " "
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center m-2 bg-green-300 hidden">
        <ul className="flex gap-x-6 items-center">
          <li className="hidden md:inline">+234 806 789 0957</li>
          <li>
            <button className="bg-[#FFD8BE] rounded-3xl px-6 py-2">
              Donate
            </button>
          </li>
        </ul>
      </div>
      </div>
    </section>
  );
}

export default NavLinks;
