import React from "react";
import { NavLink } from "react-router-dom";
import navigation from "../../lib/navigationCtr";
import HamburgerComponent from "./HamburgerComponent";
import { FaPhoneAlt } from "react-icons/fa";

function NavLinks() {
  return (
    <section className="bg-[#2C2C2C]/90">
      <div className="w-full md:w-[90%] text-white mx-auto flex justify-between xl:max-w-6xl z-50">
        <div className="flex p-2">
          <div className="flex">
            <NavLink to={"/"}>
              <img src="/assets/logo1.png" className="w-40 sm:w-12 h-12 object-contain" alt="" />
            </NavLink>
            <p className="sm:hidden ml-4">
              The Royal Family Charitable Empowerment Foundation
            </p>
          </div>
          <ul className="flex gap-x-6 items-center pl-4">
            {navigation.map((item) => (
              <li
                key={item.id}
                className="hidden sm:inline font-primaryfont text-base hover:underline"
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) => (isActive ? "" : " ")}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-x-4 items-center">
            <li className="hidden lg:flex">
              <span className="flex justify-center items-center pr-3">
                <FaPhoneAlt size={17} />
              </span>
              +234 8066 419 209
            </li>
            <li className="hidden md:inline">
              <NavLink
                to="/Donation"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#b8AAA1] rounded-3xl px-6 py-2"
                    : "bg-[#c5bAAA]/30  rounded-3xl px-6 py-2"
                }
              >
                Donate
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sm:hidden items-start pr-4 flex">
          <HamburgerComponent />
        </div>
      </div>
    </section>
  );
}

export default NavLinks;
