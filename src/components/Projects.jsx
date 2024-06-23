import KBD from "./KBD";
import Project1 from "../assets/project1.svg";
import Project2 from "../assets/project2.svg";
import Project3 from "../assets/project3.svg";
export default function Projects() {
  const projects = [
    {
      name: "Tracking System",
      description:
        "This Tracking System focuses on monitoring the movement of items within the company, as well as their transfer between different company locations.",
      techStack: ["React", "Laravel", "Tailwind", "SQL"],
      image: Project1,
    },
    {
      name: "Homeowners Iformation Management System",
      description:
        "Homeowners Information Management System (HIMS) project is a web-based platform that automates homeowners' operations. HIMS aims to simplify administrative tasks, enhance communication, and offer a centralized solution for day-to-day operations.",
      techStack: ["HTML", "CSS", "Javascript", "Firebase"],
      image: Project2,
    },
    {
      name: "Space Invader",
      description:
        "A classic arcade game where the player controls a spaceship and the objective is to destroy waves of aliens with a laser to earn as many points as possible.",
      techStack: ["HTML", "CSS", "Javascript"],
      image: Project3,
    },
  ];

  return (
    <>
      <section id="Projects" className="bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-center text-white font-roboto-slab">
          Projects
        </h2>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          {projects.map((project, index) => (
            // <div
            //   key={index}
            //   className="bg-gray-50 dark:bg-gray-800 border gap-1 flex justify-between border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8"
            // >
            //   <div>
            //     <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
            //       {project.name}
            //     </h1>
            //     <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            //       {project.description}
            //     </p>
            //     <KBD names={project.techStack} />
            //   </div>
            //   <div>
            //     <img
            //       className="h-full w-full"
            //       src={project.image}
            //       alt="Projects"
            //     />
            //   </div>
            // </div>
            <div className="bg-gray-50 dark:bg-gray-800 border gap-1 flex flex-col md:flex-row justify-between border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
              <div style={{ flex: "1 1 0%" }}>
                <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                  {project.name}
                </h1>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                  {project.description}
                </p>
                <div className="flex gap-1">
                  <KBD names={project.techStack} />
                </div>
              </div>
              <div style={{ flex: "1 1 0%" }}>
                <img
                  className="h-full w-full"
                  src={project.image}
                  alt="Projects"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
