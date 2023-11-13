import React from "react";
import NavLinks from "../../components/NavLinks";
import { FaDonate, FaHeadset, FaPeopleCarry, FaPlus, FaRibbon } from "react-icons/fa";
import Footer from "../../components/Footer";

function AboutUs() {
  return (
    <main>
      <NavLinks />
      {/**hero section starts..........................................................*/}
      <section className="w-full h-full bg-nav-color">
        <div className="w-full sm:w-[80%] inline lg:flex relative lg:justify-center mx-auto pt-12 pb-12 xl:max-w-6xl">
          <div className="relative lg:order-last flex justify-center">
            <div className="h-[300px] w-full -rotate-45 bg-[#FFEEDD] absolute -right-28 -top-8 rounded-full hidden"></div>
            <img
              src="/assets/africaMap.png"
              className="relative object-cover object-center bg-no-repeat w-[600px] max-[290px]:w-full"
              alt=""
            />
          </div>
          <p className="text-center pb-5 text-2xl font-bold sm:hidden p-2 font-primaryfont">The Joy Is In Giving</p>
          <div className="h-[300px] w-[1000px] -rotate-45 bg-[#FFEEDD] absolute -left-32 top-32 rounded-full hidden"></div>
          <div className="flex lg:max-w-lg p-4 items-center">
            <div className="w-full">
              <h1 className="text-xl flex-wrap">
                Welcome to <br />
                <span className=" text-4xl font-boldFont font-bold">
                  The Royal Family Charitable Empowerment Foundation
                </span>{" "}
                - Where Hope finds a home.
              </h1>
              <p className="text-lg pt-2 pb-2">
                We believe that every child deserves a loving and nurturing
                environment to thrive and grow. Our mission is to provide a safe
                and caring home for orphaned and vulnerable children, giving
                them a chance at a brighter future filled with hope, love, and
                opportunity.
              </p>
              <button>More about us</button>
              <div className="max-w-md mt-4 max-[380px]:inline flex gap-x-2">
                <div className="border-r-2 border-black p-2">
                  4+ <br />
                  years experience
                </div>
                <div className="border-r-2 border-black p-2">
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
        </div>
      </section>
      {/**hero section ends..........................................................*/}

      {/**features section starts..........................................................*/}
      <section className="min-h-min pb-10 relative">
        <img
          src=" /assets/half-world.png"
          className="absolute opacity-20 h-full object-cover object-center"
          alt=""
        />
        <div className="w-full min-h-min mx-auto relative xl:max-w-6xl">
          <div className="max-w-4xl mx-auto text-center pt-4 pb-4">
            <p className=" text-lg pb-2 font-bold">WHO WE ARE</p>
            <p>Welcome to The Royal Family Charitable Foundation! We are a passionate community dedicated to 
              making a meaningful impact on the lives of those in need. Committed to orphaned children, 
              our foundation strives to create positive change through community transformation. 
              At The Royal Family Charitable Foundation, we believe in the transformative power of compassion, kindness, 
              and collective action. Join us on our journey to make a difference, one act of generosity at a time. 
              Together, we can build a brighter, more inclusive future for all. Thank you for being a part of our mission!
            </p>
            <h2 className=" text-xl font-bold pt-2">Make a Difference</h2>
            <p className=" text-base">
              Empower yourself to make a difference. Every small act of kindness, every gesture of compassion, 
              and every moment of generosity contributes to positive change. At The Royal Family Charitable Foundation, 
              we believe that collective efforts have the power to shape a brighter future. 
            </p>
          </div>
          <div className="w-full sm:w-[60%] lg:w-[80%] mx-auto p-4 grid place-items-center grid-cols-1 xss:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mt-2">
            <div className="bg-nav-color w-full max-h-min text-center p-2 rounded-tl-3xl rounded-br-3xl shadow-md">
              <FaRibbon size={50} className="mx-auto"/>
              <h3 className="pb-2 font-bold pt-2">Our Mission</h3>
              <p className="pb-2 ">
                To provide a safe and nurturing environment where all
                vulnerable children can feel empowered.
              </p>
            </div>
            <div className="w-full max-h-min bg-nav-color text-center p-2 rounded-tl-3xl rounded-br-3xl shadow-md">
              <FaPeopleCarry size={50} className="mx-auto" />
              <h3 className="pb-2 font-bold pt-2">Volunteer</h3>
              <p className="pb-2">
                We need your help to make a difference for the kids in the community, touch lives one child at a time.
              </p>
            </div>
            <div className="w-full max-h-min bg-nav-color text-center p-2 rounded-tl-3xl rounded-br-3xl shadow-md">
              <FaHeadset size={50} className="mx-auto" />
              <h3 className="pb-2 font-bold pt-2">Help and Support</h3>
              <p className="pb-2">
                Your help and support mean the world to us! Your contribution makes a significant impact. Join us today. 
              </p>
            </div>
            <div className="w-full max-h-min bg-nav-color text-center p-2 rounded-tl-3xl rounded-br-3xl shadow-md">
              <FaDonate size={50} className="mx-auto" />
              <h3 className="pb-2 font-bold pt-2">Donate</h3>
              <p className="pb-2">
                Your generosity matters! With your support, we're making a real difference. Join our cause and donate now. 
              </p>
            </div>
          </div>
        </div>
      </section>
      {/**features section ends..........................................................*/}

      {/**support us section starts..........................................................*/}
      <section className="min-h-min w-full bg-nav-color">
        <div className="w-full p-3 sm:w-[90%] md:w-[80%] mx-auto pt-4 pb-8 xl:max-w-6xl">
          <div className=" max-w-sm mx-auto text-center pt-4">
            <p className=" text-sm">Join Us</p>
            <h2 className=" text-xl pb-4">
              Join our mission today as we reach across and touch the lives of
              children across the country.
            </h2>
          </div>
          <div className="w-full min-h-max">
            <div className="inline sm:flex w-full">
              <div className="w-full sm:w-[50%]">
                <img
                  src="/assets/4-kids.jpg"
                  className="h-[400px] object-cover object-center"
                  alt=""
                />
              </div>
              <div className="w-full sm:w-[50%] p-0 sm:p-6 flex items-center">
                <div className="max-w-lg pt-4 sm:pt-0">
                  <p className=" text-sm pb-2">Support Us</p>
                  <h2 className=" text-2xl pb-3">
                    Support our mission by donating a token today!
                  </h2>
                  <p className=" text-base pb-3">
                    Together, we can create positive change and build a brighter future for those in need.
                  </p>
                  <button className=" bg-[#FFD8BE] rounded-md shadow-md px-8 py-2">
                    Donate!
                  </button>
                </div>
              </div>
            </div>
            <div className="inline sm:flex">
              <div className="w-full sm:w-[50%] sm:order-last mt-4 sm:mt-0">
                <img
                  src="/assets/4-kids.jpg"
                  className="h-[400px] object-cover object-center"
                  alt=""
                />
              </div>
              <div className="w-full sm:w-[50%] flex items-center pt-4">
                <div className="max-w-lg sm:p-6">
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
            </div>
          </div>
        </div>
      </section>
      {/**support us section ends..........................................................*/}

      {/**campaings section starts..........................................................*/}
      <section className="min-h-max pb-10 bg-[#F8F7FF]">
        <div className="w-full p-4 md:w-[80%] mx-auto xl:max-w-6xl">
          <div className=" max-w-4xl mx-auto text-center pt-10">
            <p className=" text-sm pb-2">projects we've done</p>
            <h2 className=" text-2xl pb-2">Featured Campaings</h2>
            <p className=" text-lg pb-4">
              Discover the heart and soul of The Royal Family Charitable Foundation through our featured campaigns. 
              Each initiative is a testament to our unwavering commitment to to better the lives of individuals. 
              Join us in making a tangible impact by supporting these highlighted projects:
            </p>
          </div>
          <div className="w-full grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="max-w-xs min-h-max mx-auto bg-yellow-50 shadow-md rounded-tr-3xl mb-5 sm:mb-0">
              <img
                src="/assets/4-kids.jpg"
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
            <div className="max-w-xs min-h-max mx-auto bg-yellow-50 shadow-md rounded-tr-3xl mb-5 sm:mb-0">
              <img
                src="/assets/4-kids.jpg"
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
            <div className="max-w-xs min-h-max mx-auto bg-yellow-50 shadow-md rounded-tr-3xl mb-5 sm:mb-0">
              <img
                src="/assets/4-kids.jpg"
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
      <section className=" min-h-min bg-[#FFD8BE] py-8">
        <p className=" text-center pb-6">An open invite. Come serve the community with us!</p>
        <div className="w-full sm:w-[80%] mx-auto sm:flex h-auto p-2 xl:max-w-6xl">
          <div className="w-full sm:order-last">
            <img src="/assets/female-kids.jpg" className="object-cover object-center" alt="" />
          </div>
          <div className="max-w-xl self-center min-h-min p-3">
            <h3 className="pb-3 text-sm">Volunteer</h3>
            <p className="pb-3 text-3xl">Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit.</p>
            <p className=" pb-3 text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Iure dolorum accusantium debitis voluptatibus. Unde deserunt fuga autem sequi harum cum?
            </p>
            <button className="bg-blue-300 py-2 px-10 rounded-3xl">Join us</button>
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
