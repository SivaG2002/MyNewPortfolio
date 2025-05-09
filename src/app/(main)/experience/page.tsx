import React from 'react';

const ExperiencePage = () => {
  const experienceEntries = [
    {
      title: "Data Scientist Intern",
      company: "Luminar Technolab",
      location: "Kochi",
      duration: "May 2024 - Dec 2024",
      description: "Gained hands-on experience in data analysis, machine learning model development, and data visualization."
    },
    {
      title: "AI Engineer",
      company: "Ombrulla",
      location: "Kochi",
      duration: "Dec 2024 - Present",
      description: "Working on developing and implementing AI solutions, focusing on [mention specific areas if possible, e.g., natural language processing, computer vision]."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Experience Roadmap</h1>

      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {experienceEntries.map((entry, index) => (
          <div key={index} className="mb-8 ml-6">
            <span className="absolute -left-3 flex justify-center items-center w-6 h-6 rounded-full bg-blue-500 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-2.5 h-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1H8V1a1 1 0 0 0-2 0v1H4a2 2 0 0 0-2 2v2h16V4ZM2 8h16v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8Zm7 7H5a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm5 0h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Z"/>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {entry.title} at {entry.company}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {entry.duration} - {entry.location}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;