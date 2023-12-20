import React from "react";
import NavLinks from "../../components/NavLinks";
import Footer from "../../components/Footer";
import charitableTeam from "../../../lib/team";
import { useState } from "react";
import emailjs from "@emailjs/browser";

//email ids
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

console.log(process.env)

function ContactUs() {
  const [emailMessage, setEmailMessage] = useState({
    fullname: "",
    email: "",
    subject: "",
    phonenumber: "",
    message: "",
  });

  const [errorForm, setErrorForm] = useState({
    fullname: "",
    email: "",
    subject: "",
    phonenumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  //handle user input from form
  const handleInput = (event) => {
    const { name, value } = event.target;
    setEmailMessage({
      ...emailMessage,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();

    //create new object for template
    const templateParams = {
      from_name: emailMessage.fullname,
      from_email: emailMessage.email,
      replyto: "charity@theroyalfamilycharitablefoundation.org",
      message: emailMessage.message,
      subject: emailMessage.subject,
      phonenumber: emailMessage.phonenumber,
    };

    if (isValid) {
      //send email using emailjs
      setLoading(true);
      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
        .then((response) => {
          alert("Email Sent Successfully", response);
          setEmailMessage({
            fullname: "",
            email: "",
            subject: "",
            phonenumber: "",
            message: "",
          });
          setLoading(false);
        })
        .catch((error) => {
          alert("Error sending email", error);
          setEmailMessage({
            fullname: "",
            email: "",
            subject: "",
            phonenumber: "",
            message: "",
          });
          setLoading(false);
        });
    }
  };

  //validate form
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (emailMessage.fullname.trim() === "") {
      errors.fullname = "field is required";
      isValid = false;
    }

    if (emailMessage.email.trim() === "") {
      errors.email = "email address is required";
      isValid = false;
    }

    if (emailMessage.phonenumber.trim() === "") {
      errors.phonenumber = "phonenumber field is required";
      isValid = false;
    }

    if (emailMessage.subject.trim() === "") {
      errors.subject = "subject field is required";
      isValid = false;
    }

    if (emailMessage.message.trim() === "") {
      errors.message = "message field cannot be empty";
      isValid = false;
    }

    setErrorForm(errors);
    return isValid;
  };

  return (
    <main>
      <NavLinks />
      {/**volunteer section starts...................................................................... */}
      <section className="min-h-max pb-10 sm:mt-10 overflow-clip">
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="w-full sm:w-[80%] mx-auto p-2 max-w-7xl overflow-clip"
        >
          <div className="max-w-xl text-center mx-auto">
            <h3 className="font-semibold text-4xl pb-2">Volunteers</h3>
            <p>
              Together, let's compose a masterpiece of compassion, where every
              note played and every emotion shared contributes to a more
              empathetic and connected world.
            </p>
          </div>
          <div>
            <div className="block sm:flex sm:flex-wrap w-full gap-x-4 pt-4 justify-center">
              <img
                src="/assets/group.jpg"
                className="w-[570px] h-[450px] object-cover object-center"
                alt=""
                loading="lazy"
              />
              <img
                src="/assets/group2.jpg"
                className="w-[570px] h-[450px] object-cover object-center"
                alt=""
                loading="lazy"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              className="text-start sm:text-justify pt-4"
            >
              <h3 className="text-2xl font-semibold pb-2">
                Become a volunteer today, become one of us.
              </h3>
              <p>
                At The Royal Family Charitable Empowerment Foundation, we
                believe in the transformative power of emotions — the profound
                impact of a shared smile, the warmth of a comforting embrace,
                and the joy that emanates from the depths of genuine connection.
                Volunteering and helping are not just actions for us; they are
                the threads that weave a tapestry of hope, compassion, and love.
              </p>
              <h3 className="text-2xl font-semibold pt-4">
                The Heartbeat of Hope:
              </h3>
              <p>
                Volunteering is the heartbeat of hope in our mission. It's the
                rhythmic pulse of individuals who choose to extend the reach of
                their hearts beyond themselves. In every volunteered moment, we
                witness the birth of hope, as our volunteers become storytellers
                of resilience, crafting tales of strength and optimism for the
                children we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/**volunteer section starts...................................................................... */}

      {/**volunteer team section starts...................................................................... */}
      <section className="min-h-min overflow-clip">
        <div className="w-full sm:w-[90%] mx-auto pb-0 sm:pb-[5%] p-2 xl:max-w-7xl overflow-clip">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            className="w-full pt-10"
          >
            <h3 className="text-3xl">Meet Our Team</h3>
            <p className="text-start sm:text-justify text-lg sm:text-base pb-5">
              At Empowerment, our team of volunteers is not just a collection of
              individuals; they are the architects of dreams, the weavers of
              hope, and the heartbeat of our mission. Each volunteer brings a
              unique melody to the symphony of compassion, creating a harmonious
              ensemble that resonates with warmth, empathy, and a shared
              commitment to making a difference.
            </p>
          </div>
          <div className="block sm:flex sm:flex-wrap h-full justify-between gap-y-4">
            {charitableTeam.map((item) => (
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                key={item.id}
                className="max-w-[290px] min-h-min mx-auto shadow-md"
              >
                <img
                  src={item.imageUrl}
                  loading="lazy"
                  className="object-cover object-center h-[440px] w-full"
                  alt=""
                />
                <div className="w-full text-start p-2">
                  <p className="text-xl">{item.name}</p>
                  <p className="text-base font-semibold">{item.position}</p>
                  <p className="text-sm">{item.quoat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/**volunteer team section ends...................................................................... */}

      {/**our donors map start...................................................................... */}
      <section className="min-h-min overflow-clip">
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="w-full sm:w-[80%] mx-auto p-4 xl:max-w-6xl overflow-clip"
        >
          <div className="max-w-3xl sm:pt-10 sm:text-center mx-auto">
            <h3 className="text-3xl pb-2">Our Donors</h3>
            <p className="text-lg sm:text-base pb-5">
              As we strive to make a lasting impact, we invite you to join hands
              with us once again. Your donation, no matter the size, fuels the
              engine of change, turning dreams into reality. Together, let's
              continue this journey of compassion and transformation. Your
              generosity is not just a donation; it's a catalyst for change.
              Join us in shaping a world where every child's potential is
              realized. Together, we can make a difference.
            </p>
          </div>
          <img
            src="/assets/Donor-Map.png"
            className="object-center object-contain h-full w-full"
            alt=""
          />
        </div>
      </section>
      {/**our donors map start...................................................................... */}

      {/**stay in contact section starts...................................................................... */}
      <section className="min-h-min overflow-clip">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="bg-[#FFF8F8] w-full sm:w-[80%] mx-auto pb-10 p-2 xl:max-w-6xl overflow-clip"
        >
          <div className="max-w-2xl pt-10 text-center mx-auto">
            <h3 className="text-3xl pb-2">Connect with us.</h3>
            <p className=" text-base pb-5">
              Stay in the loop with The Royal Family Charitable Empowerment
              Foundation! Connect with us for the latest updates, inspiring
              stories, and opportunities to make a difference. Drop us a message
              here. Together, let's build a community of positive change!
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="max-w-3xl mx-auto pt-7"
          >
            <form action="" className="" onSubmit={handleSubmit}>
              <div className="flex gap-x-4 text-[#7F7F7F] max-[390px]:inline">
                <div className="w-full text-center pb-2">
                  <input
                    type="text"
                    name="fullname"
                    onChange={handleInput}
                    value={emailMessage.fullname}
                    id="fullname"
                    placeholder="Fullname"
                    className="max-[390px]:w-full w-full p-3 h-12 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]"
                  />
                  <span style={{ color: "red" }}>{errorForm.fullname}</span>
                </div>
                <div className="w-full text-center pb-2">
                  <input
                    type="text"
                    name="email"
                    onChange={handleInput}
                    value={emailMessage.email}
                    id="email"
                    placeholder="Email"
                    className="max-[390px]:w-full w-full p-3 h-12 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]"
                  />
                  <span style={{ color: "red" }}>{errorForm.email}</span>
                </div>
              </div>
              <div className="flex gap-x-4 text-[#7F7F7F] max-[390px]:inline">
                <div className=" w-full text-center pb-2">
                  <input
                    type="text"
                    name="phonenumber"
                    onChange={handleInput}
                    value={emailMessage.phonenumber}
                    id="phonenumber"
                    placeholder="phone number"
                    className="max-[390px]:w-full w-full p-3 h-12 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]"
                  />
                  <span style={{ color: "red" }}>{errorForm.email}</span>
                </div>
                <div className=" w-full text-center pb-2">
                  <input
                    type="text"
                    name="subject"
                    onChange={handleInput}
                    value={emailMessage.subject}
                    id="subject"
                    placeholder="Subject"
                    className="max-[390px]:w-full w-full p-3 h-12 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]"
                  />
                  <span style={{ color: "red" }}>{errorForm.subject}</span>
                </div>
              </div>
              <div className=" w-full text-center">
                <textarea
                  name="message"
                  placeholder="Message"
                  type="text"
                  onChange={handleInput}
                  value={emailMessage.message}
                  id="message"
                  className=" w-full h-28 p-3 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]"
                ></textarea>
                <span style={{ color: "red" }}>{errorForm.message}</span>
              </div>
              <div className=" w-full flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#C5bAAA] py-2 px-10 rounded-3xl self-center shadow-lg"
                >
                  {loading ? "Sending...." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/**stay in contact section ends...................................................................... */}
      <Footer />
    </main>
  );
}

export default ContactUs;
