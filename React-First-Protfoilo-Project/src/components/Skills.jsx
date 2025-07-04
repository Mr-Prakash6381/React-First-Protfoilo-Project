import React from "react";
import { Element } from "react-scroll";
import img1 from "../assets/HTML5.svg";
import img2 from "../assets/CSS3.svg";
import img3 from "../assets/JavaScript.svg";
import img4 from "../assets/react.svg";
import img5 from "../assets/Node.js.svg";
import img6 from "../assets/Express.svg";
import img7 from "../assets/MongoDB.svg";
import img8 from "../assets/Git.svg";

const Skills = () => {
  return (
    <Element name="skills" className="lg:pt-5">
      <div className="my-40  lg:ml-40  border rounded-2xl border-green-800 hover:border-green-500 hover:translate-y-0.5 hover:shadow-emerald-500 hover:shadow-md lg:w-6xl w-2/2 overflow-hidden">
        <h1 className="text-2xl my-5 mx-5 font-bold text-green-400 ">
          <span className="border-b-2">Sk</span>ills
        </h1>
        <div className="flex lg:flex-col flex-row gap-5  items-center justify-center   mb-10">
          <div className="flex lg:flex-row flex-col  gap-10  ">
            <div className="border  border-green-800  p-5 text-center rounded-2xl hover:translate-y-0.5 hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md">
              <div className="  size-25 ">
                <img src={img1} alt="html image" />
              </div>
              <h1 className="text-white font-bold my-2">HTML</h1>
            </div>
            <div className="border  border-green-800 p-5 text-center rounded-2xl hover:translate-y-0.5  hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md">
              <div className="size-25   ">
                <img src={img2} alt="css image" />
              </div>
              <h1 className="text-white font-bold my-2">CSS</h1>
            </div>
            <div className="border  border-green-800 p-5 text-center rounded-2xl hover:translate-y-0.5  hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md">
              <div className=" size-25  ">
                <img src={img3} alt="javascript image" />
              </div>
              <h1 className="text-white text-center font-bold my-2">
                JavaScript
              </h1>
            </div>
            <div className="border  border-green-800 p-5 rounded-2xl hover:translate-y-0.5  hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md">
              <div className=" size-25  ">
                <img src={img4} alt="" />
              </div>
              <h1 className="text-white text-center font-bold my-2">
                React.js
              </h1>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col  gap-10">
            <div className="border  border-green-800 rounded-2xl p-5 hover:translate-y-0.5  hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md">
              <div className="size-25 ">
                <img src={img5} alt="" />
              </div>
              <h1 className="text-white font-bold my-2 text-center">Node.js</h1>
            </div>
            <div className="border  border-green-800 rounded-2xl p-5 hover:translate-y-0.5  hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md">
              <div className="size-25">
                <img src={img6} alt="" />
              </div>
              <h1 className="text-white font-bold text-center my-2">
                Express.js
              </h1>
            </div>
            <div className="border  border-green-800 rounded-2xl p-5 hover:translate-y-0.5  hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md">
              <div className="size-25">
                <img src={img7} alt="" />
              </div>
              <h1 className="text-white font-bold my-2 text-center">MongoDB</h1>
            </div>
            <div className="border  border-green-800 rounded-2xl p-5 hover:translate-y-0.5  hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md">
              <div className="size-25 ">
                <img src={img8} alt="" />
              </div>
              <h1 className="text-white font-bold text-center my-2">Git</h1>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Skills;
