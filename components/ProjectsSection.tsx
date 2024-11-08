import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "ClientSync",
    description:
      "ClientSync is a CRM with predictive analytics, using machine learning algorithms like K-means clustering, Random Forest, Gradient Boosting, and sentiment analysis for advanced customer insights. ClientSync is a responsive website with full user authentication, including signup, login, password recovery, a page for contact storage, email integration, and a dashboard with advanced data visualizations",
    image: "/clientSync.png",
    github: "https://github.com/Hetp29/HackRUFall2024Final",
  },
  {
    name: "NutriPal",
    description:
      "NutriPal is a nutrition tracking tool that helps users manage their daily dietary goals by logging meals and providing personalized advice generated by GPT-4. Built with Flask, Python, and Tailwind, it integrates APIs for nutritional data and custom prompts, and uses Firebase for authentication, winning HackRU’s Spring 2024 hackathon in the health track.",
    image: "/nutripal.png",
    github: "https://github.com/Dhruvedd/Nutripal",
  },
  {
    name: "Amazon Deal Finder",
    description: 
      "Developed a web application that tracks and displays best Amazon deals of the day using React for front end and Node.js/Express for back end. Integrated Oxylabs Crawler API to scrape real-time data on Amazon deals.",
    image: "/amazon.png",
    github: "https://github.com/Hetp29/amazon-deal-tracker",
  },
  {
    name: "Object Detection App",
    description:
      "Image detection tool developed for identifying objects within images. Users can upload images, and the platform utilizes TensorFlow's COCO-SSD model to detect objects, displaying bounding boxes around detected items with their respective labels and confidence scores. I used ReactJS for the UI.",
    image: "/objectDetection.png",
    github: "https://github.com/Hetp29/TensorflowImageRecognition",
  },
  {
    name: "QuantTrade AI",
    description:
      "QuantTrade AI is a stock predicting simulator which incorporates multiple stock trading strategies such as mean reversion, moving average crossover, RSI, LSTM, DQN (Reinforcement Learning) and Sentiment Analysis to optimize trading. It also retrieved the data for over 500 stock tickers to inform trading strategies.",
    image: "/stockPrediction.png",
    github: "https://github.com/Hetp29/TradingAlgo"
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-16 md:space-y-24">
        {projects.map((project, idx) => (
          <SlideUp key={idx} offset="-300px 0px -300px 0px">
            <div className="flex flex-col md:flex-row md:space-x-12 items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1000}
                  height={600}
                  className="rounded-xl shadow-xl hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
                <p className="text-lg leading-6 mb-6 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <BsGithub
                      size={30}
                      className="hover:text-teal-500 transition-colors cursor-pointer"
                    />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:text-teal-500 transition-colors cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
