import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Country Explorer" },
    {
      name: "Here you can explore all the country from everywhere",
      content: "Welcome to Country Explorer!",
    },
  ];
}

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Main Container */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Explore Countries with{" "}
            <span className="text-blue-600">Real-Time Data</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Discover details about every country around the world—from capitals
            to regions!
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Link
              to="/countries"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Explore Now
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/premium-photo/world-tourism-day-background_970980-703.jpg?w=1060"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
