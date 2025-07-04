import React from "react";

import { Element } from "react-scroll";

const Education = () => {
  return (
    <Element name="education" className="lg:pt-20">
      <div className="my-40  lg:ml-40 border rounded-2xl border-green-800 hover:border-green-500 hover:shadow-emerald-500 hover:translate-y-0.5 hover:shadow-md lg:w-6xl w-2/2">
        <h1 className="text-2xl my-5 mx-5 font-bold text-green-400 ">
          <span className="border-b-2">Educa</span>tion
        </h1>
        <div className="flex flex-col gap-5 ml-5 mb-10">
          <ul className="text-2xl text-white list-disc ml-10">
            <li className="font-extralight my-2">
              <span className="font-semibold ">M.sc Computer Sceince</span>
              -Vels University,Pallavarm(2024-2026)
            </li>
            <li className="font-extralight my-2">
              <span className="font-semibold">B.sc Computer Science</span>
              -Sankara College, Kanchipuram(2021-2024)
            </li>
          </ul>
        </div>
        <h1 className="text-2xl my-5 mx-5 font-bold text-green-400 ">
          <span className="border-b-2">Cour</span>se
        </h1>
        <div className="flex flex-col gap-5 ml-5 mb-10">
          <ul className=" text-2xl font-bold text-white list-disc ml-10">
            <li className="my-2 font-extralight">
            <span className="font-semibold"> Honours Diploma in Computer Application</span> -CSC(2022-2023)
            </li>
            <li className="my-2 font-extralight">
              <span className="font-semibold">Typerwriting English Senior</span>
              (2021-2022)
            </li>
            <li className="my-2 font-extralight">
              <span className="font-semibold"> Typerwriting Tamil Senior</span>
              (2022-2023)
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default Education;
