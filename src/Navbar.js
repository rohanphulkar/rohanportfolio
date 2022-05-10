import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center mt-8 font-semibold">
        <a className="mr-5 hover:text-white hover:bg-purple-600 py-4 px-4 rounded-3xl hover:shadow-lg">
          About
        </a>
        <a className="mr-5 hover:text-white hover:bg-purple-600 py-4 px-4 rounded-3xl hover:shadow-lg">
          Skills
        </a>
        <a className="mr-5 hover:text-white hover:bg-purple-600 py-4 px-4 rounded-3xl hover:shadow-lg">
          Projects
        </a>
        <a className="mr-5 hover:text-white hover:bg-purple-600 py-4 px-4 rounded-3xl hover:shadow-lg">
          Hire Me
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
