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
    <main>
      <section className="relative h-full sm:min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("src/assets/smilling-children.jpg")`,
      }}>
        <header className="w-full pt-0">
          <div className="mx-auto w-full md:w-[80%] flex sm:justify-between sm:mx-auto p-3 items-center text-[#DFFFFF]">
            <img src="src/assets/logo1.png" className="w-10 h-10 max-[450px]:hidden" alt="" />
            <p className="font-bold text-3xl max-[450px]:pl-0 pl-10 text-center max-[450px]:pt-2">The Royal Family Charitable Foundation</p>
            <ul className="hidden sm:flex w-auto gap-x-8 text-center ">
              {homeNavigation.map((item) => (
                <li>
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
        <div className="w-[80%] mx-auto flex justify-start sm:justify-center mb-[15%]">
          <div className="max-w-md mt-12 p-2 text-[#DFFFFF]">
            <h1 className=" text-3xl font-semibold pb-4">The Happiness is Giving Away.</h1>
            <p className=" text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consequatur qui animi culpa quisquam at explicabo fuga veniam nam dolor eaque?
              </p>
          </div>
        </div>
        <div className="h-full sm:h-[50%] items-end pb-2 w-full sm:w-[80%] mx-auto gap-y-7 sm:gap-y-4 gap-x-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center text-white">
          {/**first card-------------------------------- */}
          <div className="max-w-[200px] h-auto text-center bg-[#425F57]/70 border border-[#CFFF8D] rounded-3xl p-2">
            <h1 className="text-xl">
              <span className="flex justify-center pb-4 pt-2">
                <FaUserGraduate color="#CFFF8D" size={60} />
              </span>
              Education
            </h1>
            <p className="pt-2 pb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              soluta!
            </p>
            <span className="flex justify-center">
              <FaChevronDown color="#CFFF8D" size={20} />
            </span>
          </div>
          {/**second card-------------------------------- */}
          <div className="max-w-[200px] h-auto text-center bg-[#425F57]/70 border border-[#CFFF8D] rounded-3xl p-2">
            <h1 className="text-xl">
              <span className="flex justify-center pb-4 pt-2">
                <FaHeadset color="#CFFF8D" size={60} />
              </span>
              Help and Support
            </h1>
            <p className="pt-2 pb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              soluta!
            </p>
            <span className="flex justify-center">
              <FaChevronDown color="#CFFF8D" size={20} />
            </span>
          </div>
          {/**third card-------------------------------- */}
          <div className="max-w-[200px] h-auto text-center bg-[#425F57]/70 border border-[#CFFF8D] rounded-3xl p-2">
            <h1 className="text-xl">
              <span className="flex justify-center pb-4 pt-2">
                <FaPeopleCarry color="#CFFF8D" size={60} />
              </span>
              Volunteering
            </h1>
            <p className="pt-2 pb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              soluta!
            </p>
            <span className=" flex justify-center">
              <FaChevronDown color="#CFFF8D" size={20} />
            </span>
          </div>
          {/**fourth card-------------------------------- */}
          <div className="max-w-[200px] h-auto text-center bg-[#425F57]/70 border border-[#CFFF8D] rounded-3xl p-2">
            <h1 className="text-xl">
              <span className="flex justify-center pb-4 pt-2">
                <FaRibbon color="#CFFF8D" size={60} />
              </span>
              Our Mission
            </h1>
            <p className="pt-2 pb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              soluta!
            </p>
            <span className="flex justify-center">
              <FaChevronDown color="#CFFF8D" size={20} />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
