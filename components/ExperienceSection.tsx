import React from "react";

const experiences = [
  {
    from: "May 2025",
    to: "August 2025",
    title: "ML Researcher ",
    company: "Aresty Research Center",
    description:
      "Developing predictive ML models using 50,000+ satellite and glider samples at Rutgers Artificial Intelligence and Data Science Lab (RAD), implementing 9+ algorithms including ResNet, CNN, XGBoost to optimize F1 score and ROC-AUC for marine mammal detection. Engineered comprehensive ML pipeline using PyTorch, TensorFlow, and scikit-learn with stratified sampling, SMOTE oversampling, and 10-fold cross-validation to handle imbalanced datasets and spatial autocorrelation challenges. Designed statistical models incorporating 10+ oceanographic variables (depth, salinity, temperature, chlorophyll-a, SST) to assess biodiversity-economic tradeoffs using satellite and autonomous glider sensor data. Reviewing academic papers weekly to enhance model architecture and ecological understanding, adding 2+ variables to current dataset and performing preprocessing on 42,000 raw samples with strategic missing data imputation",
  },
  {
    from: "June 2024",
    to: "May 2025",
    title: "Software Engineer ",
    company: "VR Brothers LLC",
    description:
      "Built an autonomous vendor monitoring system tracking 25+ suppliers using BeautifulSoup web scrapers and SQLAlchemy data pipelines. Assisted in building AI scanning system using C++ that auto-generated invoices in QuickBooks, reducing processing time by 70%. Assisted in building route optimizer using Python and optimization libraries targeting 10–15% delivery cost reduction.",
  },
  {
    from: "August 2024",
    to: "March 2025",
    title: "Software Developer",
    company: "HackRU",
    description:
      "Implemented 5+ UI components for a platform serving 450+ registered users. Resolved 2+ frontend bugs, enhancing overall user experience. Developed an interactive dashboard using Flask, MongoDB and React to visualize and analyze data for 450+ registered users, incorporating data-driven insights through dynamic graphs and visualizations.",
  },
  {
    from: "January 2024",
    to: "May 2024",
    title: "AI Engineering Intern",
    company: "OurDate",
    description:
      "Helped develop and test AI-driver features that improve user experience and engagement on the platform. Worked with product engineering and design team to build an application. Designed questions and inputs to teach AI models, helping them generate accurate and relevant responses.",
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
