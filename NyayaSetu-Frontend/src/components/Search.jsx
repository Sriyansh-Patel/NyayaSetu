// OptimizedSearchBar.jsx - Innovative Compact Design
import React, { useState } from 'react';
import { FiMapPin, FiBriefcase, FiUser, FiSearch, FiChevronRight, FiFilter } from 'react-icons/fi';
import { TbArrowWaveRightUp } from 'react-icons/tb';

export default function Search({ dark }) {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [isAdvanced, setIsAdvanced] = useState(false);

  const cityList = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
    "Ahmedabad", "Pune", "Surat", "Kolkata", "Jaipur"
  ];

  const categories = [
    "Criminal Law", "Family / Divorce", "Property & Real Estate",
    "Corporate & Startup", "Cyber Crime", "Intellectual Property",
    "Immigration", "Civil Litigation", "Taxation", "Consumer Court"
  ];

  const handleSearch = () => {
    console.log({ city, category, name })
    alert(`
      Searching:
      📍 City: ${city || "Any"}
      ⚖️ Category: ${category || "Any"}
      👤 Name: ${name || "Optional"}
    `)
  }

  return (
    <div className="w-full px-4 md:px-20 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Innovative Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className={`w-3 h-3 rounded-full ${dark ? 'bg-green-400' : 'bg-green-500'} animate-pulse`}></div>
            <h2 className="text-xl md:text-2xl font-bold">Find Your Legal Expert</h2>
            <div className={`w-3 h-3 rounded-full ${dark ? 'bg-green-400' : 'bg-green-500'} animate-pulse`}></div>
          </div>
          <p className={`text-xs ${dark ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}>
            Precision Search • Verified Lawyers • Instant Results
          </p>
        </div>

        {/* Innovative Compact Search Container */}
        <div className={`rounded-xl shadow-lg ${dark ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-gray-200'} border p-4`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
            {/* City Selector - Sleek */}
            <div className="md:col-span-4 relative group">
              <div className={`flex items-center h-12 pl-3 pr-2 rounded-lg border ${dark ? 'bg-gray-800/50 border-gray-700 group-hover:border-green-500' : 'bg-gray-50 border-gray-200 group-hover:border-green-400'} transition-all duration-300`}>
                <div className={`p-2 rounded-md mr-2 ${dark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
                  <FiMapPin className="text-sm" />
                </div>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`w-full bg-transparent outline-none text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'} cursor-pointer`}
                  required
                >
                  <option value="" className={dark ? 'text-gray-500' : 'text-gray-500'}>
                    City
                  </option>
                  {cityList.map(c => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className={`text-xs px-2 py-1 rounded ${dark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'} ml-2`}>
                  {city ? "✓" : "📍"}
                </div>
              </div>
            </div>

            {/* Category Selector - Sleek */}
            <div className="md:col-span-4 relative group">
              <div className={`flex items-center h-12 pl-3 pr-2 rounded-lg border ${dark ? 'bg-gray-800/50 border-gray-700 group-hover:border-green-500' : 'bg-gray-50 border-gray-200 group-hover:border-green-400'} transition-all duration-300`}>
                <div className={`p-2 rounded-md mr-2 ${dark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <FiBriefcase className="text-sm" />
                </div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`w-full bg-transparent outline-none text-sm font-medium ${dark ? 'text-white' : 'text-gray-900'} cursor-pointer`}
                  required
                >
                  <option value="" className={dark ? 'text-gray-500' : 'text-gray-500'}>
                    Specialization
                  </option>
                  {categories.map(ct => (
                    <option key={ct} value={ct}>
                      {ct}
                    </option>
                  ))}
                </select>
                <div className={`text-xs px-2 py-1 rounded ${dark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'} ml-2`}>
                  {category ? "✓" : "⚖️"}
                </div>
              </div>
            </div>

            {/* Name Input - Sleek */}
            <div className="md:col-span-3 relative group">
              <div className={`flex items-center h-12 pl-3 pr-2 rounded-lg border ${dark ? 'bg-gray-800/50 border-gray-700 group-hover:border-green-500' : 'bg-gray-50 border-gray-200 group-hover:border-green-400'} transition-all duration-300`}>
                <div className={`p-2 rounded-md mr-2 ${dark ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                  <FiUser className="text-sm" />
                </div>
                <input
                  type="text"
                  placeholder="Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full bg-transparent outline-none text-sm ${dark ? 'text-white placeholder:text-gray-500' : 'text-gray-900 placeholder:text-gray-400'}`}
                />
                {name && (
                  <div className={`text-xs px-2 py-1 rounded ${dark ? 'bg-purple-700 text-purple-100' : 'bg-purple-100 text-purple-700'} ml-2`}>
                    👤
                  </div>
                )}
              </div>
            </div>

            {/* Innovative Search Button */}
            <button
              onClick={handleSearch}
              disabled={!city || !category}
              className={`md:col-span-1 h-12 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 ${!city || !category
                  ? `${dark ? 'bg-gray-800 text-gray-400 border border-gray-700' : 'bg-gray-100 text-gray-400 border border-gray-200'} cursor-not-allowed`
                  : `${dark ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-green-500/25 hover:shadow-xl' : 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg hover:shadow-green-400/25 hover:shadow-xl'}`
                }`}
            >
              {!city || !category ? (
                <FiFilter className="text-base" />
              ) : (
                <div className="flex items-center justify-center">
                  <FiSearch className="text-base" />
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${dark ? 'bg-green-400' : 'bg-green-300'} animate-ping`}></div>
                </div>
              )}
            </button>
          </div>

          {/* Advanced Toggle & Quick Actions */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => setIsAdvanced(!isAdvanced)}
              className={`text-xs flex items-center gap-1 ${dark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
            >
              <FiChevronRight className={`text-xs transition-transform ${isAdvanced ? 'rotate-90' : ''}`} />
              {isAdvanced ? 'Hide advanced' : 'Advanced search'}
            </button>

            {/* Quick Action Pills */}
            <div className="flex items-center gap-1">
              <span className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'} mr-1`}>Quick:</span>
              <div className="flex flex-wrap gap-1">
                {[
                  { label: "Delhi", city: "Delhi" },
                  { label: "Family", category: "Family / Divorce" },
                  { label: "Cyber", category: "Cyber Crime" }
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (item.city) setCity(item.city);
                      if (item.category) setCategory(item.category);
                    }}
                    className={`px-2 py-1 text-xs rounded-full transition-all ${dark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced Options (Collapsible) */}
          {isAdvanced && (
            <div className={`mt-4 p-3 rounded-lg ${dark ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="verified" className="rounded" />
                  <label htmlFor="verified" className={`text-xs ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                    ✓ Verified Only
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="available" className="rounded" />
                  <label htmlFor="available" className={`text-xs ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                    🕐 Available Now
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="video" className="rounded" />
                  <label htmlFor="video" className={`text-xs ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                    📹 Video Consult
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="english" className="rounded" />
                  <label htmlFor="english" className={`text-xs ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                    🗣️ English Speaking
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Status Indicator */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-1 text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${city && category ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                {city && category ? 'Ready to search' : 'Fill required fields'}
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <TbArrowWaveRightUp className={`text-sm ${dark ? 'text-green-400' : 'text-green-500'}`} />
              <span className={`text-xs ${dark ? 'text-green-400' : 'text-green-600'}`}>
                {city && category ? '1,234+ lawyers available' : '—'}
              </span>
            </div>
          </div>
        </div>

        {/* Mini Stats Indicator */}
        <div className="mt-4">
          <div className={`text-center text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
            <span className="inline-flex items-center gap-1">
              <span className={`w-1 h-1 rounded-full ${dark ? 'bg-green-400' : 'bg-green-500'}`}></span>
              <span>1K+ Verified Lawyers</span>
            </span>
            <span className="mx-2">•</span>
            <span className="inline-flex items-center gap-1">
              <span className={`w-1 h-1 rounded-full ${dark ? 'bg-green-400' : 'bg-green-500'}`}></span>
              <span>98% Satisfaction</span>
            </span>
            <span className="mx-2">•</span>
            <span className="inline-flex items-center gap-1">
              <span className={`w-1 h-1 rounded-full ${dark ? 'bg-green-400' : 'bg-green-500'}`}></span>
              <span>30-min Response</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}