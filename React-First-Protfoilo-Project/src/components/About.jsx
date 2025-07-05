import React from "react";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about" className="lg:pt-20">
      <div className="my-40  lg:ml-40  border rounded-2xl border-green-800 hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md hover:translate-y-0.5  lg:w-6xl w-2/2 overflow-hidden p-5">
        <h1 className="text-2xl my-5 mx-5 font-bold text-green-400 ">
          <span className="border-b-2">About</span>Me
        </h1>
        {/* <div className="flex lg:flex-row flex-col m-5 gap-5  mb-10"> */}
        <h1 className="text-2xl my-10 text-white font-light">
          I’m <span className="font-bold ">Prakash</span> , an ambitious Full
          Stack Developer with expertise in modern web technologies like HTML,
          CSS, JavaScript, Tailwind, React, MongoDB, Node.js, Express.js, and
          GitHub.
        </h1>
        <h1 className="text-2xl my-10 text-white font-light">
          I build efficient digital solutions—from responsive UIs to full-stack
          CRUD applications—with a focus on clean code and seamless user
          experiences.
        </h1>
        <h1 className="text-2xl my-10 text-white font-light">
          When I’m also developing projects like login systems or dynamic
          navbars, I explore emerging tech and share insights with the developer
          community to faster collective growth.
        </h1>
        {/* </div> */}
      </div>
    </Element>
  );
};

export default About;
