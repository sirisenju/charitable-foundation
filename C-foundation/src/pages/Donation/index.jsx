import React from "react";
import NavLinks from "../../components/NavLinks";
import Footer from "../../components/Footer";
import { useState } from "react";
import { PaystackButton } from 'react-paystack'

function Donation() {

  const [amount, setAmount] = useState();
  const [userInfo, setSetUserInfo] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
  });

  const [error, setError] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
  });

  //handle user input from form
  const handleInput = (event) => {
    const { name, value } = event.target;
    setSetUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      alert("email sent successfully");
      console.log(userInfo);
      setSetUserInfo({ fullname: "", email: "", phonenumber: "" });
    }
  };

  //validate form
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (userInfo.fullname.trim() === "") {
      errors.fullname = "field is required";
      isValid = false;
    }

    if (userInfo.email.trim() === "") {
      errors.email = "email address is required";
      isValid = false;
    }

    if (userInfo.phonenumber.trim() === "") {
      errors.phonenumber = "phonenumber field is required";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };


  // const componentProps = {
  //   email: userInfo.fullname,
  //   amount: 
  //   metadata: {
  //     name, 
  //     phone,
  //   },
  //   publicKey,
  //   text: "Pay Now",
  //   onSuccess: () =>
  //     alert("Thanks for doing business with us! Come back soon!!"),
  //   onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  // }

  return (
    <main>
      <NavLinks />
      {/* first section for donation............................................. */}
      <section className="h-full w-full ">
        <div className="bg-nav-color w-full lg:w-[90%] mx-auto p-2 sm:p-8 xl:max-w-6xl">
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-sine"
            className="pt-4 text-black"
          >
            <h2 className="text-lg">Transform Lives with Your Generosity</h2>
            <p className=" text-lg pt-2 pb-2">
              Your donation is more than a contribution; it's a lifeline for
              those in need. At The Royal Family Charitable Foundation, we
              believe in the power of collective action to create lasting
              change. Your support enables us to provide education, healthcare,
              and hope to individuals and communities facing challenges.
            </p>
            <div className="block sm:flex max-w-5xl">
              <img
                src="/assets/simple-smile.jpg"
                loading="lazy"
                className="w-[360px] h-full"
                alt=""
              />
              <div className="w-full sm:max-w-2xl p-4 pt-4">
                <p className=" text-xl font-semibold">Why Donate?</p>
                <ul>
                  <li className="pt-2 text-base">
                    <span className=" font-semibold">
                      Empower Tomorrow's Leaders:{" "}
                    </span>{" "}
                    Your donation directly contributes to the education and
                    development of young minds, empowering them to break the
                    cycle of adversity.
                  </li>
                  <li className="pt-2 text-base">
                    <span className=" font-semibold">
                      Provide Vital Healthcare:
                    </span>{" "}
                    Support our mission to ensure access to essential healthcare
                    for those who need it most, offering a chance at a healthier
                    and brighter future.
                  </li>
                  <li className="pt-2 text-base">
                    <span className=" font-semibold">Foster Hope: </span>
                    Your generosity helps us create a nurturing environment,
                    fostering hope and resilience in the face of difficult
                    circumstances.
                  </li>
                </ul>
                <p className="pb-3 pt-3">Enter any amount, donate now.</p>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-[30px] w-full sm:w-[200px] p-2 outline-none rounded-3xl shadow-lg"
                  placeholder="10,000.00"
                />
              </div>
            </div>
            <div className="max-w-2xl mt-4">
              <form action="" className="">
                <p className="pb-4 font-semibold text-xl">Personal info.</p>
                <div className="flex gap-x-4 text-black max-[390px]:inline">
                  <div className="w-full pb-2">
                    <input
                      type="text"
                      name="fullname"
                      onChange={handleInput}
                      value={userInfo.fullname}
                      id="fullname"
                      placeholder="Name"
                      className="max-[390px]:w-full w-full p-3 h-10 outline-none rounded-3xl bg-transparent border-2 border-[#2C2C2C] shadow-lg"
                    />
                    <span style={{ color: "red" }}>{error.fullname}</span>
                  </div>
                  <div className=" w-full pb-2">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      onChange={handleInput}
                      value={userInfo.email}
                      placeholder="Email"
                      className="max-[390px]:w-full w-full p-3 h-10 outline-none rounded-3xl bg-transparent border-2 border-[#2C2C2C] shadow-lg"
                    />
                    <span style={{ color: "red" }}>{error.email}</span>
                  </div>
                </div>
                <div className="flex gap-x-4 text-black max-[390px]:inline">
                  <div className="w-[50%] pb-2">
                    <input
                      type="text"
                      name="phonenumber"
                      id="phonenumber"
                      onChange={handleInput}
                      value={userInfo.phonenumber}
                      placeholder="Phone"
                      className="max-[390px]:w-full w-full p-3 h-10 outline-none rounded-3xl bg-transparent border-2 border-[#2C2C2C] shadow-lg"
                    />
                    <span style={{ color: "red" }}>{error.phonenumber}</span>
                  </div>
                </div>
                <div className="w-full flex justify-center sm:justify-start pt-2">
                  <button
                    onClick={handleSubmit}
                    className="bg-[#2C2C2C]/90 text-white py-2 px-10 rounded-3xl self-center shadow-lg"
                  >
                    Donate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Donation;
