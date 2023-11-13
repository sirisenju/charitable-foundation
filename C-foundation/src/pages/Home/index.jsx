import React from "react";
import { FaChevronDown, FaUserGraduate, FaHeadset, FaPeopleCarry, FaRibbon } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const homeNavigation = [
  { id: 1, name: "Who We Are", href: "/aboutUs" },
  { id: 2, name: "What we Do", href: "/ourwork" },
  { id: 3, name: "Contact Us", href: "/contactus" },
]

function Home() {
  return (
    <main className="h-full">
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/assets/smilling-children.jpg")`,
      }}>
        <header className="w-full pt-0">
          <div className="mx-auto w-full lg:w-[80%] xl:max-w-6xl flex max-[450px]:block sm:justify-between sm:mx-auto p-3 items-center text-[#DFFFFF]">
            <img src="/assets/logo1.png" className="w-10 h-10 max-[450px]:w-16 max-[450px]:h-16 max-[450px]:mx-auto" alt="" />
            <p className="font-bold text-3xl max-[450px]:pl-0 pl-10 text-center max-[450px]:pt-2">The Royal Family Charitable Foundation</p>
            <ul className="hidden sm:flex w-auto sm:gap-x-8 text-center p-3">
              {homeNavigation.map((item) => (
                <li className=" hover:underline hover:underline-offset-4 hover:scale-x-95">
                  <NavLink
                    to={item.href}
                    key={item.id}
                    className={({ isActive }) =>
                      isActive ? "" : ""
                }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </header>
        {/**bottom card section...... */}
        <div className="w-[80%] mx-auto flex justify-start sm:justify-center mb-[15%] xl:max-w-6xl">
          <div className="max-w-md mt-12 p-2 text-[#DFFFFF]">
            <h1 className=" text-3xl font-semibold pb-4">The Happiness is Giving Away.</h1>
            <p className=" text-lg">We believe that true happiness is found in the act of giving. 
              It's the simple, yet profound feeling that washes over you when you extend a helping hand, 
              share your blessings, or make a positive impact on someone's life.
              </p>
          </div>
        </div>
        <div className="h-full sm:h-[50%] xl:max-w-6xl p-2 items-end pb-2 w-full sm:w-[80%] mx-auto gap-y-7 sm:gap-y-4 gap-x-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center text-white">
          {/**first card-------------------------------- */}
          <div className="max-w-xs min-h-full text-center bg-[#425F57]/70 border border-[#CFFF8D] rounded-3xl p-2">
            <h1 className="text-xl">
              <span className="flex justify-center pb-4 pt-2">
                  <FaRibbon color="#CFFF8D" size={60} />
                </span>
              Our Mission
            </h1>
            <p className="pb-2 text-sm">
              Together, we can create positive change, 
              inspire hope, and spread kindness to every corner of the world. Join us today!
            </p>
            <NavLink
                to={"/aboutUs"}
              >
              <span className="flex justify-center">
                <FaChevronDown color="#CFFF8D" size={20} />
              </span>
              </NavLink>
          </div>
          {/**second card-------------------------------- */}
          <div className="max-w-xs min-h-full text-center bg-[#425F57]/70 border border-[#CFFF8D] rounded-3xl p-2">
            <h1 className="text-xl">
            <span className="flex justify-center pb-2 pt-2">
                  <FaHeadset color="#CFFF8D" size={60} />
                </span>
              Help and Support
            </h1>
            <p className="pb-2 text-sm">
              With your kindness, you're not just extending a helping hand; you're reaching out with hope, 
              compassion, and the promise of a brighter tomorrow.
            </p>
            <NavLink
                to={"/contactUs"}
              >
                <span className="flex justify-center">
              <FaChevronDown color="#CFFF8D" size={20} />
            </span>
              </NavLink>
          </div>
          {/**third card-------------------------------- */}
          <div className="max-w-xs min-h-full text-center bg-[#425F57]/70 border border-[#CFFF8D] rounded-3xl p-2">
            <h1 className="text-xl">
            <span className="flex justify-center pb-2 pt-2">
                  <FaPeopleCarry color="#CFFF8D" size={60} />
                </span>
              
              Volunteering
            </h1>
            <p className="pb-2 text-sm">
              The warmth of your heart and the dedication you bring inspire us all. 
              Your presence is a reminder that when we come together, we can light up the darkest corners of the world.
            </p>
            <NavLink
                to={"/ourWork"}
                >
                <span className=" flex justify-center">
              <FaChevronDown color="#CFFF8D" size={20} />
            </span>
              </NavLink>
            
          </div>
          {/**fourth card-------------------------------- */}
          <div className="max-w-xs min-h-full text-center bg-[#425F57]/70 border border-[#CFFF8D] rounded-3xl p-2">
            <h1 className="text-xl">
            <span className="flex justify-center pb-2 pt-2">
                  <FaUserGraduate color="#CFFF8D" size={60} />
                </span>
              
              Education
            </h1>
            <p className="pb-2 text-sm">
              Education has the power to ignite a thousand flames, and you are the spark. 
              With your commitment to learning, you're not just opening doors; you're 
              lighting up the path to a future filled with possibilities.
            </p>
            <NavLink
               to={"/donation"}
              >
              <span className="flex justify-center">
              <FaChevronDown color="#CFFF8D" size={20} />
            </span>
              </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
