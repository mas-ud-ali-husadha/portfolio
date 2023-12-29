"use client";
import React, { useEffect, useState } from "react";

const NavMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about")?.offsetHeight || 0;
      const experience =
        document.getElementById("experience")?.offsetHeight || 0;
      const projects = document.getElementById("projects")?.offsetHeight || 0;

      const scrollPosition = window.scrollY;

      if (about && experience && projects) {
        if (scrollPosition < about) {
          setActiveMenuItem("about");
        } else if (scrollPosition < about + experience) {
          setActiveMenuItem("experience");
        } else if (scrollPosition < about + experience + projects) {
          setActiveMenuItem("projects");
        } else {
          setActiveMenuItem("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const arr = ["about", "experience", "projects"];

  return (
    <div className="flex flex-col gap-7">
      {arr.map((item, i) => (
        <div
          key={i}
          className={`flex gap-4  ${
            activeMenuItem == item ? "text-white" : ""
          } items-center`}
        >
          <div
            className={`border-t transition-all ${
              activeMenuItem != item ? "border-slate-400 w-10" : "w-16"
            } `}
          ></div>
          <span className="text-xs font-bold tracking-widest uppercase">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default NavMenu;
