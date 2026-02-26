import React from "react";
import TrainingImg from "../images/intern.jpg"; // pastikan gambar ada dalam folder images

function Introduction() {
  const importancePoints = [
    {
      title: "Professional Networking",
      desc: "Industrial training provides opportunities to build professional networks, connect with industry experts, and establish relationships that can benefit participants throughout their careers."
    },
    {
      title: "Enhanced Employability",
      desc: "Participants gain practical skills and industry knowledge that make them more attractive to potential employers, increasing their chances of securing a job."
    },
    {
      title: "Confidence Building",
      desc: "By successfully completing real-world projects and overcoming challenges, participants build confidence in their abilities, which is essential for their professional development."
    },
    {
      title: "Career Clarity",
      desc: "It helps participants gain clarity about their career goals and interests by exposing them to various aspects of their chosen industry, allowing them to make informed career decisions."
    },
  ];

  return (
    <section className="flex flex-col items-center px-6 py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50 min-h-[calc(100vh-64px)]">

      {/* BLUR BACKGROUND */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl">
        <h1 className="text-2xl md:text-5xl font-extrabold text-purple-700 mb-20 text-center drop-shadow-lg">
          Introduction to Industrial Training
        </h1>
        <p className="text-gray-700 text-xl md:text-base">
          Understanding the concept, objectives, and importance of Industrial Training for students and professionals.
        </p>
      </div>

      {/* Grid Layout: Image + Text */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full mb-16 items-center">

        {/* Image */}
        <div className="order-last md:order-first">
          <img 
            src={TrainingImg} 
            alt="Industrial Training" 
            className="rounded-3xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-8 text-gray-700">
          
          {/* What is Industrial Training */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">What is Industrial Training?</h2>
            <p className="text-sm md:text-base">
              Industrial training is a program designed to provide participants with practical experience and a comprehensive understanding of their chosen industry. 
              It bridges the gap between theoretical education and real-world application, enabling participants to apply their academic knowledge in a professional environment.
              This training is crucial for students and professionals aiming to enhance their skills, gain hands-on experience, and prepare for a successful career in their respective fields.
            </p>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">Objectives of Industrial Training</h2>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
              <li>Gain practical experience in a real industry environment.</li>
              <li>Apply academic knowledge to solve professional tasks.</li>
              <li>Develop soft skills such as communication and teamwork.</li>
              <li>Understand company workflow, processes, and culture.</li>
              <li>Prepare for a professional career after graduation.</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Importance Section – Card Style */}
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-8 text-center">
          The Importance of Industrial Training
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {importancePoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-6 hover:scale-105 transition-transform duration-500"
            >
              <h3 className="text-xl font-bold text-purple-700 mb-2">{point.title}</h3>
              <p className="text-gray-700 text-sm md:text-base">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Introduction;