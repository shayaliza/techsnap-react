import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.css";
import Post from "./../assets/bottomNav/post.png";
import Jobs from "./../assets/bottomNav/jobs.png";
import Surprize from "./../assets/bottomNav/surprice.png";
import Catelogue from "./../assets/bottomNav/catelog.png";
import home from "./../assets/bottomNav/home.png";

function BottomBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className="bottombar fixed bottom-0 left-0 w-full h-16 bg-white min-[900px]:hidden border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <Link
          to={"/"}
          className={`inline-flex flex-col items-center justify-center px-5 "
            ${
              isActive("/")
                ? "bg-gray-400 rounded-2xl text-white"
                : "hover:bg-gray-700 "
            }`}
        >
          <img src={home} alt="progress" className="w-6 h-6" />
          <span className="text-sm">Home</span>
        </Link>
        <Link
          to={"/myfeed"}
          className={`inline-flex flex-col items-center justify-center px-5 "
          ${
            isActive("/myfeed")
              ? "bg-gray-400 rounded-2xl text-white"
              : "hover:bg-gray-700 "
          }`}
        >
          <img src={Post} alt="progress" className="w-6 h-6" />
          <span className="text-sm text-gray-600 group-hover:text-pink-600">
            Posts
          </span>
        </Link>
        <Link
          to={"/courses"}
          className={`inline-flex flex-col items-center justify-center px-5 "
       ${
         isActive("/courses")
           ? "bg-gray-400 rounded-2xl text-white"
           : "hover:bg-gray-700 "
       }`}
        >
          <img src={Catelogue} alt="leader" className="w-6 h-6" />
          <span className="text-sm text-gray-600 group-hover:text-pink-600">
            Catalog
          </span>
        </Link>
        <Link
          to={"/career"}
          className={`inline-flex flex-col items-center justify-center px-5 "
        ${
          isActive("/career")
            ? "bg-gray-400 rounded-2xl text-white"
            : "hover:bg-gray-700 "
        }`}
        >
          <img src={Jobs} alt="progress" className="w-6 h-6" />
          <span className="text-sm text-gray-600 group-hover:text-pink-600">
            Jobs
          </span>
        </Link>
        <Link
          to={"/projects"}
          className={`inline-flex flex-col items-center justify-center px-5 "
        ${
          isActive("/projects")
            ? "bg-gray-400 rounded-2xl text-white"
            : "hover:bg-gray-700 "
        }`}
        >
          <img src={Surprize} alt="leader" className="w-6 h-6" />
          <span className="text-sm text-gray-600 group-hover:text-pink-600">
            Snappie
          </span>
        </Link>
      </div>
    </div>
  );
}

export default BottomBar;
