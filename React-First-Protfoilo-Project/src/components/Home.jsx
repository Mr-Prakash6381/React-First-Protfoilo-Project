import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <Element name="/" className="pt-5">
      <div className="text-white lg:my-30 my-10  lg:p-20 pl-8 lg:ml-40 lg:w-3xl w-full">
        <div className="flex flex-col">
          <h1 className="lg:text-5xl text-2xl my-2  font-bold">
            Hello I'm <span className=" text-green-400">Prakash</span>
          </h1>
          <h6 className="lg:text-3xl text-2xl my-2 font-bold text-green-400">
            Full Stack Developer
          </h6>
          <p className="text-2xl">
            Crafting impactful digital experiences through clean, efficient code
            and modern web technologies transforming complex requirements into
            intuitive interfaces
          </p>
          <div className="flex flex-row w-1/2  gap-5">
            <Link
              to="project"
              smooth={true}
              duration={500}
              className=" border rounded py-2 bg-green-700 text-white   px-5 my-4   border-green-800  hover:shadow-emerald-500 hover:shadow-md hover:translate-y-0.5"
            >
              Project
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className=" border rounded py-2  px-5 my-4 border-green-800  hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md hover:translate-y-0.5"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
