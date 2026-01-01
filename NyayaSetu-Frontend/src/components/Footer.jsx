import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlices'; // Adjust import path as needed

const Footer = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700 mx-2 mt-2 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {['E-Challan', 'Property', 'Family Law', 'Criminal', 'View All'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Clients
            </h3>
            <ul className="space-y-2 text-sm">
              {['Find Lawyer', 'Pricing', 'Reviews', 'Resources', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Lawyers */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Lawyers
            </h3>
            <ul className="space-y-2 text-sm">
              {['Join Platform', 'Case Requests', 'Earnings', 'Resources', 'Verify'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {['About', 'Contact', 'Careers', 'Privacy', 'Terms'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Brand & Theme Toggle */}
            <div className="flex items-center space-x-6">
              <div className="text-lg font-bold">NyayaSetu</div>
              
              {/* Theme Toggle */}
              <button
                onClick={handleToggleTheme}
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2"
              >
                <span>Theme</span>
                <span className="text-xs">{theme === 'dark' ? '☀️' : '🌙'}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {platform}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <div>&copy; {new Date().getFullYear()} NyayaSetu</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;