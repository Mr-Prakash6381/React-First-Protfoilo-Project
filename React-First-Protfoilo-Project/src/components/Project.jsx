import React from "react";
import { Element } from "react-scroll";
const Project = () => {
  return (
    <Element name="project" className="lg:pt-1">
      <div className="flex flex-col  lg:my-40  lg:ml-40  border rounded-2xl border-green-800 hover:border-green-500 hover:translate-y-0.5 hover:shadow-emerald-500 hover:shadow-md lg:w-6xl w-2/2 overflow-hidden">
        <h1 className="text-2xl my-5 mx-5 font-bold text-green-400 ">
          <span className="border-b-2">Proj</span>ects
        </h1>
        <div className="flex lg:flex-row flex-col  gap-5 m-5 mb-10">
          <div className="overflow-hidden size-80  w-full   border rounded-2xl border-green-800 hover:translate-y-0.5  hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md p-5 ">
            <h1 className="text-2xl font-bold text-green-400 mb-5 ">
              Responsive-Navbar
            </h1>
            <a
              href="https://github.com/Mr-Prakash6381/Responsive_Sidebar_Menu"
              className="text-white font-extralight hover:border-b hover:border-b-green-300"
              target="__blank"
            >
              GitHub Repo
            </a>
            <br />
            <a
              href="https://responsivesidebarmenu.netlify.app/"
              className="text-white font-extralight hover:border-b hover:border-b-green-300 my-5"
              target="__blank"
            >
              WebSite Link
            </a>
            <ol className="text-white font-extralight list-disc ml-5 mt-5 ">
              <li>
                {" "}
                Fully responsive design that adapts to mobile and desktop
                screens.
              </li>
              <li>
                Toggle button for showing/hiding the navigation menu on devices{" "}
              </li>
              <li>
                Smooth transitions and animations for a better user experience
              </li>
              <li className="hidden lg:flex">
                Technologies used Html Css and Javascript
              </li>
            </ol>
          </div>
          <div className="overflow-hidden size-80 w-full  border rounded-2xl border-green-800 hover:translate-y-0.5  hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md p-5 ">
            <h1 className="text-2xl font-bold text-green-400 mb-5 ">
              Form Validation
            </h1>
            <a
              href="https://github.com/Mr-Prakash6381/React-Form-Validation"
              className="text-white font-extralight hover:border-b hover:border-b-green-300"
              target="__blank"
            >
              GitHub Repo
            </a>
            <br />
            <a
              href="https://login-validation-603375.netlify.app/"
              className="text-white font-extralight  hover:border-b hover:border-b-green-300"
              target="__blank"
            >
              WebSite Link
            </a>
            <ol className="text-white font-extralight list-disc ml-5 mt-5">
              <li> Form validation checks all fields and requires them</li>
              <li>
                Email Check the proper validation using the email regex pattern{" "}
              </li>
              <li>Password lengths of six characters are validated</li>
              <ul className="hidden lg:flex list-disc">
                <li>
                  It used React hooks and conditional statement props and
                  Tailwind
                </li>
              </ul>
            </ol>
          </div>
        </div>
        <div className="flex lg:flex-row lg:justify-center flex-col gap-5 m-5 mb-10">
          <div className="overflow-hidden size-80 lg:w-1/2 w-full border rounded-2xl border-green-800 hover:translate-y-0.5  hover:border-green-500 hover:shadow-emerald-500 hover:shadow-md p-5 ">
            <h1 className="text-2xl font-bold text-green-400 mb-5 ">
              CURD-OperationOnly -UI
            </h1>
            <a
              href="https://github.com/Mr-Prakash6381/CURD-OperationOnly-Ui"
              className="text-white font-extralight hover:border-b hover:border-b-green-300"
              target="__blank"
            >
              GitHub Repo
            </a>
            <br />
            <a
              href="https://reactfirstprojectcurdoperation-0c5a6a.netlify.app/"
              className="text-white font-extralight  hover:border-b hover:border-b-green-300"
              target="__blank"
            >
              WebSite Link
            </a>
            <ol className="text-white font-extralight list-disc ml-5 mt-5">
              <li>Create: Add new data entries through a form</li>
              <li>Read: Display the list of existing data entries </li>
              <li>Update: Edit and update existing data entries</li>
              <li> Delete: Remove data entries</li>
              <ul className="list-disc lg:flex hidden">
                <li>
                  Technologies Used Tailwind Css / React (with functional
                  components and hooks like useState for state management)
                </li>
              </ul>
            </ol>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Project;
