import Profile from "../assets/profile.svg";
import Grid from "./Grid";

export default function AboutMe() {
  return (
    <>
      <section id="AboutMe" className="bg-gray-50 pb-10  dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Hello I'm
            </p>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Lorence S. Palisan
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              a fresh graduate from STI College CDO, holding a Bachelor of
              Science in Information Technology. I have a background in web
              development, database management, and cybersecurity.
            </p>
          </div>
          <div>
            <div className="w-full lg:max-w-xl p-6 rounded-full flex justify-center space-y-8 sm:p-8 bg-white  shadow-xl dark:bg-gray-800 ">
              <img
                className="w-full h-3/4 rounded-full"
                src={Profile}
                alt="My Picture"
              />
            </div>
          </div>
        </div>

        <Grid />
      </section>
    </>
  );
}
