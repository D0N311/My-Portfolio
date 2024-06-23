import Docker from "../assets/docker.svg";
import Git from "../assets/git.svg";
import HTML from "../assets/html.svg";
import Java from "../assets/java.svg";
import Javascript from "../assets/js.svg";
import Laravel from "../assets/laravel.svg";
import Node from "../assets/nodejs.svg";
import Php from "../assets/php.svg";
import Phyton from "../assets/phytone.svg";
import PostgreSQL from "../assets/postgres.svg";
import React from "../assets/react.svg";
import Tailwind from "../assets/tailwind.svg";
import Firebase from "../assets/firebase.svg";
import Linux from "../assets/linux.svg";
import Typescipt from "../assets/typescript.svg";
import GCC from "../assets/gcc.svg";
export default function Grid() {
  const url = "https://coursera.org/verify/professional-cert/ZTBLBXSK72MV";
  const skills = [
    { name: "HTML", logo: HTML },
    { name: "Javascript", logo: Javascript },
    { name: "React", logo: React },
    { name: "Node", logo: Node },
    { name: "Laravel", logo: Laravel },
    { name: "PostgreSQL", logo: PostgreSQL },
    { name: "Git", logo: Git },
    { name: "Docker", logo: Docker },
    { name: "Firebase", logo: Firebase },
    { name: "Tailwind", logo: Tailwind },
    { name: "Java", logo: Java },
    { name: "Python", logo: Phyton },
    { name: "PHP", logo: Php },
    { name: "Linux", logo: Linux },
    { name: "Typescript", logo: Typescipt },
  ];

  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center text-white font-roboto-slab">
        Tech Stack
      </h2>
      <div className="flex items-center justify-center mb-10 ">
        <section className="grid w-9/12 grid-cols-3 grid-rows-2 gap-4 mt-10 xl:grid-cols-6 md:grid-">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img className="w-16 h-16" src={skill.logo} alt={skill.name} />
              <h4 className="mt-4 text-white font-roboto-slab">{skill.name}</h4>
            </div>
          ))}
        </section>
      </div>
      <div className="flex flex-col items-center justify-center xl:flex-row xl:space-x-4 mt-14">
        <h2 className="text-xl text-white font-roboto-slab">
          Google Cybersecurity →
        </h2>
        <a
          className="text-xl underline cursor-pointer text-blue-600 font-roboto-slab"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Verify Here
        </a>
        <img src={GCC} alt="logo" className="block mx-auto h-30 xl:mx-0" />
      </div>
    </div>
  );
}
