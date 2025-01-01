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
      <section className="min-h-min overflow-clip">
        <div className="w-full sm:w-[90%] mx-auto p-2 sm:p-0 xl:max-w-7xl">
          {/**heading for our gallery */}
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="max-w-2xl text-center mx-auto pt-8 pb-4"
          >
            <h3 className="font-semibold text-3xl pb-2">
              Welcome to our Gallery.
            </h3>
            <p>
              Step into a world where stories unfold in pixels and colors. Our
              gallery of images is a tapestry of moments, each frame capturing
              the essence of our mission, the resilience of those we serve, and
              the transformative power of collective action.
            </p>
          </div>

          {/* the first image....this will be row and colums of images*/}
          <div className="w-full min-h-min pt-4 pb-8">
            <div className="gallery">
              <div className="image-column">
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="image"
                >
                  <img
                    loading="lazy"
                    src="/assets/orphanage.jpg"
                    className="object-cover"
                    alt=""
                  />
                  <div className="overlay">
                    <span></span>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="image"
                >
                  <img
                    loading="lazy"
                    src="/assets/booksDonation.jpg"
                    className="h-[480px] object-cover"
                    alt=""
                  />
                  <div className="overlay">
                    <span></span>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="image"
                >
                  <img
                  loading="lazy"
                    src="/assets/schoolKids.jpg"
                    className="object-cover"
                    alt=""
                  />
                  <div className="overlay">
                    <span></span>
                  </div>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="image"
                >
                  <img
                    src="/assets/team.jpg"
                    className="w-[1000px] h-[400px] object-cover"
                    alt=""
                    loading="lazy"
                  />
                  <div className="overlay">
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="image-column">
                <div
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="image"
                >
                  <img
                    src="/assets/people.jpg"
                    className="h-[490px] object-cover"
                    alt=""
                    loading="lazy"
                  />
                  <div className="overlay">
                    <span></span>
                  </div>
                </div>
                <div
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="image"
                >
                  <img
                    src="/assets/hospital.jpg"
                    className="h-[480px] object-cover object-left"
                    alt=""
                    loading="lazy"
                  />
                  <div className="overlay">
                    <span></span>
                  </div>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="image flex-1"
                >
                  <img
                    src="/assets/female-kids.jpg"
                    className="h-full object-cover object-center"
                    alt=""
                    loading="lazy"
                  />
                  <div className="overlay">
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="image-column">
                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="image"
                >
                  <img
                    src="/assets/handingBooks.jpg"
                    className=" w-[1000px] h-[400px] object-cover"
                    alt=""
                    loading="lazy"
                  />
                  <div className="overlay">
                    <span></span>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="image"
                >
                  <img
                    src="/assets/groupDonation.jpg"
                    className="h-[510px] object-cover"
                    alt=""
                    loading="lazy"
                  />
                  <div className="overlay">
                    <span></span>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="image flex-1"
                >
                  <img
                    loading="lazy"
                    src="/assets/handingBooks.jpg"
                    className=" w-full h-full"
                    alt=""
                  />
                  <div className="overlay">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**the gallery section ends....................................................*/}

      {/* new gallery section */}
      <section className='h-full lg:h-screen w-full bg-white overflow-clip'>
        <div className='h-full w-full lg:w-[80%] p-2 mx-auto pt-10 pb-10 2xl:max-w-7xl'>
          <h2 className="text-4xl pb-2 pt-2 font-bold">Our OutReach Events.</h2>
          <p className="text-2xl pb-4">We live what we preach......</p>
          <div className='h-[60%] block lg:flex gap-2 pb-2'>
            <div className='w-full lg:w-[50%]'>
              <img src="assets/new-outreach/school-outreach.JPG" className='object-cover h-full w-full' alt="" />
            </div>
            <div className='w-full lg:w-[50%]'>
              <div className='h-[50%] block lg:flex gap-2'>
                <div className='w-full lg:w-[50%] h-full py-2 lg:py-0'><img src="assets/new-outreach/school-meetup.JPG" className='object-cover h-full w-full' alt="" /></div>
                <div className='w-full lg:w-[50%] h-full '><img src="assets/new-outreach/group-photp-2.JPG" className='object-cover object-top h-full w-full' alt="" /></div>
              </div>
              <div className='h-[50%] pt-2'>
                <img src="assets/new-outreach/orphanage-photo.JPG" className='object-cover object-top h-full w-full' alt="" />
              </div>
            </div>
          </div>

          <div className='h-[40%] flex flex-wrap gap-2'>
            <div className='basis-[220px] flex-grow'>
              <img src="assets/new-outreach/outreach-image.JPG" className='object-cover h-full w-full' alt="" />
            </div>
            <div className='basis-[220px] flex-grow'>
              <img src="assets/new-outreach/group-photo.JPG" className='object-cover h-full w-full' alt="" />
            </div>
            <div className='basis-[220px] flex-grow'>
              <img src="assets/new-outreach/assembly.JPG" className='object-cover object-center h-full w-full' alt="" />
            </div>
            <div className='basis-[220px] flex-grow'>
              <img src="assets/new-outreach/book-sharing.JPG" className='object-cover h-full w-full' alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallary section 2 */}
      <section className='h-full w-full'>
        <div className='w-full lg:w-[80%] mx-auto flex flex-wrap p-2 gap-2 2xl:max-w-7xl pt-10 pb-10'>
          <div className='flex-grow basis-[220px]'>
            <img src="assets/new-outreach/girl-gift-presentation.JPG" className='object-cover h-full w-full' alt="" />
          </div>
          <div className='flex-grow basis-[280px]'>
            <img src="assets/new-outreach/standing-with-students.JPG" className='object-cover h-full w-full' alt="" />
          </div>
          <div className='flex-grow basis-[220px]'>
            <img src="assets/new-outreach/book-with-kids.JPG" className='object-cover h-full w-full' alt="" />
          </div>
        </div>
      </section>

      {/**the second section starts....................................................*/}
      <section className="h-full overflow-clip">
        <div className="w-full sm:w-[80%] mx-auto block lg:flex p-2 pt-4 pb-10 xl:max-w-6xl">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="max-w-lg p-2 sm:pr-7"
          >
            <p className="text-base pb-3">
              Thank you for being the driving force behind our endeavors. Your
              belief in our cause fuels our passion and propels us toward
              impactful milestones. Let's continue this journey together, hand
              in hand, as we shape a world where compassion knows no bounds.
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
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="w-full"
          >
            <img
              src="/assets/school.jpg"
              className="w-full h-full object-cover object-center lg:w-[440px] sm:h-[440px]"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="h-full">
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="w-full sm:w-[80%] mx-auto xl:max-w-6xl p-2"
        >
          <div className="w-full mt-8 pb-10 p-2">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-2xl pt-2 pb-2">Sponsors and Partners.</h3>
              <p className="text-base">
                At The Royal Family Charitable Foundation, we extend our
                heartfelt appreciation to our sponsors and partners. Your
                unwavering support is the cornerstone of our impact.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-20 gap-y-10 pt-8">
              <img
                src="/assets/logos/logo-1.png"
                className=" h-20 w-32 object-contain flex-grow basis-[100px]"
                alt="Logo"
                loading="lazy"
              />
              <img
                src="/assets/logos/logo-2.png"
                className=" h-20 w-32 object-contain flex-grow basis-[100px]"
                alt="Logo"
                loading="lazy"
              />
              <img
                src="/assets/logos/logo-3.png"
                className=" h-20 w-32 object-contain flex-grow basis-[100px]"
                alt="Logo"
                loading="lazy"
              />
              <img
                src="/assets/logos/logo-4.png"
                className=" h-20 w-32 object-contain flex-grow basis-[100px]"
                alt="Logo"
                loading="lazy"
              />
              <img
                src="/assets/logos/logo-5.png"
                className=" h-20 w-32 object-contain flex-grow basis-[100px]"
                alt="Logo"
                loading="lazy"
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
