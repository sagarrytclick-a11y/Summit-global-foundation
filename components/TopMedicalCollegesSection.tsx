"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaGraduationCap, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

interface CollegeItem {
  name: string;
  image: string;
  city: string;
  id: number;
  type?: string;
}

interface StateItem {
  name: string;
  image: string;
  description: string;
  colleges: CollegeItem[];
}

const TopMedicalCollegesSection: React.FC = () => {
  const [allColleges, setAllColleges] = useState<CollegeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'Government' | 'Private'>('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/mbbs-india.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        const colleges: CollegeItem[] = data.states.flatMap((state: StateItem) =>
          (state.colleges || []).map((c: any) => ({
            name: c.name,
            image: c.image || '/medical.png',
            city: c.city || '',
            id: c.id,
            type: c.type || 'Private',
          }))
        );
        setAllColleges(colleges);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getCollegeSlug = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  const filteredColleges = filter === 'all' ? allColleges : allColleges.filter(c => c.type === filter);
  const displayColleges = filteredColleges.slice(0, 18);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f59e0b] mx-auto" />
          <p className="text-gray-500 font-medium mt-4">Loading colleges...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 mb-6">
            <FaGraduationCap className="text-[#f59e0b] text-sm" />
            <span className="text-[#f59e0b] text-xs font-bold tracking-[2px] uppercase">
              MBBS IN INDIA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Top Medical Colleges in India
          </h2>

          <p className="mt-4 text-gray-500 text-base lg:text-lg leading-relaxed">
            Browse top government and private medical colleges with detailed fees, eligibility, and admission information.
          </p>
        </div>

        {/* FILTER PILLS */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {(['all', 'Government', 'Private'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                filter === type
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              {type === 'all' ? 'All Colleges' : `${type} Colleges`}
            </button>
          ))}
        </div>

        {/* COLLEGE CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayColleges.map((college, i) => (
            <Link
              key={college.id || i}
              href={`/colleges/${getCollegeSlug(college.name)}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-[180px] overflow-hidden">
                <img src={college.image} alt={college.name} loading="lazy" decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-[10px] font-bold tracking-wider text-[#f59e0b] uppercase">MBBS INDIA</span>
                </div>
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <FaExternalLinkAlt className="text-gray-500 text-xs" />
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 leading-snug">{college.name}</h4>
                <div className="flex items-center gap-1.5 text-gray-400 mb-3">
                  <FaMapMarkerAlt className="text-[#f59e0b] text-xs" />
                  <span className="text-xs">{college.city}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      college.type === 'Government'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {college.type || 'Private'}
                  </span>
                  <span className="text-xs font-bold text-[#f59e0b] uppercase tracking-wide group-hover:underline">
                    VIEW DETAILS
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM LINK */}
        <div className="text-center mt-10">
          <Link href="/colleges/mbbs-india"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-800 transition-all">
            View All MBBS Colleges in India
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopMedicalCollegesSection;
