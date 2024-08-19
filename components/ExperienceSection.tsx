import React from "react";

const experiences = [
  {
    from: "January 2024",
    to: "May 2024",
    title: "Software Engineering Intern",
    company: "OurDate",
    description:
      "Helped develop and test AI-driver features that improve user experience and engagement on the platform. Worked with product engineering and design team to build an application. Designed questions and inputs to teach AI models, helping them generate accurate and relevant responses.",
  },
  {
    from: "June 2024",
    to: "August 2024",
    title: "Software Developer Intern",
    company: "VR Brothers LLC",
    description:
      "Contributed to the development of a accounting software for the company which consisted of tracking finances, invoices, orders and payments. Assisted in developing the front-end using Vite, React.js, and Material UI. Assisted in developing the back-end using Node.js, Express.js and MongoDB (for database schema and queries).",
  },

];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="my-10 text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h2>
        <div className="flex flex-col space-y-8 dark">
          {experiences.map((exp, index) => (
            <div key={index} className=" p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-sm text-neutral-400 mb-2">
                {exp.company} - {exp.from} to {exp.to}
              </p>
              <p className="text-neutral-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
