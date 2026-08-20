import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, ChevronUp, ChevronDown,
  MapPin, DollarSign, Home as HomeIcon,
  User, LogOut, Menu
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 5;
  
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  const userMenuRef = useRef(null);
  
  const { isLoggedIn, userName, logout } = useAuth();

  // Close user menu on click outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };

  const handleNextSlide = () => setCurrentSlide((p) => (p % totalSlides) + 1);
  const handlePrevSlide = () => setCurrentSlide((p) => (p === 1 ? totalSlides : p - 1));

  const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
  ];

  const LEFT_W = 370;

  return (
    <div className="relative w-full bg-white overflow-x-hidden flex flex-col items-center justify-start pb-24">

      {/* Hero Container */}
      <div
        className="relative w-full max-w-[1440px] overflow-hidden shadow-2xl"
        style={{ height: '850px', background: 'rgba(13,32,56,1)' }}
      >

        {/* Background image - Full width on mobile */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-700 z-0"
          style={{
            backgroundImage: `url(${images[currentSlide - 1]})`,
          }}
        >
          <div className="absolute inset-0 bg-[#0D2038]/25 pointer-events-none" />
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '320px',
              background: 'linear-gradient(to top, rgba(13,32,56,0.65) 0%, transparent 100%)',
            }}
          />
        </div>

        {/* Navbar */}
        <header
          className="absolute top-0 left-0 w-full z-30 flex items-stretch"
          style={{
            height: '90px',
            borderBottom: '1px solid rgba(255,255,255,0.10)',
          }}
        >
          {/* Left nav cell - Hidden on mobile */}
          <div
            className="hidden md:flex items-center gap-3 px-8 flex-shrink-0"
            style={{
              width: `${LEFT_W}px`,
              borderRight: '1px solid rgba(255,255,255,0.10)',
              background: 'rgba(13,32,56,1)',
            }}
          >
            <div className="grid grid-cols-2 gap-[3px] cursor-pointer flex-shrink-0">
              <span className="w-[5px] h-[5px] rounded-[1px] bg-white" />
              <span className="w-[5px] h-[5px] rounded-[1px] bg-white" />
              <span className="w-[5px] h-[5px] rounded-[1px] bg-white" />
              <span className="w-[5px] h-[5px] rounded-[1px] bg-white" />
            </div>
            <span className="font-sans text-[13px] font-medium text-white tracking-[3px] uppercase">
              Menu
            </span>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden items-center px-4 flex-shrink-0">
            <Menu className="w-5 h-5 text-white cursor-pointer" />
          </div>

          {/* Logo - Center */}
          <div className="flex-1 flex items-center justify-center">
            <span
              className="font-serif font-bold text-white tracking-[6px] uppercase select-none"
              style={{ fontSize: '26px', letterSpacing: '6px' }}
            >
              MEN
              <span className="relative inline-block">
                E
                <span
                  className="absolute bg-[#D0B580]"
                  style={{ width: '20px', height: '2px', bottom: '-4px', left: '0' }}
                />
              </span>
              TO
            </span>
          </div>

          {/* Right cells */}
          <div className="flex items-stretch flex-shrink-0">
            {/* Phone - Hidden on mobile */}
            <div
              className="hidden md:flex items-center px-6 lg:px-8"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.10)' }}
            >
              <span className="text-white/75 font-sans text-[15px] whitespace-nowrap">
                +91 8431953397
              </span>
            </div>
            {/* Email - Hidden on mobile */}
            <div
              className="hidden lg:flex items-center px-6 lg:px-8"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.10)' }}
            >
              <span className="text-white/75 font-sans text-[15px] whitespace-nowrap">
                contact@realestate.com
              </span>
            </div>
            
            {/* User Icon / Login */}
            <div
              className="flex items-center px-4 md:px-6 relative"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.10)' }}
            >
              {isLoggedIn ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#D0B580] flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {userName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-white/90 text-sm hidden md:inline">{userName}</span>
                  </button>

                  {/* User Dropdown Menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 top-12 bg-white rounded-xl shadow-2xl w-48 py-2 border border-gray-100 animate-scaleIn">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{userName}</p>
                        <p className="text-xs text-gray-500 truncate">Guest</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
                >
                  <User className="w-5 h-5 text-white group-hover:text-[#D0B580] transition-colors" />
                  <span className="text-white/75 text-sm hidden md:inline group-hover:text-white transition-colors">Login</span>
                </Link>
              )}
            </div>

            {/* Search icon */}
            <div
              className="flex items-center px-4 md:px-6"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.10)' }}
            >
              <Search className="w-5 h-5 text-white cursor-pointer hover:text-[#D0B580] transition-colors" />
            </div>
          </div>
        </header>

        {/* Left Dark Panel - Hidden on mobile */}
        <div
          className="absolute top-0 left-0 h-full z-20 flex-shrink-0 hidden md:block"
          style={{ width: `${LEFT_W}px`, background: 'rgba(13,32,56,1)' }}
        >
          <div
            className="absolute flex flex-col items-center"
            style={{ top: '360px', left: '48px' }}
          >
            <button
              onClick={handlePrevSlide}
              className="text-white hover:text-[#D0B580] transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronUp className="w-5 h-5" />
            </button>

            <div
              className="w-px mt-2"
              style={{ height: '56px', background: 'rgba(255,255,255,0.30)' }}
            />

            <span
              className="font-sans text-white my-3"
              style={{ fontSize: '12px', letterSpacing: '2px' }}
            >
              {currentSlide}/{totalSlides}
            </span>

            <div
              className="w-px mb-2"
              style={{ height: '56px', background: 'rgba(255,255,255,0.30)' }}
            />

            <button
              onClick={handleNextSlide}
              className="text-white hover:text-[#D0B580] transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Slide Counter */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 md:hidden">
          <button
            onClick={handlePrevSlide}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          <span className="text-white/70 text-xs font-medium">
            {currentSlide}/{totalSlides}
          </span>
          <button
            onClick={handleNextSlide}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Next Slide"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Text Content - Mobile responsive */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            bottom: '60px',
            left: '20px',
            right: '20px',
            maxWidth: '100%',
          }}
        >
          <div
            className="font-['Bon_Vivant'] font-normal italic mb-1"
            style={{
              color: '#D0B580',
              fontSize: 'clamp(28px, 6vw, 60px)',
              lineHeight: '100%',
              letterSpacing: '-0.22px',
            }}
          >
            Signature Homes
          </div>

          <div
            className="font-['Bon_Vivant'] font-normal text-white"
            style={{
              fontSize: 'clamp(20px, 4.5vw, 60px)',
              lineHeight: '108%',
              letterSpacing: '-0.22px',
            }}
          >
            All homes are for a lifetime.<br />
            This one is once in a lifetime.
          </div>
        </div>

      </div>

      {/* Search Filter Bar */}
      <div className="relative mt-8 lg:mt-12 z-40 w-full max-w-[1140px] px-4 mx-auto">
        <div className="w-full bg-white rounded-[30px] shadow-2xl flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-6 lg:py-0 lg:h-[120px] gap-6 lg:gap-0">

          <div className="w-full lg:w-[878px] grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[57px] items-center">

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] rounded-full bg-[#F4F6F8] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#0D2038]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0D2038] text-base lg:text-lg">Location</h4>
                <p className="text-gray-400 text-sm">Ahmedabad, India</p>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 relative md:border-l md:border-gray-200 md:pl-6">
              <div className="w-[60px] h-[60px] rounded-full bg-[#F4F6F8] flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6 text-[#0D2038]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0D2038] text-base lg:text-lg">Price</h4>
                <p className="text-gray-400 text-sm">$1000 - $10,000</p>
              </div>
            </div>

            {/* Type */}
            <div className="flex items-center gap-4 relative md:border-l md:border-gray-200 md:pl-6">
              <div className="w-[60px] h-[60px] rounded-full bg-[#F4F6F8] flex items-center justify-center shrink-0">
                <HomeIcon className="w-6 h-6 text-[#0D2038]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0D2038] text-base lg:text-lg">Type of Property</h4>
                <p className="text-gray-400 text-sm">Apartment</p>
              </div>
            </div>

          </div>

          {/* Search button */}
          <button className="w-full lg:w-[139px] h-[56px] bg-[#D0B580] hover:opacity-90 text-white rounded-[10px] flex items-center justify-center gap-[10px] px-[30px] py-[16px] transition-all shadow-md shrink-0 cursor-pointer">
            <Search className="w-5 h-5 text-white" />
            <span className="font-medium text-base">Search</span>
          </button>

        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>

    </div>
  );
};

export default Hero;