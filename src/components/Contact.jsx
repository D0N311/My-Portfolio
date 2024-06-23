import phoneIcon from "../assets/phoneIcon.svg";
import github from "../assets/github.svg";
import linkedIn from "../assets/linkedIn.svg";
import figmaIcon from "../assets/figmaIcon.svg";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  const [email] = useState("lorencepalisan2@gmail.com");
  const [phone] = useState("+63 9282219343");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (textToCopy, type) => {
    navigator.clipboard.writeText(textToCopy);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 1000);
    } else if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 1000);
    }
  };

  return (
    <section
      id="Contact"
      className="flex flex-col items-center bg-gray-50 pb-10  dark:bg-gray-900 justify-center font-roboto-slab bg-custom-blue"
    >
      <h2 className="text-4xl font-bold text-center text-white font-roboto-slab">
        Contacts
      </h2>
      <div className="text-center text-white px-2.5 ">
        <h3 className="mt-10 md:text-l xl:text-xl font-inter">
          Feel free to reach out to me if you're looking for a developer,{" "}
        </h3>
        <h3 className="xl:text-xl md:text- font-inter">
          have a query, or simply want to connect.{" "}
        </h3>

        <div className="text-xl xl:text-3xl">
          <div className="flex items-center justify-center mt-5">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="mx-2">{email}</p>
            <FontAwesomeIcon
              icon={faCopy}
              onClick={() => copyToClipboard(email, "email")}
              className="cursor-pointer"
            />
            {copiedEmail && (
              <span className="ml-2 text-green-500">Copied!</span>
            )}
          </div>
          <div className="flex items-center justify-center mt-1">
            <img
              src={phoneIcon}
              className="w-6 h-6 xl:w-auto xl:h-auto"
              alt="logo"
            />
            <p className="mx-2">{phone}</p>
            <FontAwesomeIcon
              icon={faCopy}
              onClick={() => copyToClipboard(phone, "phone")}
              className="cursor-pointer"
            />
            {copiedPhone && (
              <span className="ml-2 text-green-500">Copied!</span>
            )}
          </div>
        </div>

        <div className="mt-10 text-s">
          <p>You may also find me on these platforms!</p>

          <div className="flex items-center justify-center">
            <img
              src={github}
              alt="logo"
              className="mx-2 cursor-pointer"
              onClick={() =>
                window.open("https://github.com/LorencePalisan", "_blank")
              }
            />
            <img
              src={linkedIn}
              alt="logo"
              className="mx-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/lorencepalisan",
                  "_blank"
                )
              }
            />
            <img
              src={figmaIcon}
              alt="logo"
              className="mx-2 cursor-pointer"
              onClick={() =>
                window.open("https://www.figma.com/@LorencePalisan", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
