import React from "react";
import image from "./assets/rohan.png";
import { motion } from "framer-motion";
import { FiGithub, FiInstagram } from "react-icons/fi";
import projectsAPI from "./projectsAPI";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiDjango,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiGit,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
const Main = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const pageVariants = {
    in: {
      opacity: 1,
    },
    out: { opacity: 0 },
  };
  const pageTransition = {
    duration: 1.3,
    ease: "easeInOut",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://rohanbackend.herokuapp.com/contact`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Sent",
        confirmButtonColor: "#0c090a",
      });
    });
  };
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="flex justify-center items-center font-poppins">
        <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <div className="mx-auto py-1 flex justify-center items-center rounded-full border-2 border-gray-900 mt-5 h-60 w-60 md:h-64 md:w-64">
              <div
                className="h-56 md:h-58 w-56 md:w-58 rounded-full"
                style={{
                  backgroundImage: "url(" + image + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <h1 className="title-font sm:text-3xl text-2xl mb-1 font-semibold text-gray-900 mt-2">
              Rohan Phulkar
            </h1>
            <p className="mb-4 font-medium leading-relaxed text-gray-500">
              Full Stack Web Developer
            </p>
            <div className="flex justify-center">
              <button className="text-white font-semibold bg-gray-900 border-0 py-2 px-6 focus:outline-none cursor-pointer hover:bg-sky-600 rounded-full text-lg">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center items-center pb-8">
        <span className="mr-6 text-3xl text-gray-700 hover:text-gray-800 cursor-pointer">
          <FiGithub />
        </span>
        <span className="mr-6 text-3xl text-gray-700 hover:text-gray-800 cursor-pointer">
          <FiInstagram />
        </span>
      </div>
      <div className="container mx-auto text-xl font-semibold">
        <button className="bg-gray-900 flex justify-center items-center py-3 px-4 rounded-lg text-white mx-auto ">
          Download CV{" "}
          <span className="text-3xl cursor-pointer">
            <HiDownload />
          </span>
        </button>
      </div>
      <div className="container p-4 mx-auto text-center mt-10 mb-7">
        <h2 className="text-3xl font-bold">Skills</h2>
      </div>
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <div className="flex flex-wrap justify-center lg:justify-between">
          <span className="text-5xl md:text-6xl mx-10 my-6 md:mx-12 lg:m-0 ">
            <SiPython />
          </span>
          <span className="text-5xl md:text-6xl mx-10 my-6 md:mx-12 lg:m-0">
            <SiJavascript />
          </span>
          <span className="text-5xl md:text-6xl mx-10 my-6 md:mx-12 lg:m-0">
            <SiReact />
          </span>
          <span className="text-5xl md:text-6xl mx-10 my-6 md:mx-12 lg:m-0">
            <SiNextdotjs />
          </span>
          <span className="text-5xl md:text-6xl mx-10 my-6 md:mx-12 lg:m-0 ">
            <SiDjango />
          </span>
          <span className="text-5xl md:text-6xl mx-10 my-6 md:mx-12 lg:m-0">
            <FaNodeJs />
          </span>
          <span className="text-5xl md:text-6xl mx-10 my-6 md:mx-12 lg:m-0">
            <SiExpress />
          </span>
          <span className="text-5xl md:text-6xl mx-10 my-6 md:mx-12 lg:m-0">
            <SiMysql />
          </span>
          <span className="text-5xl md:text-6xl mx-10 my-6 md:mx-12 lg:m-0 ">
            <SiMongodb />
          </span>
          <span className="text-5xl md:text-6xl mx-10 my-6 md:mx-12 lg:m-0">
            <SiGit />
          </span>
        </div>
      </div>
      <div className="container p-4 mx-auto text-center mb-7 mt-10">
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
        <div className="flex flex-wrap justify-center md:justify-around items-center">
          {projectsAPI.map((project) => {
            return (
              <div
                className="max-w-xs rounded-md shadow-md my-3"
                key={project.id}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover object-center w-full rounded-t-md h-64 "
                />
                <div className="flex flex-col justify-between p-1 space-y-2">
                  <div className="">
                    <h2 className="text-xl font-semibold ">{project.name}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-12">
        <div className="container p-4 mx-auto text-center mt-10 mb-7">
          <h2 className="text-3xl font-bold">Contact</h2>
        </div>
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 ">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold my-4">Get in touch</h1>
            <div className="space-y-4">
              <a
                href="tel:+917400779162"
                className="flex items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+917400779162</span>
              </a>
              <a
                href="mailto:rohanphulkar936@gmail.com"
                className="flex items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>rohanphulkar936@gmail.com</span>
              </a>
            </div>
          </div>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="mt-2">
              <div className=" flex flex-col">
                <label className="text-lg font-semibold leading-none ">
                  Name
                </label>
                <input
                  required={true}
                  type="text"
                  className="text-lg leading-none p-3 focus:oultine-none  mt-4  border rounded border-gray-800 placeholder-gray-500"
                  placeholder="Enter Your Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mt-8">
              <div className=" flex flex-col  md:mt-0 mt-4">
                <label className="text-lg font-semibold leading-none ">
                  Email Address
                </label>
                <input
                  required={true}
                  type="email"
                  className="text-lg leading-none p-3 focus:oultine-none  mt-4   border rounded border-gray-800 placeholder-gray-500"
                  placeholder="Enter Your Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="text-lg font-semibold leading-none ">
                  Message
                </label>
                <textarea
                  required={true}
                  type="text"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Enter Your Message"
                  className="h-36 text-lg leading-none p-3 focus:oultine-none  mt-4  border rounded border-gray-800 placeholder-gray-500 resize-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-end w-full">
              <button
                type="submit"
                className="mt-9 text-base font-semibold leading-none bg-gray-900 text-white py-4 px-10   rounded hover:shadow-md"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
