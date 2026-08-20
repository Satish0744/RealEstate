import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, BedDouble, Bath, Maximize2, Share2, Heart, Plus } from 'lucide-react';

/* ─── CITIES DATA ─── */
const cities = [
  { name: "New York", country: "United State", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80" },
  { name: "London", country: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" },
  { name: "Hong Kong", country: "China", image: "https://images.unsplash.com/photo-1506979874453-72aa00c23ee9?auto=format&fit=crop&w=800&q=80" },
  { name: "Delhi", country: "India", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80" },
  { name: "Aukland", country: "New Zealand", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80" },
  { name: "Maleborn", country: "Australia", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80" },
];

/* ─── PROPERTIES DATA ─── */
const properties = [
  {
    title: "Townhouse for Rent", price: "$100 / sp.ft.",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    beds: 3, baths: 4, area: "30,000 ft",
    agent: { name: "Leslie Alexander", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80" },
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Luxury Penthouse", price: "$200 / sp.ft.",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    beds: 3, baths: 4, area: "30,000 ft",
    agent: { name: "Ronald Richards", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80" },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lavish Duplex Villa", price: "$350 / sp.ft.",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    beds: 3, baths: 4, area: "30,000 ft",
    agent: { name: "Courtney Henry", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" },
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lavish Duplex Villa", price: "$350 / sp.ft.",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    beds: 3, baths: 4, area: "30,000 ft",
    agent: { name: "Jenny Wilson", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80" },
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Villa with Amazing View", price: "$400 / sp.ft.",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    beds: 3, baths: 4, area: "30,000 ft",
    agent: { name: "Esther Howard", avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&q=80" },
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Townhouse for Rent", price: "$100 / sp.ft.",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    beds: 3, baths: 4, area: "30,000 ft",
    agent: { name: "Albert Flores", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" },
    image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=800&q=80",
  },
];

/* ─── AGENTS DATA ─── */
const agents = [
  {
    name: "Leslie Alexander",
    role: "Real Estate Agent",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Ronald Richards",
    role: "Property Consultant",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Courtney Henry",
    role: "Senior Agent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jenny Wilson",
    role: "Property Advisor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
];

/* ─── PROPERTY CARD ─── */
const PropertyCard = ({ property, index }) => (
  <div
    className="w-full max-w-[360px] mx-auto sm:mx-0 cursor-pointer group animate-on-scroll"
    style={{ 
      height: '622px', 
      border: '1px solid rgba(13,17,23,0.08)', 
      borderRadius: '30px',
      animationDelay: `${index * 100}ms`
    }}
  >
    <div className="w-full overflow-hidden flex-shrink-0" style={{ height: '311px', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}>
      <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div
      className="w-full flex flex-col justify-between px-5 py-5"
      style={{ height: '311px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', background: '#ffffff', boxShadow: '0px 5px 40px 0px rgba(0,0,0,0.05)' }}
    >
      <div>
        <h3 className="text-[#0D2038] font-semibold text-[17px] leading-snug mb-1">{property.title}</h3>
        <p className="text-gray-400 text-[13px] mb-2">{property.price}</p>
        <p className="text-gray-500 text-[12px] leading-[1.6] line-clamp-2">{property.description}</p>
      </div>
      <div className="flex items-center gap-4 text-[12px] text-gray-500">
        <span className="flex items-center gap-1"><BedDouble className="w-4 h-4 text-gray-400" />{property.beds}</span>
        <span className="flex items-center gap-1"><Bath className="w-4 h-4 text-gray-400" />{property.baths}</span>
        <span className="flex items-center gap-1"><Maximize2 className="w-4 h-4 text-gray-400" />{property.area}</span>
      </div>
      <div className="w-full h-px bg-gray-100" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={property.agent.avatar} alt={property.agent.name} className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" />
          <span className="text-[#0D2038] font-medium text-[13px]">{property.agent.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" aria-label="Share"><Share2 className="w-3.5 h-3.5 text-gray-400" /></button>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" aria-label="Favourite"><Heart className="w-3.5 h-3.5 text-gray-400" /></button>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" aria-label="Add"><Plus className="w-3.5 h-3.5 text-gray-400" /></button>
        </div>
      </div>
    </div>
  </div>
);

/* ─── AGENT CARD ─── */
const AgentCard = ({ agent, index }) => (
  <div
    className="relative cursor-pointer group mx-auto sm:mx-0 animate-on-scroll"
    style={{
      width: '262px',
      paddingBottom: '45px',
      animationDelay: `${index * 100}ms`
    }}
  >
    <div
      className="w-full overflow-hidden"
      style={{ height: '287px', borderRadius: '30px' }}
    >
      <img
        src={agent.avatar}
        alt={agent.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div
      className="absolute flex flex-col justify-center px-5 shadow-lg"
      style={{
        width: '222px',
        height: '90px',
        bottom: '0',
        left: '20px',
        borderRadius: '20px',
        background: 'rgba(13, 32, 56, 1)',
      }}
    >
      <span className="text-white font-semibold text-[15px] leading-snug truncate">
        {agent.name}
      </span>
      <span
        className="text-[12px] font-light mt-[4px] truncate"
        style={{ color: 'rgba(255,255,255,0.60)' }}
      >
        {agent.role}
      </span>
    </div>
  </div>
);

/* ─── MAIN SECTION ─── */
const Section = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">

      {/* ══ ABOUT / VIDEO ══ */}
      <div className="relative w-full max-w-[1140px] min-h-[850px] border border-white rounded-[10px] flex flex-col items-center justify-between mx-auto bg-white overflow-hidden animate-on-scroll">
        <div className="absolute right-[60px] top-[100px] hidden xl:flex items-center justify-center w-[207px] h-[206px] pointer-events-none animate-spin-slow">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 200">
            <path id="circlePathAbout" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
            <text className="text-[13px] uppercase tracking-[4px] fill-[#0D2038] font-medium">
             
            </text>
          </svg>
        </div>
        <div className="w-full max-w-[800px] flex flex-col items-center text-center my-auto">
          <h2 className="text-[#D0B580] font-['Bon_Vivant'] font-normal text-[40px] lg:text-[60px] leading-[100%] tracking-[-0.22px] mb-8">About Us</h2>
          <p className="text-black/80 font-sans font-light text-[15px] lg:text-[16px] leading-[30px] tracking-[-0.22px] mb-12 max-w-[800px]">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
          <button className="w-[191px] h-[56px] bg-[#D0B580] hover:opacity-90 text-white font-medium text-base rounded-[10px] flex items-center justify-center px-[50px] py-[16px] transition-all shadow-md cursor-pointer hover:scale-105 transform duration-300">Know More</button>
        </div>
        <div className="relative w-full max-w-[1140px] h-[400px] lg:h-[647px] rounded-[10px] overflow-hidden shadow-xl mt-6 group cursor-pointer">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80" alt="Property Showcase" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[140px] h-[140px] lg:w-[180px] lg:h-[180px] rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex flex-col items-center justify-center text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <span className="font-['Bon_Vivant'] text-2xl lg:text-3xl tracking-wide font-normal">Play</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══ EXPLORE CITIES ══ */}
      <div className="w-full flex justify-center bg-white">
        <div className="relative w-full max-w-[1140px] px-4 xl:px-0" style={{ minHeight: '1014px' }}>
          <div className="flex items-start justify-between pt-10 lg:pt-14 mb-10 lg:mb-12 animate-on-scroll">
            <div className="flex flex-col justify-center" style={{ width: '175px', height: '116px' }}>
              <span className="font-['Bon_Vivant'] leading-none font-normal italic" style={{ color: '#D0B580', fontSize: '52px' }}>Explore</span>
              <span className="font-sans font-semibold leading-snug tracking-wide" style={{ color: '#0D2038', fontSize: '28px' }}>Cities</span>
            </div>
            <div className="flex items-center gap-[20px]" style={{ width: '160px', height: '70px' }}>
              <button className="flex items-center justify-center rounded-full bg-[#F1F1F1] hover:bg-gray-200 border border-gray-200 transition-colors hover:scale-110 transform duration-300" style={{ width: '70px', height: '70px' }} aria-label="Previous"><ChevronLeft className="w-5 h-5 text-gray-500" /></button>
              <button className="flex items-center justify-center rounded-full bg-[#D0B580] hover:bg-[#c4a970] transition-colors shadow-md hover:scale-110 transform duration-300" style={{ width: '70px', height: '70px' }} aria-label="Next"><ChevronRight className="w-5 h-5 text-white" /></button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[40px]">
            {cities.map((city, i) => (
              <div key={i} className="w-full max-w-[360px] mx-auto sm:mx-0 cursor-pointer group animate-on-scroll" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-full overflow-hidden" style={{ height: '311px', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}>
                  <img src={city.image} alt={city.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="w-full flex flex-col justify-center px-6" style={{ height: '98px', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', background: 'rgba(13, 32, 56, 1)' }}>
                  <span className="text-white font-semibold text-[18px] leading-snug">{city.name}</span>
                  <span className="text-[13px] font-light mt-[4px]" style={{ color: 'rgba(255,255,255,0.65)' }}>{city.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ EXPLORE LATEST PROPERTY ══ */}
      <div className="w-full flex justify-center bg-white py-10 lg:py-16">
        <div className="relative w-full max-w-[1140px] px-4 xl:px-0">
          <div className="flex items-start justify-between mb-10 lg:mb-12 animate-on-scroll">
            <div className="flex flex-col justify-center" style={{ width: '329px', height: '116px' }}>
              <span className="font-['Bon_Vivant'] leading-none font-normal italic" style={{ color: '#D0B580', fontSize: '52px' }}>Explore</span>
              <span className="font-sans font-semibold leading-snug tracking-wide" style={{ color: '#0D2038', fontSize: '28px' }}>Latest Property</span>
            </div>
            <div className="flex items-center gap-[20px]" style={{ width: '160px', height: '70px' }}>
              <button className="flex items-center justify-center rounded-full bg-[#F1F1F1] hover:bg-gray-200 border border-gray-200 transition-colors hover:scale-110 transform duration-300" style={{ width: '70px', height: '70px' }} aria-label="Previous"><ChevronLeft className="w-5 h-5 text-gray-500" /></button>
              <button className="flex items-center justify-center rounded-full bg-[#D0B580] hover:bg-[#c4a970] transition-colors shadow-md hover:scale-110 transform duration-300" style={{ width: '70px', height: '70px' }} aria-label="Next"><ChevronRight className="w-5 h-5 text-white" /></button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[40px]">
            {properties.map((property, i) => (<PropertyCard key={i} property={property} index={i} />))}
          </div>
        </div>
      </div>

      {/* ══ EXPLORE OUR AGENTS SECTION ══ */}
      <div className="w-full flex justify-center bg-white py-10 lg:py-16">
        <div
          className="relative w-full max-w-[1138px] px-4 xl:px-0"
          style={{ minHeight: '498px' }}
        >
          <div className="flex items-start justify-between mb-10 lg:mb-[50px] animate-on-scroll">
            <div
              className="flex flex-col justify-center"
              style={{ width: '273px', height: '116px' }}
            >
              <span
                className="font-['Bon_Vivant'] leading-none font-normal italic"
                style={{ color: '#D0B580', fontSize: '52px' }}
              >
                Explore
              </span>
              <span
                className="font-sans font-semibold leading-snug tracking-wide"
                style={{ color: '#0D2038', fontSize: '28px' }}
              >
                Our Agents
              </span>
            </div>
            <div
              className="flex items-center gap-[20px]"
              style={{ width: '160px', height: '70px' }}
            >
              <button
                className="flex items-center justify-center rounded-full bg-[#F1F1F1] hover:bg-gray-200 border border-gray-200 transition-colors hover:scale-110 transform duration-300"
                style={{ width: '70px', height: '70px' }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-gray-500" />
              </button>
              <button
                className="flex items-center justify-center rounded-full bg-[#D0B580] hover:bg-[#c4a970] transition-colors shadow-md hover:scale-110 transform duration-300"
                style={{ width: '70px', height: '70px' }}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-[60px]">
            {agents.map((agent, i) => (
              <AgentCard key={i} agent={agent} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ══ ANIMATION STYLES ══ */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.6s ease-out;
        }
        .animate-slideUp {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

    </div>
  );
};

export default Section;