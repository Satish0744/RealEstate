import React from 'react';

/* ─── FOOTER LINK COLUMNS ─── */
const footerColumns = [
  {
    heading: 'About',
    links: ['About', 'Features', 'Works', 'Career'],
  },
  {
    heading: 'Company',
    links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
  },
  {
    heading: 'Types',
    links: ['Apartment', 'Villa & Condo', 'Family House', 'House & Villa'],
  },
  {
    heading: 'Links',
    links: ['Contact Us', 'Pricing', 'Submission', 'Pricing'],
  },
];

/* ─── FOOTER ───
   Full layout:    1440 × 515
   Gold banner:    1440 × 156  (6483 - 6327)
   Dark section:   1440 × 359
*/
const Footer = () => (
  <footer className="w-full" style={{ maxWidth: '1440px', margin: '0 auto' }}>

    {/* ══════════════════════════════════════════
        GOLD CTA BANNER
        Height ≈ 156px  |  bg: #D0B580
    ══════════════════════════════════════════ */}
    <div
      className="w-full flex items-center justify-between px-4 xl:px-[150px]"
      style={{
        minHeight: '156px',
        background: '#D0B580',
      }}
    >
      {/* "Do you have Questions?" — 740 × 46 */}
      <h2
        className="text-white font-['Georgia',serif] font-normal leading-none tracking-tight"
        style={{
          maxWidth: '740px',
          fontSize: 'clamp(28px, 4vw, 46px)',
          lineHeight: '46px',
        }}
      >
        Do you have Questions ?
      </h2>

      {/* "Connect Us Today" button — 212 × 56, border-radius 10px */}
      <button
        className="bg-white hover:bg-gray-50 transition-colors font-sans font-normal text-[15px] flex-shrink-0 cursor-pointer"
        style={{
          width: '212px',
          height: '56px',
          borderRadius: '10px',
          paddingTop: '16px',
          paddingBottom: '16px',
          paddingLeft: '50px',
          paddingRight: '50px',
          color: '#0D2038',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          whiteSpace: 'nowrap',
        }}
      >
        Connect Us Today
      </button>
    </div>

    {/* ══════════════════════════════════════════
        DARK FOOTER SECTION
        Height: 359px  |  bg: rgba(13, 32, 56, 1)
    ══════════════════════════════════════════ */}
    <div
      className="w-full flex flex-col justify-between px-4 xl:px-[150px] pt-[50px] pb-[40px]"
      style={{
        minHeight: '359px',
        background: 'rgba(13, 32, 56, 1)',
      }}
    >

      {/* ── Link columns container — 1064 × 204 ── */}
      {/* 4 cols × 266px = 1064px when maxWidth set */}
      <div
        className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10"
        style={{ maxWidth: '1064px', minHeight: '204px' }}
      >
        {footerColumns.map((col) => (
          <div key={col.heading} className="flex flex-col gap-[18px]">

            {/* Column heading */}
            <span
              className="font-sans font-semibold text-[15px] leading-snug"
              style={{ color: '#FFFFFF' }}
            >
              {col.heading}
            </span>

            {/* Links */}
            <ul className="flex flex-col gap-[14px]">
              {col.links.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="font-sans font-light text-[13px] leading-snug transition-colors hover:text-[#D0B580]"
                    style={{ color: 'rgba(255,255,255,0.60)', textDecoration: 'none' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div
        className="w-full h-px mt-10 mb-6"
        style={{ background: 'rgba(255,255,255,0.10)', maxWidth: '1140px' }}
      />

      {/* ── Copyright bar — 1140 × 25 ── */}
      <div
        className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        style={{ maxWidth: '1140px', minHeight: '25px' }}
      >
        {/* Left */}
        <span
          className="font-sans font-semibold text-[13px] leading-none"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          © Copyright 2022, All Rights Reserved
        </span>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="font-sans font-light text-[13px] leading-none hover:text-[#D0B580] transition-colors"
            style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-sans font-light text-[13px] leading-none hover:text-[#D0B580] transition-colors"
            style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}
          >
            Terms & Conditions
          </a>
        </div>
      </div>

    </div>

  </footer>
);

export default Footer;