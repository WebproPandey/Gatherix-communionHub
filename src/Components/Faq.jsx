import React, { useState } from "react";

const faqData = [
  {
    category: "Community Gatherings",
    questions: [
      {
        question: "What are community gatherings?",
        answer:
          "Community gatherings are events where people come together to share experiences, celebrate, and support each other.",
      },
      {
        question: "How can I join a community event?",
        answer:
          "You can find upcoming events in your area through our platform and register online to participate.",
      },
    ],
  },
  {
    category: "Faith-Based Events",
    questions: [
      {
        question: "What types of faith-based events are organized?",
        answer:
          "Our platform hosts prayer meetings, interfaith discussions, and spiritual workshops to help connect people through faith.",
      },
      {
        question: "Do I need to follow a specific religion to participate?",
        answer:
          "No, all faith-based events are open to everyone, regardless of their beliefs.",
      },
    ],
  },
  {
    category: "Charity & Volunteer Drives",
    questions: [
      {
        question: "How can I volunteer for charity events?",
        answer:
          "You can sign up for upcoming charity events and contribute your time or resources to meaningful causes.",
      },
      {
        question: "Are donations mandatory for participation?",
        answer:
          "No, participation is free, but donations are always welcome to support the initiatives.",
      },
    ],
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-[4vw] md:text-3xl font-semibold text-center mb-6 text-white">Frequently Asked Questions</h2>
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h3 className="text-[4vw] md:text-2xl font-semibold text-white mb-4">{section.category}</h3>
          <div className="space-y-4">
            {section.questions.map((item, index) => {
              const isOpen = openIndex === `${sectionIndex}-${index}`;
              return (
                <div key={index} className="border border-gray-300 rounded-lg">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left text-[3vw] md:text-lg font-medium text-white hover:bg-black/30 transition"
                    onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}
                  >
                    {item.question}
                    <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-gray-50 text-gray-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
