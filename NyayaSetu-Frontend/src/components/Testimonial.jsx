export default function Testimonials({dark}){
    const card = dark 
        ? "bg-gray-800/70 border-gray-700 text-white" 
        : "bg-white/90 border-gray-200 text-gray-900";

    const testimonials = [
        {
            name: "Ravi Sharma",
            text: "Property dispute resolved quickly. The lawyer was extremely professional and handled everything efficiently. Highly recommended!",
            rating: 5,
            location: "Delhi",
            date: "2 weeks ago",
            image: "https://i.pravatar.cc/150?img=11"
        },
        {
            name: "Ayesha Khan",
            text: "Best consultation experience. They were transparent about fees and kept me updated at every step. Truly trustworthy.",
            rating: 4,
            location: "Gurgaon",
            date: "1 month ago",
            image: "https://i.pravatar.cc/150?img=28"
        },
        {
            name: "Vikas Patel",
            text: "Cyber case solved with expert guidance. Their technical knowledge combined with legal expertise made all the difference. Seamless experience!",
            rating: 5,
            location: "Noida",
            date: "3 weeks ago",
            image: "https://i.pravatar.cc/150?img=32"
        }
    ];

    return (
        <section className="py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
                    <p className={`max-w-2xl mx-auto text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Real experiences from clients who found success with our legal services
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((review, i) => (
                        <div 
                            key={i} 
                            className={`group relative rounded-3xl border-2 p-8 shadow-2xl hover:shadow-3xl backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 ${card}`}
                        >
                            {/* Quote Mark */}
                            <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center ${dark ? 'bg-green-600' : 'bg-green-500'} text-white text-2xl`}>
                                "
                            </div>

                            {/* Rating Stars */}
                            <div className="flex mb-6">
                                {[...Array(5)].map((_, index) => (
                                    <svg 
                                        key={index}
                                        className={`w-5 h-5 ${index < review.rating ? 'text-amber-500' : dark ? 'text-gray-600' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className={`ml-2 text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {review.rating}.0
                                </span>
                            </div>

                            {/* Testimonial Text */}
                            <p className="italic text-lg mb-8 leading-relaxed">
                                "{review.text}"
                            </p>

                            {/* Client Info */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img 
                                        src={review.image} 
                                        alt={review.name}
                                        className="w-14 h-14 rounded-full border-2 border-green-500 object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-lg">{review.name}</h4>
                                        <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {review.location} • {review.date}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Verified Badge */}
                                <div className={`${dark ? 'bg-green-800/50' : 'bg-green-100'} text-green-700 dark:text-green-300 text-xs font-medium px-3 py-1 rounded-full`}>
                                    ✓ Verified
                                </div>
                            </div>

                            {/* Bottom Decoration */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl ${dark ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-green-400 to-emerald-500'}`}></div>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className={`mt-16 p-8 rounded-2xl border shadow-xl ${dark ? 'bg-gradient-to-r from-gray-900 to-black border-gray-800' : 'bg-gradient-to-r from-gray-50 to-white border-gray-200'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className={`text-4xl font-bold mb-2 ${dark ? 'text-green-400' : 'text-green-600'}`}>500+</div>
                            <p className={`font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Happy Clients</p>
                        </div>
                        <div className="text-center">
                            <div className={`text-4xl font-bold mb-2 ${dark ? 'text-green-400' : 'text-green-600'}`}>4.9★</div>
                            <p className={`font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Average Rating</p>
                        </div>
                        <div className="text-center">
                            <div className={`text-4xl font-bold mb-2 ${dark ? 'text-green-400' : 'text-green-600'}`}>98%</div>
                            <p className={`font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Satisfaction Rate</p>
                        </div>
                        <div className="text-center">
                            <div className={`text-4xl font-bold mb-2 ${dark ? 'text-green-400' : 'text-green-600'}`}>24h</div>
                            <p className={`font-medium ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Response Time</p>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-500 mb-1">✓</div>
                        <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>Confidential</p>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-500 mb-1">✓</div>
                        <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>Transparent Fees</p>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-500 mb-1">✓</div>
                        <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>Verified Lawyers</p>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-green-500 mb-1">✓</div>
                        <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>Secure & Safe</p>
                    </div>
                </div>
            </div>
        </section>
    );
}