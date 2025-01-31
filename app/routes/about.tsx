import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="text-lg text-gray-600 mt-2">
          Learn more about our mission, vision, and what we do.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600">
            Country Explorer is designed to help users explore detailed
            information about countries worldwide. From capitals and populations
            to regions and flags, we bring **real-time country data** to your
            fingertips.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Real-time country data.</li>
            <li>Easy-to-use interface.</li>
            <li>Interactive search and filter options.</li>
            <li>Fast and responsive design.</li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="https://cdnwebsite.databox.com/wp-content/uploads/2020/12/01062702/about-us-page-examples.png"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          Start Exploring Now!
        </h3>
        <p className="text-gray-600 mt-2">
          Discover facts, flags, and regions of every country.
        </p>
      </div>
    </div>
  );
};

export default About;
