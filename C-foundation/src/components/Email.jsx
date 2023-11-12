import React from "react";
import { useState } from "react";

function Email() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let isError = false;

    if (name.trim() === "") {
      isError = true;
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
    }

    if (email.trim() === "") {
      isError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        isError = true;
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email address",
        }));
      }
    }

    if (phoneNumber.trim() === "") {
      isError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Please enter a valid phone number",
      }));
    }

    if (message.trim() === "") {
      isError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message field is required",
      }));
    }

    if (!isError) {
      alert("Form submitted successfully");
      setName("");
      setEmail("");
      setErrors({ name: "", email: "", phoneNumber: "", message: "" });
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto pt-7">
        <form action="" className="" onSubmit={handleSubmit}>
          <div className="flex gap-x-4 text-[#7F7F7F] max-[390px]:inline">
            <div className="w-full">
              <input
                type="text"
                placeholder="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 h-12 mb-2 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]"
              />
              {errors.name && <p className="text-red-500 pl-2">{errors.name}</p>}
            </div>
            <div className="w-full">
                <input
                type="text"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 h-12 mb-2 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]"
            />
            {errors.email && <p className=" text-red-500 pl-2">{errors.email}</p>}
            </div>
          </div>
          <div className="flex gap-x-4 text-[#7F7F7F] max-[390px]:inline">
            <div className="w-full">
                <input
                type="text"
                placeholder="Phone"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-3 h-12 mb-2 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]"
                />
                {errors.phoneNumber && <p className=" text-red-500 pl-2">{errors.phoneNumber}</p>}
            </div>
            <div className="w-full">
                <input
                type="text"
                placeholder="Subject"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-3 h-12 mb-2 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]"
                />
            </div>
          </div>
          <div>
            <textarea
                name=""
                placeholder="Message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=" w-full h-28 p-3 outline-none rounded-3xl bg-transparent border-2 border-[#7F7F7F]"
            ></textarea>
            {errors.message && <p className=" text-red-500 pl-2">{errors.message}</p>}
          </div>
          <div className=" w-full flex justify-center pt-4">
            <button
              type="submit"
              className="bg-green-200 py-2 px-10 rounded-3xl self-center"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Email;
