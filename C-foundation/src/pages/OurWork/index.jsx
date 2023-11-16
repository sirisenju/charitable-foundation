import React from "react";
import NavLinks from "../../components/NavLinks";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";

function OurWork() {
  return (
    <main>
      <NavLinks />
      {/**hero section for our work.........................................................*/}
      <section className="h-full bg-[#F8F7FF] pb-[6%]">
        <div className="w-full md:w-[90%] mx-auto sm:flex justify-between items-center max-w-5xl">
          <div className="w-full sm:max-w-xl p-2">
            <p className="pb-3">Our work</p>
            <h2 className="text-3xl pb-3 font-semibold">
              The joy is in giving.
            </h2>
            <p className="text-xl sm:text-lg">
              At The Royal Family Charitable Foundation, our work is more than a
              mission; it's a commitment to crafting a future filled with
              possibilities. Through dedicated efforts, we strive 'to empower
              young minds, create lasting impact, and sow the seeds of positive
              change. Join us in this transformative journey, where every
              action, big or small, contributes to building a world where hope
              flourishes and dreams thrive.
            </p>
          </div>
          <div className="w-full bg-transparent p-2 sm:p-5">
            <div className="h-[300px] sm:h-[300px]">
              <img
                src="/assets/4-kids.jpg"
                className="sm:rounded-tr-[100px] sm:rounded-bl-[100px] h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="sm:flex sm:flex-wrap w-full sm:gap-x-4">
              <div className="w-full sm:w-1/2 flex-grow basis-[210px] sm:pt-4">
                <img
                  src="/assets/female-kids.jpg"
                  className="h-[210px] sm:h-[190px] w-full object-cover sm:rounded-tr-[100px] sm:rounded-bl-[100px]"
                  alt=""
                />
              </div>
              <div className="w-full sm:w-1/2 sm:pt-4 flex-grow basis-[210px]">
                <img
                  src="/assets/smilling-children.jpg"
                  className="h-[210px] sm:h-[190px] w-full object-cover sm:rounded-tr-[100px] sm:rounded-bl-[100px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**hero section for our work.........................................................*/}

      {/**seccond section starts for our work.........................................................*/}
      <section className="h-full bg-[#2c2c2c]/90">
        <div className="w-full sm:w-[90%] min-h-min mx-auto pb-14 p-2 max-w-6xl">
          <div className="sm:w-[75%] mx-auto mb-4 pt-4 pb-4 text-white">
            <h3 className="text-xl font-semibold pb-2">Donate who Deserved</h3>
            <p className="text-base sm:text-lg max-w-[600px]">
              As we strive to make a lasting impact, we invite you to join hands
              with us once again. Your donation, no matter the size, fuels the
              engine of change, turning dreams into reality. Together, let's
              continue this journey of compassion and transformation.
            </p>
          </div>
          <div className="w-full sm:w-[75%] mx-auto sm:p-14 relative">
            <img
              src="/assets/connecting-lines.png"
              className="h-[600px] object-center mx-auto hidden sm:block"
              alt=""
            />
            <div className="h-auto w-full sm:max-w-md sm:absolute bg-[#2c2c2c]/70 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg top-0 left-[10%] p-2 flex flex-wrap mb-4">
              <img
                src="/assets/simple-smile.jpg"
                className=" object-cover h-28 w-28 relative"
                alt=""
              />
              <div className="pl-4 self-center relative flex-grow basis-[120px] items-start text-white">
                <p className="pb-2">
                  Name: Precious King. <br />
                  Age: 10 years old <br />
                  Dream: To become a doctor
                </p>
                <NavLink to={"/donation"}>
                  <button className="bg-[#c5baaa]/30 px-7 py-1 rounded-lg">
                    Donate
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="min-h-min w-full sm:max-w-sm sm:absolute p-2 bg-[#2c2c2c]/70 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg top-[23%] -right-[18%] flex flex-wrap mb-4">
              <img
                src="/assets/simple-smile.jpg"
                className=" object-cover h-28 w-28 relative"
                alt=""
              />
              <div className="relative flex-grow basis-[120px] pl-4 items-start text-white">
                <p className="pb-2">
                  Name: Precious King. <br />
                  Age: 10 years old <br />
                  Dream: To become a doctor
                </p>
                <NavLink to={"/donation"}>
                  <button className="bg-[#c5baaa]/30  px-7 py-1 rounded-lg">
                    Donate
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="h-auto w-full sm:max-w-sm p-2 sm:absolute bg-[#2c2c2c]/70 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg top-[43%] -left-[10%] flex flex-wrap mb-4">
              <img
                src="/assets/simple-smile.jpg"
                className=" object-cover h-28 w-28 relative"
                alt=""
              />
              <div className="flex-grow basis-[120px] pl-4 relative items-start text-white">
                <p className="pb-2">
                  Name: Precious King. <br />
                  Age: 10 years old <br />
                  Dream: To become a doctor
                </p>
                <NavLink to={"/donation"}>
                  <button className="bg-[#c5baaa]/30  px-7 py-1 rounded-lg">
                    Donate
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="h-auto w-full sm:max-w-sm p-2 sm:absolute bg-[#2c2c2c]/70 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg  bottom-[13%] right-[3%] flex flex-wrap mb-4">
              <img
                src="/assets/simple-smile.jpg"
                className=" object-cover h-28 w-28"
                alt=""
              />
              <div className="flex-grow basis-[120px] pl-4 relative items-start text-white">
                <p className="pb-2">
                  Name: Precious King. <br />
                  Age: 10 years old <br />
                  Dream: To become a doctor
                </p>
                <NavLink to={"/donation"}>
                  <button className="bg-[#c5baaa]/30  px-7 py-1 rounded-lg">
                    Donate
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="h-auto w-full sm:max-w-sm p-2 sm:absolute bg-[#2c2c2c]/70 rounded-lg backdrop-blur-xl bg-opacity-50 shadow-lg -bottom-[5%] -left-[8%] flex flex-wrap">
              <img
                src="/assets/simple-smile.jpg"
                className=" object-cover h-28 w-28"
                alt=""
              />
              <div className="flex-grow basis-[120px] pl-4 relative items-start text-white">
                <p className="pb-2">
                  Name: Precious King. <br />
                  Age: 10 years old <br />
                  Dream: To become a doctor
                </p>
                <NavLink to={"/donation"}>
                  <button className=" bg-[#c5baaa]/30 px-7 py-1 rounded-lg">
                    Donate
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**seccond section ends for our work.........................................................*/}

      {/**story section starts for our work.........................................................*/}
      <section className="h-full">
        <div className="w-full sm:w-[80%] min-h-min mx-auto p-2">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-start sm:text-center text-2xl pb-2 pt-4">
              Read our stories, share our dreams.
            </h3>
            <p className="text-base pb-2 pt-2 sm:text-center">
                Dive into the tapestry of inspiring stories that define us. 
                Each narrative is a brushstroke, painting a picture of resilience, 
                hope, and the transformative power of compassion.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mt-5">
            <h3 className="text-3xl pb-4">Story of Kevwe</h3>
            <div className="float-none sm:float-right pl-0 sm:pl-10">
              <img
                src="/assets/emilia.jpg"
                className="h-[330px] sm:w-[290px] w-full object-cover"
                alt=""
              />
            </div>
            <p className="text-justify">
              In the city of Delta, Nigeria, a soft drizzle painted the streets
              in a hushed rhythm. In the quiet spaces between the towering
              buildings and the hum of city life, a small figure huddled close
              to the gutters, seeking refuge from the cold rain. This figure,
              fragile and seemingly forgotten, was a young orphan named Kevwe.
              Abandoned by circumstances beyond his control, Kevwe was left to
              navigate the harsh realities of life on the streets. Hunger and
              loneliness were his constant companions, and the rhythm of the
              raindrops seemed to echo the beat of his longing heart. It was in
              this desolate moment that fate intervened in the form of a caring
              soul. One day, as the rain continued its gentle descent, a member
              of the Orphanage Foundation, on a routine outreach program,
              discovered Kevwe near the gutters. The sight of the shivering
              child, drenched and forlorn, stirred a deep well of compassion
              within them. Without hesitation, they extended a warm hand and a
              glimmer of hope to the young boy. Wrapped in a blanket of
              kindness, Kevwe was brought into the embrace of the Orphanage
              Foundation. The walls of the orphanage became the canvas on which
              his resilience would be painted. The caregivers, with hearts as
              vast as the love they shared, provided not only shelter and
              sustenance but a family where Kevwe could belong. At first,
              Kevwe's eyes mirrored the shadows of his past, but gradually, the
              gloom began to lift. The laughter of other children, the warmth of
              shared meals, and the bedtime stories woven with dreams painted a
              new reality for him. Education became his beacon, lighting the
              path to a future brimming with possibilities. With each passing
              day, Kevwe transformed from a child of the streets to a beacon of
              hope within the walls of the orphanage. The story of Kevwe serves
              as a testament to the power of compassion and the profound impact
              an organization dedicated to change can have on the life of a
              single child. As the raindrops continued to fall, they were now
              joined by the sound of Kevwe's laughter—a melody that echoed the
              promise of a brighter tomorrow.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mt-5">
            <h3 className="text-3xl pb-4 text-start sm:text-end">
              Story of Esther
            </h3>
            <div className="float-none sm:float-left pr-0 sm:pr-10">
              <img
                src="/assets/emilia.jpg"
                className="h-[330px] sm:w-[290px] w-full object-cover"
                alt=""
              />
            </div>
            <p className="text-justify">
              In the quiet outskirts of a small town, where shadows concealed
              the scars of secrets, lived Esther, a delicate soul weathering the
              storm of abuse within the confines of her home. Her days were
              painted with the hues of fear, each step she took echoing the
              silent pleas of a wounded spirit. Esther's parents, once the
              guardians of her innocence, became architects of her pain. Their
              words cut deeper than any blade, leaving wounds that went unseen.
              The walls of their home, meant to be a sanctuary, transformed into
              a prison of torment for the young girl. Yet, amidst the darkness,
              a flicker of resilience burned within Esther. In the confines of
              her room, she found solace in books that transported her to worlds
              where kindness triumphed over cruelty. With each page turned, she
              forged a shield of imagination that offered brief respite from the
              harsh reality outside. One day, a neighbor, keenly attuned to the
              subtle signs of Esther's silent suffering, extended a lifeline. A
              gentle inquiry opened the floodgates of Esther's pain. The
              neighbor, armed with empathy, became a beacon of support.
              Together, they reached out to local authorities and support
              networks, unraveling the layers of Esther's concealed anguish. The
              resilience within her, steeled by the compassion of those who
              cared, began to blossom. The town rallied behind her, building a
              fortress of protection that shielded Esther from the storm she had
              endured. As Esther's story unfolded, it became a testimony to the
              transformative power of compassion and collective action. The
              scars of abuse, once etched deeply into her spirit, gradually
              faded, replaced by the gentle touch of healing and the warmth of a
              community that refused to turn a blind eye. In the quiet outskirts
              of that small town, Esther's resilience became a beacon of hope—a
              testament that even in the darkest corners, where pain resides,
              the human spirit can emerge, fragile yet unbroken, ready to
              embrace the light of a new dawn.
            </p>
          </div>
          <div className="w-full mt-8 pb-10 p-2">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl pt-2 pb-2">Sponsors and Partners.</h3>
              <p className=" text-base">
              Your unwavering support is the cornerstone of our mission. Through your commitment, 
              we forge pathways to positive change, transforming dreams into reality. Together, 
              we create a powerful alliance that uplifts communities, empowers individuals, and 
              builds a future filled with promise.
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
      {/**story section ends for our work.........................................................*/}
      <section className="min-h-min">
        <div className="min-h-min sm:p-2 mx-auto relative text-white">
          <img
            src="/assets/smilling-children.jpg"
            className="h-[570px] w-full object-cover object-center sm:rounded-2xl"
            alt=""
          />
          <p className="text-3xl font-semibold absolute right-[10%] top-[25%]">
            We Make A Diffrence <br />
            In Their Lives.
          </p>
        </div>
      </section>
      {/**story section ends for our work.........................................................*/}
      <Footer />
    </main>
  );
}

export default OurWork;
