"use client"
import React from 'react';
import SITE_IDENTITY from '../app/config/site_identity';

const SiteIdentity: React.FC = () => {
  return (
    <div className="bg-linear-to-r from-blue-900 to-blue-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center mb-6">
            <img loading="lazy" decoding="async"
              src={SITE_IDENTITY.logo.primary}
              alt={SITE_IDENTITY.name}
              className="h-16 w-auto mr-4"
            />
            <h1 className="text-4xl lg:text-5xl font-bold">
              {SITE_IDENTITY.name}
            </h1>
          </div>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {SITE_IDENTITY.tagline}
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a href={SITE_IDENTITY.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-[#1877F2] hover:-translate-y-1 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href={SITE_IDENTITY.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-[#E4405F] hover:-translate-y-1 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href={SITE_IDENTITY.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-[#0A66C2] hover:-translate-y-1 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href={SITE_IDENTITY.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-[#FF0000] hover:-translate-y-1 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href={SITE_IDENTITY.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-black hover:-translate-y-1 transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-700">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657a1 1 0 00-1.414 1.414L16 4.586a1 1 0 00-1.414 1.414 1.657v8a2 2 0 00-2 2-2h2.586l1.414 1.414a2 2 0 00-2 2-2v2.586l1.414 1.414a2 2 0 001.414 1.414 1.657z"/>
              </svg>
              <h3 className="text-xl font-semibold">Office Address</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              {SITE_IDENTITY.address.building}, {SITE_IDENTITY.address.landmark},<br/>
              {SITE_IDENTITY.address.details},<br/>
              {SITE_IDENTITY.address.area}, {SITE_IDENTITY.address.city} {SITE_IDENTITY.address.pincode}
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-700">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <h3 className="text-xl font-semibold">Contact Information</h3>
            </div>
            <div className="space-y-3 text-blue-100">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {SITE_IDENTITY.contact.phone}
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8a9 9 0 111.321 112.808 112.808 112.808 0 111.321 112.808 112.808 0 111.321 112.808zM3 8a9 9 0 111.321 112.808 112.808 112.808 0 111.321 112.808zM12 14l9 5.5 0 111.321 112.808 112.808 0 111.321 112.808zM8 12l0 4 0 111.321 112.808 112.808 0 111.321 112.808zM20 4v4a2 2 0 00-2 2-2h2.586l1.414 1.414a2 2 0 00-2 2-2v2.586l1.414 1.414a2 2 0 001.414 1.414 1.657z"/>
                </svg>
                <span className="break-all">{SITE_IDENTITY.contact.email}</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8a9 9 0 111.321 112.808 112.808 112.808 0 111.321 112.808 112.808 0 111.321 112.808zM3 8a9 9 0 111.321 112.808 112.808 112.808 0 111.321 112.808zM12 14l9 5.5 0 111.321 112.808 112.808 0 111.321 112.808zM8 12l0 4 0 111.321 112.808 112.808 0 111.321 112.808zM20 4v4a2 2 0 00-2 2-2h2.586l1.414 1.414a2 2 0 00-2 2-2v2.586l1.414 1.414a2 2 0 001.414 1.414 1.657z"/>
                </svg>
                summitfoundglobal@gmail.com
              </p>
            </div>
          </div>

          {/* Office Hours Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-700">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 4m0 0l-3-4m3 4H3"/>
              </svg>
              <h3 className="text-xl font-semibold">Office Hours</h3>
            </div>
            <div className="text-blue-100">
              <p>Monday - Saturday: {SITE_IDENTITY.officeHours.mondayToSaturday}</p>
              <p>Sunday: {SITE_IDENTITY.officeHours.sunday}</p>
            </div>
          </div>
        </div>

        {/* Google Maps Link */}
        <div className="mt-8 text-center">
          <a
            href={SITE_IDENTITY.contact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657a1 1 0 00-1.414 1.414L16 4.586a1 1 0 00-1.414 1.414 1.657v8a2 2 0 00-2 2-2h2.586l1.414 1.414a2 2 0 00-2 2-2v2.586l1.414 1.414a2 2 0 001.414 1.414 1.657z"/>
            </svg>
            Get Directions on Google Maps
          </a>
        </div>

        {/* Statistics */}
        <div className="mt-12 text-center">
          <p className="text-blue-200 max-w-3xl mx-auto mb-6">
            {SITE_IDENTITY.name} is dedicated to providing comprehensive guidance and support 
            for medical education aspirants. Our expert counselors help students navigate the 
            complex admission process for MBBS and other medical courses in India and abroad.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{SITE_IDENTITY.statistics.studentsCounselled}</div>
              <div className="text-blue-200">Students Counseled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{SITE_IDENTITY.statistics.yearsExperience}</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{SITE_IDENTITY.statistics.partnerColleges}</div>
              <div className="text-blue-200">Partner Colleges</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteIdentity;
