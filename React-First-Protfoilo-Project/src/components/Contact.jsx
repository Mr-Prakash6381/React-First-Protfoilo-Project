import React, { useState } from "react";
import { Element } from "react-scroll";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Thank you");

  //   // Clear all fields after submission
  //   setFormData({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  // };

  function sumbitButton() {
    alert("Thank You");
  }
  return (
    <Element name="contact" className="lg:pt-5">
      <div className="my-40  lg:ml-40  border rounded-2xl border-green-800 hover:border-green-500 hover:shadow-emerald-500 hover:translate-y-0.5 hover:shadow-md lg:w-6xl w-2/2 overflow-hidden">
        <h1 className="text-2xl my-5 mx-5 font-bold text-green-400 ">
          <span className="border-b-2">Con</span>tact
        </h1>
        <form action="#">
          <div className="flex flex-col p-5">
            <input
              type="text"
              placeholder=" Name"
              className="border rounded outline-0 border-green-800 py-2 px-10 text-white mb-5 hover:translate-y-0.5  hover:border-green-900 hover:shadow-emerald-500 "
              required
            />
            <input
              type="email"
              placeholder=" Email"
              className="border rounded outline-0 border-green-800 py-2 px-10 text-white mb-5 hover:translate-y-0.5   hover:border-green-900 hover:shadow-emerald-500 "
              required
            />
          
             <textarea
              type="message"
              placeholder="Message"
              className="border rounded size-40 w-full py-2  outline-0 border-green-800 px-10 text-white hover:translate-y-0.5  hover:border-green-900 hover:shadow-emerald-500  "
            />
          </div>
          <input
            onClick={sumbitButton}
            type="submit"
            className="border py-2 px-5 rounded ml-5 mb-5 hover:translate-y-0.5 border-green-800  hover:border-green-900 hover:shadow-emerald-500 text-white font-bold"
          />
        </form>

        {/* <button
          type="submit"
          className="border rounded  py-2 px-5 ml-5 mb-5"
          onClick={handleSubmit}
        >
          Submit
        </button>  */}
      </div>
    </Element>
  );
};

export default Contact;
