"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGlobeAsia,
  FaUniversity,
} from "react-icons/fa";

interface CountryItem {
  id: number;
  name: string;
  flag: string;
  image: string;
  description: string;
  universities: number;
  courses: string;
}

const TopCountriesSection: React.FC = () => {
  const [countries, setCountries] = React.useState<CountryItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("/mbbs-abroad.json");
        if (!response.ok) throw new Error("Failed to fetch country data");
        const data = await response.json();
        const transformedCountries: CountryItem[] = data.countries.map((country: any) => ({
          id: country.id,
          name: country.name,
          flag: country.flag,
          image: country.image,
          description: country.description,
          universities: country.universities,
          courses: country.courses,
        }));
        setCountries(transformedCountries);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load country data");
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const getCountrySlug = (countryName: string): string => {
    return countryName.toLowerCase().replace(/\s+/g, "-");
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block h-12 w-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin mx-auto"></div>
          <h2 className="text-4xl font-black text-gray-900 mt-4">Loading Countries...</h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Something Went Wrong</h2>
          <p className="text-red-500 font-medium">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-sky-100 blur-3xl opacity-40 rounded-lg pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <FaGlobeAsia className="text-blue-600 text-sm" />
            <span className="text-blue-700 text-xs font-bold tracking-[2px] uppercase">
              Global MBBS Destinations
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Top Countries For
            <span className="text-blue-600"> MBBS Abroad</span>
          </h2>

          <p className="mt-5 text-gray-500 text-base lg:text-lg leading-relaxed">
            Explore world-class medical universities with affordable tuition
            fees, global recognition, and outstanding career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Link href={`/country/${getCountrySlug(country.name)}`} className="group block h-full">
                <div className="relative h-full bg-white border border-gray-200 rounded-[32px] overflow-hidden hover:border-amber-200 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 rounded-full" />

                  <div className="relative h-[240px] overflow-hidden">
                    <img src={country.image} alt={country.name} loading="lazy" decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-sm">
                      <div className="flex items-center gap-2">
                        <FaUniversity className="text-blue-600 text-xs" />
                        <span className="text-xs font-bold text-gray-800">
                          {country.universities} Universities
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <img src={country.flag} alt={country.name} loading="lazy" decoding="async"
                        className="w-10 h-7 rounded-md object-cover border border-white/20 shadow-md" />
                      <h3 className="text-2xl font-black text-white drop-shadow-lg">
                        {country.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col">
                    <p className="text-gray-500 leading-7 text-sm font-medium">
                      {country.description}
                    </p>

                    <div className="mt-5">
                      <span className="inline-flex items-center bg-blue-50 text-blue-700 text-xs font-bold px-4 py-2 rounded-xl border border-blue-100">
                        {country.courses}
                      </span>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                      <span className="text-gray-900 font-black text-sm">
                        View Country
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 flex items-center justify-center transition-all duration-300">
                        <FaArrowRight className="text-gray-500 group-hover:text-white transition-colors duration-300 text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/colleges/mbbs-abroad"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-14 px-8 rounded-xl font-bold text-sm shadow-lg hover:shadow-blue-600/20 hover:scale-[1.03] transition-all duration-300">
            View All Countries
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCountriesSection;
