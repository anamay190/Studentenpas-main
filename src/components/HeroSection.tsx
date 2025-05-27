import React from 'react';
import { Globe, Rocket } from 'lucide-react';
import StatCounter from './StatCounter';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-black pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Lorem ipsum dolor sit amet <br />
              Imperdiet cursus at eget purus
            </h1>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur. Eleifend molestie eu arcu consequat at vestibulum. 
              Etiam elementum nullam quis nulla diam ac
            </p>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md text-lg transition hover:shadow-lg"
            >
              Get Your Admission Now
            </a>
          </div>

          {/* Right Content - Student Image */}
          <div className="lg:w-1/2 flex justify-center relative">
            <img
              src="/hero-girl.png" // Replace this with your actual image path
              alt="Happy student"
              className="w-[300px] md:w-[350px] rounded-2xl shadow-xl z-10"
            />
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 right-1/4 opacity-70 animate-pulse">
          <Globe size={60} className="text-blue-400" />
        </div>
        <div className="absolute bottom-36 left-10 opacity-70 animate-bounce z-10">
          <Rocket size={50} className="text-purple-400" />
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-900 rounded-xl py-10 px-6 grid grid-cols-2 md:grid-cols-4 text-center text-white gap-6 shadow-inner border border-gray-800">
          <StatCounter value={98} label="Admission Success Rate" suffix="%" />
          <StatCounter value={98} label="Career Counselling" suffix="%" />
          <StatCounter value={30000} label="Happy Customer" />
          <StatCounter value={75} label="Free Health Camps" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
