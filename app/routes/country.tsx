import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data = await res.json();
  return data;
}

const Country = ({ loaderData }: Route.ComponentProps) => {
  const country = {
    name: loaderData[0]?.name?.common || "N/A",
    officialName: loaderData[0]?.name?.official || "N/A",
    region: loaderData[0]?.region || "N/A",
    subRegion: loaderData[0]?.subregion || "N/A",
    capital: loaderData[0]?.capital?.[0] || "N/A",
    population: loaderData[0]?.population.toLocaleString() || "N/A",
    flagUrl: loaderData[0]?.flags?.png || "",
    startOfWeek: loaderData[0]?.startOfWeek || "N/A",
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Country Flag */}
      <div className="flex justify-center mb-6">
        <img
          src={country.flagUrl}
          alt={`${country.name} Flag`}
          className="w-48 h-32 object-cover rounded-md shadow-md"
        />
      </div>

      {/* Country Details */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        {country.name}
      </h1>
      <h2 className="text-lg text-center text-gray-600 mb-8">
        Official Name: <span className="font-semibold">{country.officialName}</span>
      </h2>

      {/* Information Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-4 border-l-4 border-blue-500 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Region</h3>
          <p className="text-gray-600">{country.region}</p>
        </div>
        <div className="p-4 border-l-4 border-green-500 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Subregion</h3>
          <p className="text-gray-600">{country.subRegion}</p>
        </div>
        <div className="p-4 border-l-4 border-purple-500 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Capital</h3>
          <p className="text-gray-600">{country.capital}</p>
        </div>
        <div className="p-4 border-l-4 border-red-500 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Population</h3>
          <p className="text-gray-600">{country.population}</p>
        </div>
        <div className="p-4 border-l-4 border-indigo-500 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Start of Week</h3>
          <p className="text-gray-600 capitalize">{country.startOfWeek}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
