import React from "react";
import NavLinks from "../../components/NavLinks";
import {
  FaDonate,
  FaHeadset,
  FaPeopleCarry,
  FaPlus,
  FaRibbon,
} from "react-icons/fa";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function AboutUs() {
  return (
    <main>
      <NavLinks />
      {/**hero section starts..........................................................*/}
      <section className="w-full h-full bg-nav-color">
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-sine"
          className="w-full sm:w-[80%] inline lg:flex relative lg:justify-center mx-auto pt-12 pb-12 xl:max-w-6xl overflow-clip"
        >
          <div
            className="relative lg:order-last flex justify-center"
            data-aos-delay="300"
          >
            <div className="h-[300px] w-full -rotate-45 bg-[#FFEEDD] absolute -right-28 -top-8 rounded-full hidden"></div>
            <img
              src="/assets/africaMap.png"
              loading="lazy"
              className="relative object-cover object-center bg-no-repeat w-[600px] max-[290px]:w-full"
              alt=""
            />
          </div>
          <p className="text-center pb-5 text-2xl font-bold sm:hidden p-2 font-primaryfont">
            The Joy Is In Giving
          </p>
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
          src="/assets/half-world.png"
          loading="lazy"
          className="absolute opacity-20 h-full object-cover object-center"
          alt=""
        />
        <div
          className="w-full min-h-min mx-auto relative xl:max-w-6xl overflow-clip"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="max-w-4xl mx-auto text-center pt-4 pb-4">
            <p className=" text-lg pb-2 font-bold">WHO WE ARE</p>
            <p>
              Welcome to The Royal Family Charitable Foundation! We are a
              passionate community dedicated to making a meaningful impact on
              the lives of those in need. Committed to orphaned children, our
              foundation strives to create positive change through community
              transformation. At The Royal Family Charitable Foundation, we
              believe in the transformative power of compassion, kindness, and
              collective action. Join us on our journey to make a difference,
              one act of generosity at a time. Together, we can build a
              brighter, more inclusive future for all. Thank you for being a
              part of our mission!
            </p>
            <h2 className=" text-xl font-bold pt-2">Make a Difference</h2>
            <p className=" text-base">
              Empower yourself to make a difference. Every small act of
              kindness, every gesture of compassion, and every moment of
              generosity contributes to positive change. At The Royal Family
              Charitable Foundation, we believe that collective efforts have the
              power to shape a brighter future.
            </p>
          </div>
          <div className="w-full sm:w-[60%] lg:w-[80%] mx-auto p-4 grid place-items-center grid-cols-1 xss:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mt-2">
            <div
              data-aos="slide-up"
              className="bg-[#2C2C2C]/90 text-white w-full max-h-min text-center p-2 rounded-tl-3xl rounded-br-3xl shadow-md"
            >
              <FaRibbon size={50} className="mx-auto" />
              <h3 className="pb-2 font-bold pt-2">Our Mission</h3>
              <p className="pb-2 ">
                To provide a safe and nurturing environment where all vulnerable
                children can feel empowered.
              </p>
            </div>
            <div
              data-aos="slide-up"
              data-aos-delay="100"
              className="w-full max-h-min bg-[#2C2C2C]/90 text-white text-center p-2 rounded-tl-3xl rounded-br-3xl shadow-md"
            >
              <FaPeopleCarry size={50} className="mx-auto" />
              <h3 className="pb-2 font-bold pt-2">Volunteer</h3>
              <p className="pb-2">
                We need your help to make a difference for the kids in the
                community, touch lives one child at a time.
              </p>
            </div>
            <div
              data-aos="slide-up"
              data-aos-delay="150"
              className="w-full max-h-min bg-[#2C2C2C]/90 text-white text-center p-2 rounded-tl-3xl rounded-br-3xl shadow-md"
            >
              <FaHeadset size={50} className="mx-auto" />
              <h3 className="pb-2 font-bold pt-2">Help and Support</h3>
              <p className="pb-2">
                Your help and support mean the world to us! Your contribution
                makes a significant impact. Join us today.
              </p>
            </div>
            <div
              data-aos="slide-up"
              data-aos-delay="200"
              className="w-full max-h-min bg-[#2C2C2C]/90 text-white text-center p-2 rounded-tl-3xl rounded-br-3xl shadow-md"
            >
              <FaDonate size={50} className="mx-auto" />
              <h3 className="pb-2 font-bold pt-2">Donate</h3>
              <p className="pb-2">
                Your generosity matters! With your support, we're making a real
                difference. Join our cause and donate now.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/**features section ends..........................................................*/}

      {/**support us section starts..........................................................*/}
      <section className="min-h-min w-full bg-nav-color">
        <div
          className="w-full p-3 sm:w-[90%] md:w-[80%] mx-auto pt-4 pb-8 xl:max-w-6xl overflow-clip"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
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
                  src="/assets/people.jpg"
                  loading="lazy"
                  className="h-[400px] w-full object-cover object-center"
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
                    Together, we can create positive change and build a brighter
                    future for those in need.
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
                  src="/assets/booksDonation.jpg"
                  loading="lazy"
                  className="h-[400px] w-full object-cover object-center"
                  alt=""
                />
              </div>
              <div className="w-full sm:w-[50%] flex items-center pt-4">
                <div className="max-w-lg sm:p-4">
                  <p className="text-sm">Support Us</p>
                  <h2 className="text-xl pb-2">
                    Let us create something great together!
                  </h2>
                  <div className="max-w-md text-black">
                    <p className="text-justify">
                      At The Royal Family Charitable Foundation, our mission is
                      to ignite the flame of hope in the hearts of young
                      children, providing them with a pathway to a brighter
                      tomorrow. We are dedicated to cultivating a nurturing
                      environment that empowers each child to dream, learn, and
                      grow, ensuring that they have the tools and support needed
                      to overcome challenges and embrace a future full of
                      promise. Through unwavering commitment and compassion, we
                      strive to be beacons of inspiration, fostering resilience,
                      curiosity, and a sense of possibility in the minds of the
                      next generation.
                    </p>
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
        <div
          className="w-full p-4 md:w-[80%] mx-auto xl:max-w-6xl overflow-clip"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className=" max-w-4xl mx-auto text-center pt-10">
            <p className=" text-sm pb-2">projects we've done</p>
            <h2 className=" text-2xl pb-2">Featured Campaings</h2>
            <p className=" text-lg pb-4">
              Discover the heart and soul of The Royal Family Charitable
              Foundation through our featured campaigns. Each initiative is a
              testament to our unwavering commitment to to better the lives of
              individuals. Join us in making a tangible impact by supporting
              these highlighted projects:
            </p>
          </div>
          <div className="w-full grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="max-w-xs min-h-max mx-auto bg-nav-color shadow-md rounded-tr-3xl mb-5 sm:mb-0"
              data-aos="fade-left"
              data-aos-easing="ease-in-out-sine"
              data-aos-delay="50"
            >
              <img
                src="/assets/orphanage.jpg"
                loading="lazy"
                className="rounded-tr-3xl rounded-bl-3xl h-[230px] w-full object-cover"
                alt=""
              />
              <div className="p-4">
                <div className="flex justify-between pt-2 pb-2 shadow-md">
                  <div className="border-r-2 border-black text-center w-full sm:p-2">
                    <p>Expenses</p>
                    <p>100000+</p>
                  </div>
                  <div className="border-r-2 border-black text-center w-full sm:p-2">
                    <p>Rate</p>
                    <p>100%</p>
                  </div>
                  <div className="text-center w-full sm:p-2">
                    <p>Reach</p>
                    <p>800+</p>
                  </div>
                </div>
                <div className="grid pt-4">
                  <h3 className="font-semibold text-lg">
                    Orphanage Visitation
                  </h3>
                  <p className="text-base">
                    Our orphanage visitation campaign aims to bring joy and
                    companionship to children in need. We believe in creating
                    positive and memorable experiences for orphaned children,
                    fostering a sense of belonging and support.
                  </p>
                  <div className="bg-white w-9 h-9 place-self-end rounded-tl-2xl">
                    <FaPlus color="black" size={20} className="mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="max-w-xs min-h-max mx-auto bg-nav-color shadow-md rounded-tr-3xl mb-5 sm:mb-0"
              data-aos="fade-right"
              data-aos-easing="ease-in-out-sine"
              data-aos-delay="50"
            >
              <img
                src="/assets/hospital.jpg"
                loading="lazy"
                className="rounded-tr-3xl rounded-bl-3xl h-[230px] w-full object-cover"
                alt=""
              />
              <div className="p-4">
                <div className="flex justify-between pt-2 pb-2 shadow-md">
                  <div className="border-r-2 border-black text-center w-full sm:p-2">
                    <p>Expenses</p>
                    <p>10000000+</p>
                  </div>
                  <div className="border-r-2 border-black text-center w-full sm:p-2">
                    <p>Rate</p>
                    <p>100%</p>
                  </div>
                  <div className="text-center w-full sm:p-2">
                    <p>Reach</p>
                    <p>800+</p>
                  </div>
                </div>
                <div className="grid pt-4">
                  <h3 className="font-semibold text-lg">Hospital Visitation</h3>
                  <p className="text-base">
                    The children's hospital visitation campaign is designed to
                    bring comfort and cheer to young patients facing medical
                    challenges. Our goal is to alleviate the stress of
                    hospitalization and create moments of joy for both the
                    children and their families.
                  </p>
                  <div className="bg-white w-9 h-9 place-self-end rounded-tl-2xl">
                    <FaPlus size={20} className="mx-auto mt-2" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="max-w-xs min-h-max mx-auto bg-nav-color shadow-md rounded-tr-3xl mb-5 sm:mb-0"
              data-aos="fade-left"
              data-aos-easing="ease-in-out-sine"
              data-aos-delay="50"
            >
              <img
                src="/assets/schoolKids.jpg"
                loading="lazy"
                className="rounded-tr-3xl rounded-bl-3xl h-[230px] w-full object-cover"
                alt=""
              />
              <div className="p-4">
                <div className="flex justify-between pt-2 pb-2 shadow-md">
                  <div className="border-r-2 border-black text-center w-full sm:p-2">
                    <p>Expenses</p>
                    <p>10000000+</p>
                  </div>
                  <div className="border-r-2 border-black text-center w-full sm:p-2">
                    <p>Rate</p>
                    <p>100%</p>
                  </div>
                  <div className="text-center w-full sm:p-2">
                    <p>Reach</p>
                    <p>800+</p>
                  </div>
                </div>
                <div className="grid pt-4">
                  <h3 className="font-semibold text-lg">
                    Public School Visitation
                  </h3>
                  <p className="text-base">
                    The public school visitation campaign focuses on supporting
                    educational initiatives in underprivileged communities. We
                    believe in the transformative power of education and strive
                    to enhance the learning environment for children in public
                    schools
                  </p>
                  <div className="bg-white w-9 h-9 place-self-end rounded-tl-2xl">
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
      <section className=" min-h-min bg-nav-color py-8">
        <p
          data-aos="ease-in-sine"
          data-aos-duration="1500"
          className=" text-center pb-6"
        >
          An open invite. Come serve the community with us!
        </p>
        <div
          className="w-full sm:w-[80%] mx-auto sm:flex h-auto p-2 xl:max-w-6xl overflow-clip"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="w-full sm:order-last">
            <img
              src="/assets/female-kids.jpg"
              loading="lazy"
              className="object-cover object-center"
              alt=""
              data-aos="slide-up"
            />
          </div>
          <div className="max-w-xl self-center min-h-min p-4">
            <h3 className="pb-3 text-sm">Volunteer</h3>
            <p className="pb-3 text-3xl">
              Volunteering and Helping: Empowering Tomorrow's Leaders
            </p>
            <p className=" pb-3 text-base">
              It is through these selfless acts that we create a ripple effect,
              touching the lives of not only the children we serve but also the
              communities we are a part of.
            </p>
            <NavLink to={"/contactUs"}>
              <button className="bg-[#2C2C2C]/30 text-white py-2 px-10 rounded-3xl">
                Join us
              </button>
            </NavLink>
          </div>
        </div>
      </section>
      {/**become a volunteer section ends..........................................................*/}

      {/**the footer section starts..........................................................*/}
      <section>
        <Footer />
      </section>
      {/**the footer section ends..........................................................*/}
    </main>
  );
}

export default AboutUs;
