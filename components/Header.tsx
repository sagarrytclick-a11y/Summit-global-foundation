'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
  FaChevronRight,
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaExternalLinkAlt,
  FaArrowRight,
  FaSlidersH,
  FaSearch,
} from 'react-icons/fa';

import { usePopup } from '../contexts/PopupContext';
import { SITE_IDENTITY } from '../app/config/site_identity';
import Logo from './Logo';

interface College {
  id: number;
  name: string;
  city: string;
  image: string;
  fees?: string;
  type?: string;
}

interface State {
  id: number;
  name: string;
  slug?: string;
  image: string;
  description: string;
  colleges: College[];
}

interface Country {
  id: number;
  name: string;
  flag: string;
  image: string;
  description: string;
  universities: number;
  courses: string;
  colleges: College[];
}

const mdMsAbbreviations: Record<string, string> = {
  'Uttar Pradesh': 'UP',
  'Karnataka': 'KA',
  'Haryana': 'HR',
  'Madhya Pradesh': 'MP',
  'Chhattisgarh': 'CG',
  'Rajasthan': 'RJ',
  'Maharashtra': 'MH',
  'Uttarakhand': 'UK',
  'Tamil Nadu': 'TN',
};

const Header = () => {
  const { openPopup } = usePopup();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string>('');
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);

  const [indiaStates, setIndiaStates] = useState<State[]>([]);
  const [indiaFilterState, setIndiaFilterState] = useState('');
  const [abroadCountries, setAbroadCountries] = useState<Country[]>([]);
  const [mdmsStates, setMdmsStates] = useState<State[]>([]);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'MBBS India', href: '/colleges/mbbs-india', hasDropdown: true },
    { name: 'MBBS Abroad', href: '/colleges/mbbs-abroad', hasDropdown: true },
    { name: 'MD/MS', href: '/colleges/md-ms', hasDropdown: true },
    { name: 'NEET Predictor', href: '/neet-rank-predictor' },
    { name: 'Contact', href: '/contact' },
  ];

  const fetchData = async (type: 'india' | 'abroad' | 'mdms') => {
    try {
      const url = type === 'india' ? '/mbbs-india.json' : type === 'abroad' ? '/mbbs-abroad.json' : '/md-ms.json';
      const res = await fetch(url);
      const data = await res.json();
      if (type === 'india') setIndiaStates(data.states);
      else if (type === 'abroad') setAbroadCountries(data.countries);
      else setMdmsStates(data.states);
    } catch (err) {
      console.error(err);
    }
  };

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
    setHoveredItem('');
    if (name === 'MBBS India' && indiaStates.length === 0) fetchData('india');
    if (name === 'MBBS Abroad' && abroadCountries.length === 0) fetchData('abroad');
    if (name === 'MD/MS' && mdmsStates.length === 0) fetchData('mdms');
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem('');
    }, 150);
  };

  const toggleMobileItem = (itemName: string) => {
    if (itemName === 'MBBS Abroad' && abroadCountries.length === 0) fetchData('abroad');
    if (itemName === 'MBBS India' && indiaStates.length === 0) fetchData('india');
    if (itemName === 'MD/MS' && mdmsStates.length === 0) fetchData('mdms');
    setExpandedMobileItems(prev =>
      prev.includes(itemName) ? prev.filter(item => item !== itemName) : [...prev, itemName]
    );
  };

  const getStateSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

  const getCollegeSlug = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  const getActiveIndiaState = () => {
    if (hoveredItem) return indiaStates.find(s => s.name === hoveredItem);
    return indiaStates[0];
  };

  const getActiveAbroadCountry = () => {
    if (hoveredItem) return abroadCountries.find(c => c.name === hoveredItem);
    return abroadCountries[0];
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="bg-[#0F172A] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={SITE_IDENTITY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer text-[15px]" /></a>
            <a href={SITE_IDENTITY.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer text-[15px]" /></a>
            <a href={SITE_IDENTITY.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer text-[15px]" /></a>
            <a href={SITE_IDENTITY.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg className="w-[15px] h-[15px] text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href={`tel:${SITE_IDENTITY.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center text-[14px] font-medium text-gray-300 hover:text-white transition-all">
              <FaPhoneAlt className="mr-2 text-sky-400" />
              {SITE_IDENTITY.contact.phone}
            </a>
            <a href={`mailto:${SITE_IDENTITY.contact.email}`} className="flex items-center text-[14px] font-medium text-gray-300 hover:text-white transition-all">
              <FaEnvelope className="mr-2 text-sky-400" />
              {SITE_IDENTITY.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1400px] mx-auto px-4 h-[88px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="h-14 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center group"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.hasDropdown ? (
                  <div className={`relative flex items-center text-[15px] font-semibold transition-all duration-300 cursor-pointer ${activeDropdown === item.name ? 'text-[#f59e0b]' : 'text-gray-700 hover:text-[#f59e0b]'}`}>
                    {item.name}
                    <FaChevronDown className="ml-2 text-[10px]" />
                  </div>
                ) : item.name === 'NEET Predictor' ? (
                  <Link
                    href={item.href}
                    className={`relative flex items-center text-[15px] font-semibold transition-all duration-300 rounded-lg px-4 py-2 ${
                      pathname.startsWith('/neet-rank-predictor')
                        ? 'bg-[#f59e0b] text-[#0b0e24] shadow-lg shadow-[#f59e0b]/30'
                        : 'bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20 hover:bg-[#f59e0b] hover:text-[#0b0e24]'
                    }`}
                  >
                    {item.name}
                    <span className="ml-2 px-1.5 py-0.5 rounded-md bg-red-500 text-white text-[10px] font-bold leading-none tracking-wide">LIVE</span>
                  </Link>
                ) : (
                  <Link href={item.href} className={`relative flex items-center text-[15px] font-semibold transition-all duration-300 ${activeDropdown === item.name ? 'text-[#f59e0b]' : 'text-gray-700 hover:text-[#f59e0b]'}`}>
                    {item.name}
                  </Link>
                )}

                {/* ========== MBBS INDIA MEGA MENU ========== */}
                <AnimatePresence>
                  {activeDropdown === 'MBBS India' && item.name === 'MBBS India' && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.22 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-[2px] z-[999] w-[820px]"
                      onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">
                        {/* HEADER */}
                        <div className="bg-gradient-to-r from-[#0b0e24] via-[#141838] to-[#1e2259] px-6 py-5 flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-bold text-lg">MBBS in India</h3>
                            <p className="text-white/50 text-sm mt-0.5">Top medical colleges, NEET counselling, fees & admission guidance.</p>
                          </div>
                          <Link href="/colleges/mbbs-india" className="flex-shrink-0 bg-[#f59e0b] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#d97706] transition-all flex items-center gap-2">
                            ALL COLLEGES
                            <FaExternalLinkAlt className="text-[10px]" />
                          </Link>
                        </div>

                        {/* BODY: College grid with state filter */}
                        <div className="bg-white max-h-[420px] overflow-y-auto">
                          {/* State Filter Pills */}
                          <div className="sticky top-0 bg-white z-10 border-b border-gray-100 px-5 py-3">
                            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
                              <button onClick={() => setIndiaFilterState('')}
                                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${indiaFilterState === '' ? 'bg-[#1e2259] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                All States
                              </button>
                              {indiaStates.map((s) => (
                                <button key={s.id} onClick={() => setIndiaFilterState(s.name)}
                                  className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${indiaFilterState === s.name ? 'bg-[#1e2259] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                  {s.name}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* College Grid */}
                          <div className="p-5">
                            {(() => {
                              const allColleges = indiaStates.flatMap(s =>
                                !indiaFilterState || s.name === indiaFilterState ? s.colleges : []
                              );
                              const govtColleges = allColleges.filter(c => c.type === 'Government').slice(0, 18);
                              const privateColleges = allColleges.filter(c => c.type === 'Private').slice(0, 18);
                              if (govtColleges.length === 0 && privateColleges.length === 0) {
                                return <p className="text-sm text-gray-400 text-center py-8">No colleges found for this state.</p>;
                              }
                              return (
                                <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                                  <div>
                                    <div className="text-xs font-bold text-green-600 mb-2 border-b border-green-100 pb-1">GOVERNMENT COLLEGES</div>
                                    {govtColleges.length === 0 ? (
                                      <p className="text-xs text-gray-400 py-4">No government colleges</p>
                                    ) : (
                                      govtColleges.map((college) => (
                                        <Link key={college.id} href={`/colleges/${getCollegeSlug(college.name)}`} className="group/col flex items-start justify-between py-1.5 hover:bg-gray-50 rounded px-2 -mx-2 transition-all">
                                          <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-gray-800 group-hover/col:text-[#f59e0b] transition-colors leading-snug truncate">{college.name}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{college.city}</p>
                                          </div>
                                          <FaExternalLinkAlt className="text-[10px] text-gray-300 mt-1 flex-shrink-0 ml-2 group-hover/col:text-[#f59e0b] transition-colors" />
                                        </Link>
                                      ))
                                    )}
                                  </div>
                                  <div>
                                    <div className="text-xs font-bold text-purple-600 mb-2 border-b border-purple-100 pb-1">PRIVATE COLLEGES</div>
                                    {privateColleges.length === 0 ? (
                                      <p className="text-xs text-gray-400 py-4">No private colleges</p>
                                    ) : (
                                      privateColleges.map((college) => (
                                        <Link key={college.id} href={`/colleges/${getCollegeSlug(college.name)}`} className="group/col flex items-start justify-between py-1.5 hover:bg-gray-50 rounded px-2 -mx-2 transition-all">
                                          <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-gray-800 group-hover/col:text-[#f59e0b] transition-colors leading-snug truncate">{college.name}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{college.city}</p>
                                          </div>
                                          <FaExternalLinkAlt className="text-[10px] text-gray-300 mt-1 flex-shrink-0 ml-2 group-hover/col:text-[#f59e0b] transition-colors" />
                                        </Link>
                                      ))
                                    )}
                                  </div>
                                </div>
                              );
                            })()}
                          </div>
                        </div>

                        {/* FOOTER */}
                        <div className="border-t border-gray-100 bg-white px-6 py-3 text-right">
                          <Link href="/colleges/mbbs-india" className="text-sm font-bold text-gray-700 hover:text-[#f59e0b] transition-colors flex items-center justify-end gap-1">
                            View all India colleges <FaArrowRight className="text-[10px]" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ========== MBBS ABROAD MEGA MENU ========== */}
                <AnimatePresence>
                  {activeDropdown === 'MBBS Abroad' && item.name === 'MBBS Abroad' && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.22 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-[2px] z-[999] w-[820px]"
                      onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">
                        {/* HEADER */}
                        <div className="bg-gradient-to-r from-[#0b0e24] via-[#141838] to-[#1e2259] px-6 py-5 flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-bold text-lg">MBBS Abroad</h3>
                            <p className="text-white/50 text-sm mt-0.5">Explore countries, universities & colleges, fees, eligibility & visa guidance.</p>
                          </div>
                          <Link href="/colleges/mbbs-abroad" className="flex-shrink-0 bg-[#f59e0b] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#d97706] transition-all flex items-center gap-2">
                            ALL COUNTRIES
                            <FaExternalLinkAlt className="text-[10px]" />
                          </Link>
                        </div>

                        {/* BODY */}
                        <div className="flex bg-white">
                          {/* LEFT: Countries */}
                          <div className="w-[240px] border-r border-gray-100 max-h-[420px] overflow-y-auto">
                            {abroadCountries.map((country) => (
                              <div
                                key={country.id}
                                onMouseEnter={() => setHoveredItem(country.name)}
                                className={`px-5 h-[52px] flex items-center justify-between cursor-pointer transition-all duration-200 border-l-3 ${(hoveredItem || abroadCountries[0]?.name) === country.name ? 'border-l-[#f59e0b] bg-[#f59e0b]/5' : 'border-l-transparent hover:bg-gray-50'}`}
                              >
                                <span className={`text-sm font-semibold ${(hoveredItem || abroadCountries[0]?.name) === country.name ? 'text-[#f59e0b]' : 'text-gray-700'}`}>
                                  MBBS in {country.name}
                                </span>
                                <FaChevronRight className="text-[10px] text-gray-400" />
                              </div>
                            ))}
                          </div>

                          {/* RIGHT: Colleges */}
                          <div className="flex-1 p-5 max-h-[420px] overflow-y-auto">
                            {(() => {
                              const active = getActiveAbroadCountry();
                              if (!active) return null;
                              return (
                                <>
                                  <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">{active.name} · {active.colleges.length} Colleges</span>
                                    <Link href={`/country/${getStateSlug(active.name)}`} className="text-xs font-bold text-[#f59e0b] hover:underline flex items-center gap-1">
                                      View country <FaArrowRight className="text-[9px]" />
                                    </Link>
                                  </div>
                                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                    {active.colleges.slice(0, 16).map((college) => (
                                      <Link key={college.id} href={`/colleges/${getCollegeSlug(college.name)}`} className="group/col flex items-start justify-between py-1.5 hover:bg-gray-50 rounded px-2 -mx-2 transition-all">
                                        <div>
                                          <p className="text-sm font-semibold text-gray-800 group-hover/col:text-[#f59e0b] transition-colors leading-snug">{college.name}</p>
                                          <p className="text-xs text-gray-400 mt-0.5">{college.city}</p>
                                        </div>
                                        <FaExternalLinkAlt className="text-[10px] text-gray-300 mt-1 flex-shrink-0 group-hover/col:text-[#f59e0b] transition-colors" />
                                      </Link>
                                    ))}
                                  </div>
                                </>
                              );
                            })()}
                          </div>
                        </div>

                        {/* FOOTER */}
                        <div className="border-t border-gray-100 bg-white px-6 py-3 text-right">
                          <Link href="/colleges/mbbs-abroad" className="text-sm font-bold text-gray-700 hover:text-[#f59e0b] transition-colors flex items-center justify-end gap-1">
                            View all countries <FaArrowRight className="text-[10px]" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ========== MD/MS MEGA MENU ========== */}
                <AnimatePresence>
                  {activeDropdown === 'MD/MS' && item.name === 'MD/MS' && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.22 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-[2px] z-[999] w-[680px]"
                      onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">
                        {/* HEADER */}
                        <div className="bg-gradient-to-r from-[#0b0e24] via-[#141838] to-[#1e2259] px-6 py-5 flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-bold text-lg">MD / MS Admissions</h3>
                            <p className="text-white/50 text-sm mt-0.5">Postgraduate medical programs across top Indian states, counselling, seat guidance & admission support.</p>
                          </div>
                          <Link href="/colleges/md-ms" className="flex-shrink-0 bg-[#f59e0b] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#d97706] transition-all flex items-center gap-2">
                            EXPLORE MD/MS
                            <FaExternalLinkAlt className="text-[10px]" />
                          </Link>
                        </div>

                        {/* BODY */}
                        <div className="bg-white p-6">
                          <div className="flex gap-8">
                            {/* LEFT: Description */}
                            <div className="w-[200px] flex-shrink-0">
                              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                Choose your preferred state for MD/MS admission guidance. Our counsellors help with eligibility, counselling rounds, and college selection.
                              </p>
                              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-gray-600">
                                <FaSlidersH className="text-xs" />
                                <span className="text-xs font-bold">{mdmsStates.length} STATES</span>
                              </div>
                            </div>

                            {/* RIGHT: State Cards Grid */}
                            <div className="flex-1 grid grid-cols-3 gap-3">
                              {mdmsStates.map((state) => (
                                <Link
                                  key={state.id}
                                  href={`/colleges/md-ms/${state.slug || getStateSlug(state.name)}`}
                                  className="group/card border border-gray-100 rounded-xl p-4 hover:border-[#f59e0b]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0b0e24] to-[#1e2259] flex items-center justify-center mb-3">
                                    <span className="text-white text-xs font-black">{mdMsAbbreviations[state.name] || state.name.substring(0, 2).toUpperCase()}</span>
                                  </div>
                                  <p className="text-sm font-bold text-gray-800 group-hover/card:text-[#f59e0b] transition-colors leading-snug">
                                    MD/MS in {state.name}
                                  </p>
                                  <FaExternalLinkAlt className="text-[10px] text-gray-300 mt-2 group-hover/card:text-[#f59e0b] transition-colors" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* FOOTER */}
                        <div className="border-t border-gray-100 bg-white px-6 py-3 text-right">
                          <Link href="/colleges/md-ms" className="text-sm font-bold text-gray-700 hover:text-[#f59e0b] transition-colors flex items-center justify-end gap-1">
                            View all MD/MS states <FaArrowRight className="text-[10px]" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <button onClick={openPopup} className="hidden lg:flex items-center justify-center px-7 h-12 rounded-lg bg-amber-500 text-[#0b0e24] font-bold text-sm shadow-[0_10px_30px_rgba(245,158,11,0.25)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.35)] hover:scale-[1.03] transition-all duration-300">
            Expert Counselling
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-2xl text-gray-700">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-y-auto max-h-[80vh]"
          >
            <div className="p-4 sm:p-5 space-y-4 sm:space-y-5">
              <div className="border-b border-gray-200 pb-4 sm:pb-5">
                <a href={`tel:${SITE_IDENTITY.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center text-[14px] sm:text-[15px] font-semibold text-gray-700 mb-3 sm:mb-4">
                  <FaPhoneAlt className="mr-3 text-blue-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">{SITE_IDENTITY.contact.phone}</span>
                </a>
                <a href={`mailto:${SITE_IDENTITY.contact.email}`} className="flex items-center text-[14px] sm:text-[15px] font-semibold text-gray-700">
                  <FaEnvelope className="mr-3 text-blue-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base break-words">{SITE_IDENTITY.contact.email}</span>
                </a>
              </div>

              {navLinks.map((link) => (
                <div key={link.name}>
                  {!link.hasDropdown ? (
                    <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className={`block text-[15px] sm:text-[16px] font-semibold transition-all py-2 ${
                      pathname.startsWith('/neet-rank-predictor') && link.name === 'NEET Predictor'
                        ? 'text-[#f59e0b] bg-[#f59e0b]/10 rounded-lg px-3'
                        : 'text-gray-800 hover:text-[#f59e0b]'
                    }`}>
                      {link.name}
                    </Link>
                  ) : (
                    <div>
                      <button onClick={() => toggleMobileItem(link.name)} className="flex items-center justify-between w-full text-[15px] sm:text-[16px] font-semibold text-gray-800 hover:text-[#f59e0b] transition-all py-2">
                        <span>{link.name}</span>
                        <FaChevronDown className={`text-[10px] transition-transform duration-300 ${expandedMobileItems.includes(link.name) ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {expandedMobileItems.includes(link.name) && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="ml-4 mt-2 space-y-2 overflow-hidden">
                            {link.name === 'MBBS India' && indiaStates.length > 0 && (
                              <div className="space-y-2">
                                {(() => {
                                  const allColleges = indiaStates.flatMap(s => s.colleges);
                                  const govtColleges = allColleges.filter(c => c.type === 'Government').slice(0, 10);
                                  const privateColleges = allColleges.filter(c => c.type === 'Private').slice(0, 10);
                                  return (
                                    <>
                                      <p className="text-xs font-bold text-green-600 uppercase tracking-wide px-3 pt-2">Government Colleges</p>
                                      {govtColleges.map((college) => (
                                        <Link key={college.id} href={`/colleges/${getCollegeSlug(college.name)}`} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-[#f59e0b] py-1.5 px-4 transition-all border-l-2 border-transparent hover:border-[#f59e0b]">
                                          {college.name}
                                        </Link>
                                      ))}
                                      <p className="text-xs font-bold text-purple-600 uppercase tracking-wide px-3 pt-4">Private Colleges</p>
                                      {privateColleges.map((college) => (
                                        <Link key={college.id} href={`/colleges/${getCollegeSlug(college.name)}`} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-[#f59e0b] py-1.5 px-4 transition-all border-l-2 border-transparent hover:border-[#f59e0b]">
                                          {college.name}
                                        </Link>
                                      ))}
                                      <Link href="/colleges/mbbs-india" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold text-[#f59e0b] py-2 px-4 transition-all">
                                        View All Colleges →
                                      </Link>
                                    </>
                                  );
                                })()}
                              </div>
                            )}
                            {link.name === 'MBBS Abroad' && abroadCountries.length > 0 && (
                              <div className="space-y-2">
                                {abroadCountries.map((country) => (
                                  <div key={country.id} className="border-l-2 border-gray-200">
                                    <button onClick={() => toggleMobileItem(`country-${country.id}`)} className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-[#f59e0b] py-2 px-3 transition-all">
                                      <span>{country.name}</span>
                                      <FaChevronDown className={`text-[8px] transition-transform duration-300 ${expandedMobileItems.includes(`country-${country.id}`) ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                      {expandedMobileItems.includes(`country-${country.id}`) && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="ml-4 mt-1 space-y-1 overflow-hidden">
                                          {country.colleges.slice(0, 5).map((college) => (
                                            <Link key={college.id} href={`/colleges/${getCollegeSlug(college.name)}`} onClick={() => setMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#f59e0b] py-1 px-3 transition-all">
                                              • {college.name}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ))}
                              </div>
                            )}
                            {link.name === 'MD/MS' && mdmsStates.length > 0 && (
                              <div className="space-y-2">
                                {mdmsStates.map((state) => (
                                  <div key={state.id} className="border-l-2 border-gray-200">
                                    <button onClick={() => toggleMobileItem(`mdms-${state.id}`)} className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-[#f59e0b] py-2 px-3 transition-all">
                                      <span>MD/MS in {state.name}</span>
                                      <FaChevronDown className={`text-[8px] transition-transform duration-300 ${expandedMobileItems.includes(`mdms-${state.id}`) ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                      {expandedMobileItems.includes(`mdms-${state.id}`) && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="ml-4 mt-1 space-y-1 overflow-hidden">
                                          <Link href={`/colleges/md-ms/${state.slug || getStateSlug(state.name)}`} onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#f59e0b] font-bold py-2 px-3 transition-all">
                                            View All Details for {state.name}
                                          </Link>
                                          {state.colleges && state.colleges.slice(0, 5).map((college: any) => (
                                            <div key={college.id} className="block text-xs text-gray-600 py-1 px-3">
                                              • {college.name}
                                            </div>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}

              <button onClick={() => { openPopup(); setMobileMenuOpen(false); }} className="w-full h-12 rounded-xl bg-amber-500 text-[#0b0e24] font-bold shadow-lg text-sm sm:text-base">
                Expert Counselling
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
