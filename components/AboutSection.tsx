import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "HTML/CSS" },
  { skill: "React.js" },
  { skill: "Node.js/Express" },
  { skill: "Express.js" },
  { skill: "Next.js" },
  { skill: "Django" },
  { skill: "Tailwind CSS" },
  { skill: "Chakra UI" },
  { skill: "Material UI" },
  { skill: "MongoDB" },
  { skill: "PostgreSQL" },
  { skill: "Firebase" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Het and I am a{" "}
              Computer Science/Data
              Science student based in Monroe Township, NJ.
            </p>
            <br />
            <p>
            I expect to graduate from Rutgers University-New Brunswick in
              December 2026 with a Bachelors of Science in Computer Science and Data Science. I
              aspire to explore the realms of Software Engineering.
            </p>
            <br />
            <p>
            I believe that you should{" "}
              <span className="font-bold text-teal-500">never stop growing</span>{" "}
              and that&#39;s what I strive to do. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero.jpeg"
              alt=""
              width={250}
              height={250}
              className="hidden md:block md:relative md:bottom md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
