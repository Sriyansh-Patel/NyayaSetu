import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sun, Moon, ChevronDown, Menu, X, Calendar, Edit3, Grid, Settings, Star, HelpCircle, BookOpen } from "lucide-react";
import { toggleTheme } from "../features/themeSlices";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default function Navbar1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const theme = useSelector((state) => state.theme.mode);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Product", dropdown: true },
    { label: "Community" },
    { label: "Pricing" },
    { label: "Download" },
  ];

  const productFeatures = [
    { icon: Calendar, title: "Plan", desc: "Plan your day your way" },
    { icon: Edit3, title: "Write", desc: "One Writing Experience, Every Device" },
    { icon: Star, title: "What's New", desc: "" },
    { icon: Grid, title: "Organize", desc: "Structure that adapts to Your thinking" },
    { icon: Settings, title: "Customize", desc: "Make it unmistakably yours" },
    { icon: HelpCircle, title: "Help and Support", desc: "" },
    { icon: BookOpen, title: "Blog", desc: "" },
  ];

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl backdrop-blur-lg border rounded-full shadow-lg transition-all ${
      theme === 'dark' 
        ? 'bg-gray-900/90 border-gray-700' 
        : 'bg-white/90 border-gray-200'
    }`}>
      {/* Main Navbar Content */}
      <div className="flex items-center justify-between px-8 py-3">
        {/* Brand */}
        <div className="flex items-center">
          <span className={`text-2xl font-black tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            NyayaSetu
          </span>
        </div>

        {/* Center Nav - Desktop */}
        <div className={`hidden md:flex items-center space-x-8 text-base font-medium ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {navLinks.map((item) => (
            <div key={item.label} className="relative" ref={item.dropdown ? dropdownRef : null}>
              {item.dropdown ? (
                <>
                  <button
                    onMouseEnter={() => setProductOpen(true)}
                    onClick={() => setProductOpen(!productOpen)}
                    className={`flex items-center transition ${
                      productOpen 
                        ? theme === 'dark' ? 'text-white' : 'text-gray-900'
                        : theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform ${
                        productOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {productOpen && (
                    <div
                      onMouseLeave={() => setProductOpen(false)}
                      className={`absolute left-1/2 -translate-x-1/2 mt-6 w-[600px] backdrop-blur-xl border rounded-3xl shadow-2xl p-8 ${
                        theme === 'dark' 
                          ? 'bg-gray-900/95 border-gray-700' 
                          : 'bg-white/95 border-gray-200'
                      }`}
                    >
                      {/* Three Column Grid Layout */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {productFeatures.map((item) => (
                          <div
                            key={item.title}
                            className={`p-4 rounded-2xl transition cursor-pointer ${
                              theme === 'dark' 
                                ? 'hover:bg-gray-800/60 text-white' 
                                : 'hover:bg-gray-50 text-gray-900'
                            }`}
                          >
                            <item.icon className={`w-6 h-6 mb-3 ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`} />
                            <h4 className="font-semibold text-base mb-1">{item.title}</h4>
                            {item.desc && (
                              <p className={`text-xs leading-relaxed ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                {item.desc}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className={`border-t mb-6 ${
                        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                      }`}></div>

                      {/* Footer Button */}
                      <div className="text-center">
                        <button className="px-8 py-3 bg-gray-900 text-white rounded-full text-base font-semibold hover:bg-gray-800 transition shadow-lg">
                          Try Craft Free
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <button className={`transition ${
                  theme === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
                }`}>
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button className={`hidden md:inline text-base font-medium transition ${
            theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
          }`}>
            Log in
          </button>
          <button className="hidden md:inline px-6 py-2.5 bg-gray-900 text-white rounded-full text-base font-semibold hover:bg-gray-800 transition shadow-lg">
            Try Craft Free
          </button>
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className={`md:hidden border-t mx-6 pb-6 ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="pt-4 space-y-4">
            {navLinks.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    if (item.dropdown) {
                      setProductOpen(!productOpen);
                    } else {
                      setMenuOpen(false);
                    }
                  }}
                  className={`flex items-center justify-between w-full text-left text-base font-medium py-3 px-4 rounded-lg transition ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800/60' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/60'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        productOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                
                {item.dropdown && productOpen && (
                  <div className="ml-4 mt-2 space-y-3 border-l-2 pl-4 border-gray-300 dark:border-gray-600">
                    {productFeatures.map((feature) => (
                      <div key={feature.title} className="py-2">
                        <div className="flex items-center space-x-3">
                          <feature.icon className={`w-4 h-4 ${
                            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                          }`} />
                          <h4 className={`font-medium text-sm ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {feature.title}
                          </h4>
                        </div>
                        {feature.desc && (
                          <p className={`text-xs ml-7 mt-1 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {feature.desc}
                          </p>
                        )}
                      </div>
                    ))}

                    {/* Divider */}
                    <div className={`border-t my-4 ${
                      theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                    }`}></div>

                    {/* Mobile footer button */}
                    <button className="w-full py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition shadow-lg">
                      Try Craft Free
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-300 dark:border-gray-600">
              <button className={`w-full py-3 text-center font-medium rounded-lg transition ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/60' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/60'
              }`}>
                Log in
              </button>
              <button className="w-full py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition shadow-lg">
                Try Craft Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}