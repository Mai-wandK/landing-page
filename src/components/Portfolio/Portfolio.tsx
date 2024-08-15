import React, { useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('General Repairs');

  const sections = {
    'Custom Services': [
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Lorem Ipsum Dolor',
        category: 'Custom Services',
      },
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Sed Ut Perspiciatis',
        category: 'Custom Services',
      },
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Nemo Enim Ipsam',
        category: 'Custom Services',
      },
    ],
    'General Repairs': [
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Quis Nostrum Exercitationem',
        category: 'General Repairs',
      },
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Reprehenderit Qui',
        category: 'General Repairs',
      },
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Voluptate Velit Esse',
        category: 'General Repairs',
      },
    ],
    'Maintenance': [
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Doloremque Laudantium',
        category: 'Maintenance',
      },
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Totam Rem Aperiam',
        category: 'Maintenance',
      },
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Eaque Ipsa Quae',
        category: 'Maintenance',
      },
    ],
    'Diagnostics': [
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Inventore Veritatis',
        category: 'Diagnostics',
      },
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Architecto Beatae Vitae',
        category: 'Diagnostics',
      },
      {
        imgSrc: 'https://via.placeholder.com/400',
        title: 'Dicta Sunt Explicabo',
        category: 'Diagnostics',
      },
    ],
  };

  return (
    <section className="bg-gray-100 dark:bg-black dark:text-white" data-aos="fade-up">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif">Portfolio</h1>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Table of Content</h1>

            <div className="mt-4 space-y-4 lg:mt-8">
              {Object.keys(sections).map((section) => (
                <div
                  key={section}
                  className={`block p-4 rounded-lg ${activeSection === section ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'} hover:bg-primary hover:text-white transition cursor-pointer`}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {sections[activeSection].map((item, index) => (
                <div key={index}>
                  <img className="object-cover w-full rounded-lg h-96" src={item.imgSrc} alt={item.title} />
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-gray-100">{item.title}</h2>
                  <p className="mt-2 text-lg tracking-wider text-primary uppercase dark:text-primary">{item.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
