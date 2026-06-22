"use client"
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { usePopup } from '../contexts/PopupContext';
import Link from 'next/link';
import { SITE_IDENTITY } from '../app/config/site_identity';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { openPopup } = usePopup();

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" }
  ];

  const mbbsAbroadLinks = [
    { name: "MBBS In Kazakhstan", href: "/country/kazakhstan" },
    { name: "MBBS In Bangladesh", href: "/country/bangladesh" },
    { name: "MBBS In Georgia", href: "/country/georgia" },
    { name: "MBBS In Philippines", href: "/country/philippines" },
    { name: "MBBS In Russia", href: "/country/russia" },
    { name: "MBBS In Uzbekistan", href: "/country/uzbekistan" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: SITE_IDENTITY.social.facebook
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      href: SITE_IDENTITY.social.twitter
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: SITE_IDENTITY.social.linkedin
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: SITE_IDENTITY.social.instagram
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: SITE_IDENTITY.social.youtube
    }
  ];

  return (
    <footer className="bg-[#071B3B] text-white pt-20 pb-8 px-4 relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-lg"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/10 blur-3xl rounded-lg"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 border-b border-white/10 pb-14">

          {/* Company */}
          <div>
            <div className="mb-5">
              <Logo className="h-14 w-auto" light={true} />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {SITE_IDENTITY.name} helps students achieve their dream of
              studying MBBS in India & Abroad with expert counseling,
              admission support, and visa guidance.
            </p>

            <button
              onClick={openPopup}
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Free Counseling
            </button>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Useful Links
            </h3>

            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MBBS Abroad */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              MBBS Abroad
            </h3>

            <ul className="space-y-3">
              {mbbsAbroadLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-sm">

              <div className="flex items-start gap-3">
                <div className="bg-sky-500/20 p-2 rounded-lg mt-1">
                  <FaMapMarkerAlt className="text-sky-400" />
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {SITE_IDENTITY.address.building}, {SITE_IDENTITY.address.landmark},<br/>
                  {SITE_IDENTITY.address.details}, {SITE_IDENTITY.address.area}, {SITE_IDENTITY.address.city} - {SITE_IDENTITY.address.pincode}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-sky-500/20 p-2 rounded-lg">
                  <FaPhoneAlt className="text-sky-400" />
                </div>

                <p className="text-gray-300">
                  {SITE_IDENTITY.contact.phone}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-sky-500/20 p-2 rounded-lg">
                  <FaEnvelope className="text-sky-400" />
                </div>

                <p className="text-gray-300">
                  {SITE_IDENTITY.contact.email}
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-8 sm:py-10 border-b border-white/10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <h4 className="text-2xl font-bold mb-4 text-white">
              Disclaimer
            </h4>

            <p className="text-gray-300 leading-relaxed text-sm">
              {SITE_IDENTITY.name} provides counseling and admission guidance
              services for MBBS aspirants. Admission depends on eligibility,
              merit, and seat availability. Students are advised to verify
              details directly from universities and official authorities.
            </p>

            <p className="text-gray-400 text-sm mt-4">
              We do not collect fees on behalf of universities. Beware of fraud
              and contact us directly for authentic guidance.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {SITE_IDENTITY.name}. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Your Trusted Partner for Global Education
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;