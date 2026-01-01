export default function City({dark}){
    return (
    <>
    {/* 🌍 CITIES - PREMIUM DESIGN */}
<section className="px-6 md:px-20 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
        Top Cities
      </span>
      <h2 className="text-4xl font-bold mb-4">Available in Key NCR Cities</h2>
      <p className={`max-w-2xl mx-auto ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
        Connect with top-rated lawyers across the National Capital Region
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* DELHI CARD */}
      <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Delhi"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-emerald-900/10"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white">30+ Lawyers</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Delhi</h3>
            <p className="text-gray-300 font-medium">National Capital</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">25+ Courts</span>
            </div>
          </div>
        </div>
        
        {/* Premium Badge */}
        <div className="absolute top-6 right-6 z-20">
          <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            PREMIUM
          </span>
        </div>
      </div>

      {/* GURGAON CARD */}
      <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Gurgaon"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/10"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white">25+ Lawyers</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Gurgaon</h3>
            <p className="text-gray-300 font-medium">Corporate Hub</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6-4a2 2 0 00-2 2v.086l1.293-1.293a1 1 0 011.414 0L16 8.586V8a2 2 0 00-2-2h-2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Corporate Law</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span className="text-sm">Startup Focus</span>
            </div>
          </div>
        </div>
        
        {/* Premium Badge */}
        <div className="absolute top-6 right-6 z-20">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            BUSINESS
          </span>
        </div>
      </div>

      {/* NOIDA CARD */}
      <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1633158829558-8e42d36db7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Noida"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/10"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white">20+ Lawyers</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Noida</h3>
            <p className="text-gray-300 font-medium">Tech & Innovation</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Cyber Law</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03" />
              </svg>
              <span className="text-sm">IT Parks</span>
            </div>
          </div>
        </div>
        
        {/* Premium Badge */}
        <div className="absolute top-6 right-6 z-20">
          <span className="bg-gradient-to-r from-purple-500 to-pink-400 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            TECH
          </span>
        </div>
      </div>
    </div>

    {/* Stats Bar with dark mode support */}
    <div className={`mt-16 p-8 rounded-2xl border shadow-xl ${dark ? 'bg-gradient-to-r from-gray-900 to-black border-gray-800' : 'bg-gradient-to-r from-gray-50 to-white border-gray-200'}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className={`text-4xl font-bold mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>75+</div>
          <p className={`font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Total Lawyers</p>
          <p className={`text-sm mt-1 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>Across NCR Region</p>
        </div>
        <div className="text-center">
          <div className={`text-4xl font-bold mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>50+</div>
          <p className={`font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Courts Covered</p>
          <p className={`text-sm mt-1 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>District & High Courts</p>
        </div>
        <div className="text-center">
          <div className={`text-4xl font-bold mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>24/7</div>
          <p className={`font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Availability</p>
          <p className={`text-sm mt-1 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>Emergency Consultation</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
    );
}