import React, { useState } from "react";
import type { Route } from "./+types/countries";
import { Link } from "react-router"; // Corrected import

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return <div className="text-center text-lg text-gray-600">Loading...</div>;
}

const Countries = ({ loaderData }: Route.ComponentProps) => {
  const [search, setSearch] = useState<string>("");
  const [Region, setRegion] = useState<string>("");

  const filterSearch = loaderData.filter((country: any) => {
    const matchesSearch =
      search === "" ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion =
      Region === "" ||
      country.region.toLowerCase().includes(Region.toLowerCase());

    return matchesSearch && matchesRegion; // Return the filtered result
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Countries
      </h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Region Filter */}
        <select
          value={Region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full md:w-1/3 p-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Regions</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* Conditional Rendering for Empty Filter */}
      {filterSearch.length === 0 ? (
        <div>No country matches your filter</div>
      ) : (
        // Country List Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterSearch.map((country: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50 transition duration-300"
            >
              <Link
                to={`/countries/${encodeURIComponent(country.name.common)}`}
                className="text-2xl font-semibold text-blue-600 hover:text-blue-800 hover:underline"
              >
                {country.name.common}
              </Link>
              <p className="mt-2 text-gray-700">
                <strong className="font-semibold">Region:</strong>{" "}
                {country.region} |{" "}
                <strong className="font-semibold">Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
