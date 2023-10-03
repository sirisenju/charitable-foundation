import React from "react";
import { NavLink } from "react-router-dom";
import navigation from "../../lib/navigationCtr";

function NavLinks() {
  return (
    <section className="w-full flex justify-between bg-nav-color">
      <div className="flex p-2">
        <img src="src/assets/logo1.png" className="w-10 h-10 ml-8" alt="" />
        <ul className="flex gap-x-6 items-center ml-20">
          {navigation.map((item) => (
            <li>
              <NavLink
                to={item.href}
                key={item.name}
                className={({ isActive }) =>
                  isActive ? " bg-green-200" : " bg-red-400"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center m-2">
        <ul className="flex gap-x-6 pr-10 items-center">
          <li>+234 806 789 0957</li>
          <li>
            <button className="bg-[#FFD8BE] rounded-tl-3xl rounded-br-3xl p-2">
              Make a Donation
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NavLinks;
