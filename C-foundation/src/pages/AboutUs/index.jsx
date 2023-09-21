import React from "react";
import NavLinks from "../../components/NavLinks";
import { FaGraduationCap, FaPlus } from "react-icons/fa";
import Footer from "../../components/Footer";

function AboutUs() {
  return (
    <main>
      <NavLinks />
      {/**hero section starts..........................................................*/}
      <section className="h-screen overflow-clip bg-[#F8F7FF]">
        <div className="w-[80%] min-h-min flex relative mx-auto pt-12">
          <div className="h-[300px] w-[1000px] -rotate-45 bg-[#FFEEDD] absolute -left-32 top-32 rounded-full"></div>
          <div className="w-1/2 flex items-center pl-10 relative">
            <div className="max-w-lg min-h-min">
              <h1 className=" text-xl">
                Welcome to <br />
                <span className=" text-4xl">
                  The Royal Family Charitable Empowerment Foundation
                </span>{" "}
                - Where Hope finds a home.
              </h1>
              <p className=" text-lg pt-2 pb-2">
                We believe that every child deserves a loving and nurturing
                environment to thrive and grow. Our mission is to provide a safe
                and caring home for orphaned and vulnerable children, giving
                them a chance at a brighter future filled with hope, love, and
                opportunity.
              </p>
              <button>More about us</button>
              <div className=" max-w-md mt-4 flex gap-x-2">
                <div className=" border-r-2 p-2">
                  4+ <br />
                  years experience
                </div>
                <div className=" border-r-2 p-2">
                  1000+ <br />
                  Volunteers
                </div>
                <div className=" p-2">
                  100+ <br />
                  Outreach programs
                </div>
              </div>
            </div>
          </div>
          <div className=" w-1/2 min-h-min relative">
            <div className=" h-[300px] w-full -rotate-45 bg-[#FFEEDD] absolute -right-28 -top-8 rounded-full"></div>
            <img
              src="src/assets/africaMap.png"
              className="relative right-10"
              alt=""
            />
          </div>
        </div>
      </section>
      {/**hero section ends..........................................................*/}

      {/**features section starts..........................................................*/}
      <section className="min-h-min pb-10 relative">
        <img
          src=" src/assets/half-world.png"
          className="absolute opacity-20 h-full object-cover object-center"
          alt=""
        />
        <div className="w-full min-h-min mx-auto relative">
          <div className="max-w-sm mx-auto text-center pt-4 pb-4">
            <p className=" text-xs pb-2">WHO WE ARE</p>
            <h2 className=" text-xl font-bold pb-2">Make a Difference</h2>
            <p className=" text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              magnam in veniam! Repudiandae, explicabo.
            </p>
          </div>
          <div className="w-[90%] mx-auto flex justify-center gap-x-8 mt-4">
            <div className="bg-nav-color w-44 max-h-min text-center p-4 rounded-tl-3xl rounded-br-3xl shadow-md">
              <FaGraduationCap size={50} className="mx-auto pb-2" />
              <h3 className="pb-2 font-bold">Free Access</h3>
              <p className="pb-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="w-44 max-h-min bg-nav-color text-center p-4 rounded-tl-3xl rounded-br-3xl shadow-md">
              <FaGraduationCap size={50} className="mx-auto pb-2" />
              <h3 className="pb-2 font-bold">Free Access</h3>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="w-44 max-h-min bg-nav-color text-center p-4 rounded-tl-3xl rounded-br-3xl shadow-md">
              <FaGraduationCap size={50} className="mx-auto pb-2" />
              <h3 className="pb-2 font-bold">Free Access</h3>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="w-44 max-h-min bg-nav-color text-center p-4 rounded-tl-3xl rounded-br-3xl shadow-md">
              <FaGraduationCap size={50} className="mx-auto pb-2" />
              <h3 className="pb-2 font-bold">Free Access</h3>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/**features section ends..........................................................*/}

      {/**support us section starts..........................................................*/}
      <section className="min-h-min w-full bg-nav-color">
        <div className=" w-[80%] mx-auto pt-4 pb-8">
          <div className=" max-w-sm mx-auto text-center pt-4">
            <p className=" text-sm">Join Us</p>
            <h2 className=" text-xl pb-4">
              Join our mission today as we reach across and touch the lives of
              children across the country.
            </h2>
          </div>
          <div className="w-full min-h-max">
            <div className="flex w-full">
              <div className="w-[50%]">
                <img
                  src="src/assets/4-kids.jpg"
                  className=" h-[400px] object-cover object-center"
                  alt=""
                />
              </div>
              <div className="w-[50%] p-6 flex items-center">
                <div className="max-w-lg">
                  <p className=" text-sm pb-2">Support Us</p>
                  <h2 className=" text-2xl pb-3">
                    Support our mission by donating a token today!
                  </h2>
                  <p className=" text-base pb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem praesentium est laudantium cum illum numquam possimus
                    voluptatem. Ex, perspiciatis deserunt!
                  </p>
                  <button className=" bg-[#FFD8BE] rounded-md shadow-md px-8 py-2">
                    Donate!
                  </button>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[50%] flex items-center">
                <div className="max-w-lg p-6">
                  <p className="text-sm">Support Us</p>
                  <h2 className=" text-xl">
                    Let us create something great together!
                  </h2>
                  <div className="max-w-md text-black">
                    <form action="">
                      <div className="flex gap-x-4 pb-6 pt-4 h-[80px]">
                        <input
                          type="text"
                          placeholder="full name"
                          className="w-full pl-2 bg-[#F8F7FF] rounded-md shadow-md"
                        />
                        <input
                          type="text"
                          placeholder="email"
                          className="w-full pl-2 bg-[#F8F7FF] rounded-md shadow-md"
                        />
                      </div>
                      <textarea
                        name=""
                        id=""
                        placeholder="your message"
                        rows={6}
                        className="w-full mb-4 pl-2 pt-2 bg-[#F8F7FF] rounded-md shadow-md"
                      ></textarea>
                      <button className="bg-[#FFD8BE] w-full pt-3 pb-3 shadow-md">
                        Send Us
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="w-[50%]">
                <img
                  src="src/assets/4-kids.jpg"
                  className="h-[400px] object-cover object-center"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**support us section ends..........................................................*/}

      {/**campaings section starts..........................................................*/}
      <section className="min-h-max pb-12 bg-[#F8F7FF]">
        <div className="w-[80%] mx-auto">
          <div className=" max-w-md mx-auto text-center pt-10">
            <p className=" text-sm pb-2">projects we've done</p>
            <h2 className=" text-2xl pb-2">Featured Campaings</h2>
            <p className=" text-lg pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              molestiae rerum fugiat ex doloribus? Repellat modi harum nobis.
            </p>
          </div>
          <div className="w-full flex justify-between">
            <div className="max-w-xs min-h-max bg-yellow-50 shadow-md rounded-tr-3xl">
              <img
                src="src/assets/4-kids.jpg"
                className="rounded-tr-3xl rounded-bl-3xl"
                alt=""
              />
              <div className="p-4">
                <div className="flex justify-between pt-2 pb-2 shadow-md">
                  <div className="border-r-2 text-center w-full">
                    <p>Expenses</p>
                    <p>10000000+</p>
                  </div>
                  <div className="border-r-2 text-center flex items-center justify-center w-full">
                    <p>100%</p>
                  </div>
                  <div className="text-center w-full">
                    <p>Reach</p>
                    <p>800+</p>
                  </div>
                </div>
                <div className="grid pt-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid illo neque deserunt enim fugiat facere at
                    reprehenderit qui quas quasi.
                  </p>
                  <div className="bg-red-200 w-9 h-9 place-self-end rounded-tl-2xl">
                    <FaPlus size={20} className="mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs min-h-max bg-yellow-50 shadow-md rounded-tr-3xl">
              <img
                src="src/assets/4-kids.jpg"
                className="rounded-tr-3xl rounded-bl-3xl"
                alt=""
              />
              <div className="p-4">
                <div className="flex justify-between pt-2 pb-2 shadow-md">
                  <div className="border-r-2 text-center w-full">
                    <p>Expenses</p>
                    <p>10000000+</p>
                  </div>
                  <div className="border-r-2 text-center flex items-center justify-center w-full">
                    <p>100%</p>
                  </div>
                  <div className="text-center w-full">
                    <p>Reach</p>
                    <p>800+</p>
                  </div>
                </div>
                <div className="grid pt-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid illo neque deserunt enim fugiat facere at
                    reprehenderit qui quas quasi.
                  </p>
                  <div className="bg-red-200 w-9 h-9 place-self-end rounded-tl-2xl">
                    <FaPlus size={20} className="mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs min-h-max bg-yellow-50 shadow-md rounded-tr-3xl">
              <img
                src="src/assets/4-kids.jpg"
                className="rounded-tr-3xl rounded-bl-3xl"
                alt=""
              />
              <div className="p-4">
                <div className="flex justify-between pt-2 pb-2 shadow-md">
                  <div className="border-r-2 text-center w-full">
                    <p>Expenses</p>
                    <p>10000000+</p>
                  </div>
                  <div className="border-r-2 text-center flex items-center justify-center w-full">
                    <p>100%</p>
                  </div>
                  <div className="text-center w-full">
                    <p>Reach</p>
                    <p>800+</p>
                  </div>
                </div>
                <div className="grid pt-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid illo neque deserunt enim fugiat facere at
                    reprehenderit qui quas quasi.
                  </p>
                  <div className="bg-red-200 w-9 h-9 place-self-end rounded-tl-2xl">
                    <FaPlus size={20} className="mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**campaings section ends..........................................................*/}

      {/**become a volunteer section starts..........................................................*/}
      <section className=" min-h-min bg-[#FFD8BE] py-12">
        <p className=" text-center pb-8">An open invite. Come serve the community with us!</p>
        <div className="w-[80%] mx-auto flex h-auto">
          <div className=" max-w-xl self-center min-h-min p-4">
            <h3 className="pb-3 text-sm">Volunteer</h3>
            <p className="pb-3 text-3xl">Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit.</p>
            <p className=" pb-3 text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Iure dolorum accusantium debitis voluptatibus. Unde deserunt fuga autem sequi harum cum?
            </p>
            <button className="bg-blue-300 py-2 px-10 rounded-3xl">Join us</button>
          </div>
          <div className="w-full">
            <img src="src/assets/female-kids.jpg" className=" object-cover" alt="" />
          </div>
        </div>
      </section>
      {/**become a volunteer section ends..........................................................*/}


      {/**the footer section starts..........................................................*/}
      <section>
        <Footer/>
      </section>
      {/**the footer section ends..........................................................*/}
    </main>
  );
}

export default AboutUs;
