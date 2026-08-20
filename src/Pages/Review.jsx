import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

/* ─── TESTIMONIALS DATA ─── */
const testimonials = [
  {
    review:
      '"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."',
    name: 'Leslie Alexander',
    role: 'Founder',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
    stars: 5,
  },
  {
    review:
      '"Simply the best. Better than all the rest. I\'d recommend this product to beginners and advanced users."',
    name: 'Jacob Jones',
    role: 'Co-Founder',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80',
    stars: 5,
  },
  {
    review:
      '"I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and faster and easier to work."',
    name: 'Jenny Wilson',
    role: 'Chief Marketing Officer',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80',
    stars: 5,
  },
];

/* ─── STAR RATING ─── */
const StarRating = ({ count = 5 }) => (
  <div className="flex items-center gap-[3px] mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        className="w-[18px] h-[18px]"
        fill="#D0B580"
        stroke="none"
      />
    ))}
  </div>
);

/* ─── SINGLE REVIEW CARD ───
   Width: 360 | Height: 300
   White bg, subtle shadow, rounded-[16px]
*/
const ReviewCard = ({ testimonial, index }) => (
  <div
    className="flex flex-col justify-between bg-white rounded-[16px] px-6 py-6 w-full max-w-[360px] mx-auto sm:mx-0 animate-on-scroll group hover:-translate-y-2 transition-all duration-500"
    style={{
      height: '300px',
      boxShadow: '0px 4px 30px 0px rgba(0, 0, 0, 0.06)',
      animationDelay: `${index * 150}ms`
    }}
  >
    {/* Stars */}
    <StarRating count={testimonial.stars} />

    {/* Review text */}
    <p
      className="text-[#0D2038] text-[13px] leading-[1.75] font-light flex-1 group-hover:text-[#0D2038] transition-colors duration-300"
      style={{ color: 'rgba(13, 32, 56, 0.80)' }}
    >
      {testimonial.review}
    </p>

    {/* Divider */}
    <div className="w-full h-px bg-gray-100 my-4" />

    {/* Agent row */}
    <div className="flex items-center gap-3">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0 group-hover:border-[#D0B580] transition-colors duration-300"
      />
      <div className="flex flex-col">
        <span className="text-[#0D2038] font-semibold text-[14px] leading-snug group-hover:text-[#D0B580] transition-colors duration-300">
          {testimonial.name}
        </span>
        <span
          className="text-[12px] font-light"
          style={{ color: 'rgba(13, 32, 56, 0.50)' }}
        >
          {testimonial.role}
        </span>
      </div>
    </div>
  </div>
);

/* ─── REVIEW / TESTIMONIALS SECTION ───
   Full layout: 1440 × 566
   Title:       360 × 116  | left: 150px
   Nav arrows:  160 × 70   | left: 1130px
   Cards wrap:  1140 × 300 | left: 150px
*/
const Review = () => {
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
    <div
      className="w-full flex justify-center"
      style={{
        background: 'rgba(246, 247, 251, 1)',
        minHeight: '566px',
      }}
    >
      <div className="w-full max-w-[1440px] px-4 xl:px-[150px] py-10 lg:py-[50px]">

        {/* ── Header row ── */}
        <div className="flex items-start justify-between mb-10 lg:mb-[54px] animate-on-scroll">

          {/* "Explore Our Testimonials" title — 360 × 116 */}
          <div
            className="flex flex-col justify-center"
            style={{ width: '360px', height: '116px' }}
          >
            {/* "Explore" — gold italic script */}
            <span
              className="font-['Bon_Vivant'] leading-none font-normal italic"
              style={{ color: '#D0B580', fontSize: '52px' }}
            >
              Explore
            </span>
            {/* "Our Testimonials" — dark bold */}
            <span
              className="font-sans font-semibold leading-snug tracking-wide"
              style={{ color: '#0D2038', fontSize: '28px' }}
            >
              Our Testimonials
            </span>
          </div>

          {/* Navigation arrows — 160 × 70 */}
          <div
            className="flex items-center gap-[20px]"
            style={{ width: '160px', height: '70px' }}
          >
            {/* Left — light grey */}
            <button
              className="flex items-center justify-center rounded-full bg-[#EBEBEB] hover:bg-gray-200 border border-gray-200 transition-all duration-300 hover:scale-110 transform"
              style={{ width: '70px', height: '70px' }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>
            {/* Right — gold */}
            <button
              className="flex items-center justify-center rounded-full bg-[#D0B580] hover:bg-[#c4a970] transition-all duration-300 hover:scale-110 transform shadow-md"
              style={{ width: '70px', height: '70px' }}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

        </div>

        {/* ── Cards container — 1140 × 300, 3 columns, gap 30px ── */}
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[30px]"
          style={{ maxWidth: '1140px' }}
        >
          {testimonials.map((t, i) => (
            <ReviewCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        {/* ── Bottom decorative element ── */}
        <div className="w-full flex justify-center mt-12 animate-on-scroll">
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 rounded-full bg-[#D0B580] opacity-50"></div>
            <div className="w-24 h-1 rounded-full bg-[#D0B580]"></div>
            <div className="w-12 h-1 rounded-full bg-[#D0B580] opacity-50"></div>
          </div>
        </div>

      </div>

      {/* ── ANIMATION STYLES ── */}
      <style jsx>{`
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

export default Review;