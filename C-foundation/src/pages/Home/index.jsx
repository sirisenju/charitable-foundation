import React from "react";
import { FaChevronDown, FaUserGraduate, FaHeadset, FaPeopleCarry, FaRibbon } from "react-icons/fa";

function Home() {
  return (
    <main>
      <section className="min-h-min relative">
        <img
          src="src/assets/smilling-children.jpg"
          alt=""
          className="bg-center object-cover bg-no-repeat h-screen w-full absolute"
        />
        <header className="relative">
          <div className="w-[80%] flex justify-between mx-auto p-3 items-center text-white">
            <p>The Logo</p>
            <p className="font-bold text-3xl">The name of the foundation</p>
            <ul className="flex w-auto gap-x-8">
              <li>Home</li>
              <li>Who We Are</li>
              <li>What We Do</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </header>
      </section>

      {/**bottom card section...... */}
      <section className="absolute bottom-8 w-full">
        <div className="w-[70%] mx-auto grid grid-cols-4 place-items-center text-white">
            {/**first card-------------------------------- */}
          <div className="max-w-[200px] h-auto text-center">
            <h1 className="text-xl">
              <span className="flex justify-center pb-4 pt-2">
                <FaUserGraduate color="red" size={60} />
              </span>
              Education
            </h1>
            <p className="pt-2 pb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              soluta!
            </p>
            <span className="flex justify-center">
              <FaChevronDown color="white" size={20} />
            </span>
          </div>
          {/**second card-------------------------------- */}
          <div className="max-w-[200px] h-auto text-center">
            <h1 className="text-xl">
              <span className="flex justify-center pb-4 pt-2">
                <FaHeadset color="red" size={60} />
              </span>
              Help and Support
            </h1>
            <p className="pt-2 pb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              soluta!
            </p>
            <span className="flex justify-center">
              <FaChevronDown color="white" size={20} />
            </span>
          </div>
          {/**third card-------------------------------- */}
          <div className="max-w-[200px] h-auto text-center">
            <h1 className="text-xl">
              <span className="flex justify-center pb-4 pt-2">
                <FaPeopleCarry color="red" size={60} />
              </span>
              Volunteering
            </h1>
            <p className="pt-2 pb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              soluta!
            </p>
            <span className=" flex justify-center">
              <FaChevronDown color="white" size={20} />
            </span>
          </div>
          {/**fourth card-------------------------------- */}
          <div className="max-w-[200px] h-auto text-center">
            <h1 className="text-xl">
              <span className="flex justify-center pb-4 pt-2">
                <FaRibbon color="red" size={60} />
              </span>
              Our Mission
            </h1>
            <p className="pt-2 pb-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              soluta!
            </p>
            <span className="flex justify-center">
              <FaChevronDown color="white" size={20} />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
