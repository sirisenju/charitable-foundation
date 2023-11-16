import React from "react";
import NavLinks from "../../components/NavLinks";
import accordianData from "../../../lib/accordianData";
import Accordian from "../../components/Accordian";
import Footer from "../../components/Footer";

function Gallery() {
  return (
    <main>
      <NavLinks />
      {/**the gallery section starts....................................................*/}
      <section className="min-h-min">
        <div className="w-full sm:w-[90%] mx-auto p-2 sm:p-0 xl:max-w-7xl">
          {/**heading for our gallery */}
          <div className="max-w-2xl text-center mx-auto pt-8 pb-4">
            <h3 className="font-semibold text-3xl pb-2">
              Welcome to our Gallery.
            </h3>
            <p>
              Step into a world where stories unfold in pixels and colors. 
              Our gallery of images is a tapestry of moments, each frame capturing 
              the essence of our mission, the resilience of those we serve, and the 
              transformative power of collective action.
            </p>
          </div>

          {/* the first image....this will be row and colums of images*/}
          <div className="w-full min-h-min pt-4 pb-8">
            <div className="gallery">
              <div className="image-column">
                <div className="image">
                  <img src="/assets/volunteer1.png" alt="" />
                  <div className="overlay">
                    <span>pop up kkkk</span>
                  </div>
                </div>
                <div className="image">
                  <img
                    src="/assets/volunteer2.png"
                    className="h-[500px]"
                    alt=""
                  />
                  <div className="overlay">
                    <span>pop up iii</span>
                  </div>
                </div>
                <div className="image">
                  <img src="/assets/volunteer1.png" alt="" />
                  <div className="overlay">
                    <span>pop up uu</span>
                  </div>
                </div>
                <div className="image">
                  <img
                    src="/assets/volunteer1.png"
                    className=" w-[1000px] h-[400px]"
                    alt=""
                  />
                  <div className="overlay">
                    <span>pop up jjghuj</span>
                  </div>
                </div>
              </div>
              <div className="image-column">
                <div className="image">
                  <img
                    src="/assets/volunteer1.png"
                    className="h-[490px]"
                    alt=""
                  />
                  <div className="overlay">
                    <span>pop up vvvv</span>
                  </div>
                </div>
                <div className="image">
                  <img
                    src="/assets/volunteer2.png"
                    className="h-[480px]"
                    alt=""
                  />
                  <div className="overlay">
                    <span>pop up ppp</span>
                  </div>
                </div>
                <div className="image flex-1">
                  <img
                    src="/assets/volunteer1.png"
                    className="h-full"
                    alt=""
                  />
                  <div className="overlay">
                    <span>pop up yyy</span>
                  </div>
                </div>
              </div>
              <div className="image-column">
                <div className="image">
                  <img
                    src="/assets/volunteer1.png"
                    className=" w-[1000px] h-[400px]"
                    alt=""
                  />
                  <div className="overlay">
                    <span>pop up eee</span>
                  </div>
                </div>
                <div className="image">
                  <img
                    src="/assets/volunteer2.png"
                    className="h-[510px]"
                    alt=""
                  />
                  <div className="overlay">
                    <span>pop up lll</span>
                  </div>
                </div>
                <div className="image flex-1">
                  <img
                    src="/assets/volunteer1.png"
                    className=" w-full h-full"
                    alt=""
                  />
                  <div className="overlay">
                    <span>pop up zzz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**the gallery section ends....................................................*/}

      {/**the second section starts....................................................*/}
      <section className="h-full">
        <div className="w-[80%] mx-auto block lg:flex p-2 pt-12 pb-10 xl:max-w-6xl">
          <div className="max-w-lg p-2 sm:pr-7">
            <p className="text-base pb-3">
              Thank you for being the driving force behind our endeavors. 
              Your belief in our cause fuels our passion and propels us toward impactful milestones. 
              Let's continue this journey together, hand in hand, as we shape a world where compassion 
              knows no bounds.
            </p>
            {/**the accordian container starts....................................................*/}
            <div className="accordion">
              {accordianData.map(({ title, message, id, number }) => (
                <Accordian
                  title={title}
                  message={message}
                  key={id}
                  number={number}
                />
              ))}
            </div>
            {/**the accordian container ends....................................................*/}
          </div>
          <div className="w-full">
            <img
              src="/assets/volunteer1.png"
              className="w-full h-full object-cover object-center lg:w-[440px] sm:h-[440px]"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className=" h-full">
        <div className=" w-[80%] mx-auto xl:max-w-6xl">
          <div className="w-full mt-8 pb-10 p-2">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-2xl pt-2 pb-2">Sponsors and Partners.</h3>
              <p className="text-base">
                At The Royal Family Charitable Foundation, we extend our heartfelt appreciation to our sponsors and partners. 
                Your unwavering support is the cornerstone of our impact.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-20 gap-y-10 pt-8">
              <img
                src="/assets/logos/logo-1.png"
                className=" h-20 w-32 object-contain flex-grow basis-[100px]"
                alt="Logo"
              />
              <img
                src="/assets/logos/logo-2.png"
                className=" h-20 w-32 object-contain flex-grow basis-[100px]"
                alt="Logo"
              />
              <img
                src="/assets/logos/logo-3.png"
                className=" h-20 w-32 object-contain flex-grow basis-[100px]"
                alt="Logo"
              />
              <img
                src="/assets/logos/logo-4.png"
                className=" h-20 w-32 object-contain flex-grow basis-[100px]"
                alt="Logo"
              />
              <img
                src="/assets/logos/logo-5.png"
                className=" h-20 w-32 object-contain flex-grow basis-[100px]"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </section>
      {/**stay in contact section ends...................................................................... */}
      <Footer />
    </main>
  );
}

export default Gallery;
