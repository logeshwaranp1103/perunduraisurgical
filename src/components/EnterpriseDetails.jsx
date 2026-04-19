import Reveal from './Reveal';

const EnterpriseDetails = () => {
  return (
    <section id="enterprise" className="bg-[#f8fafc] pt-4 pb-10 px-6 lg:px-12 font-['Inter']">
      <div className="max-w-7xl mx-auto">
        <Reveal animation="reveal-up">
          <div className="text-center mb-2">
            <span className="text-[#2563eb] text-base font-bold tracking-[0.4em] uppercase ml-[0.4em]">Associated Enterprise</span>
          </div>
        </Reveal>

        <Reveal animation="reveal-up">
          <div className="overflow-hidden rounded-[2rem] bg-[#ffffff] border border-[#e3e2e7]">

            {/* Main Bento Content */}
            <main className="p-6 md:p-10 lg:p-12 relative bg-[#ffffff]">
              {/* Branding Section */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-4">
                <div className="space-y-4">
                  {/* Logo */}
                  <div className="max-w-[280px]">
                    <img src={`${import.meta.env.BASE_URL}thiyash-logo.png`} alt="Thiyash Enterprise" className="w-full h-auto" />
                  </div>
                  <p className="text-[#43474f] text-sm uppercase tracking-[0.15em] font-semibold">
                    Manufacturer of Housekeeping Products
                  </p>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <div className="bg-[#ffdad6] text-[#93000e] px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-2 h-fit shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M12 15l-2 5l-2-5l-4-4l5-2l5-2l5 2l5 2l-4 4z" />
                      <circle cx="12" cy="8" r="5" />
                    </svg>
                    ISO Certified Manufacturing
                  </div>
                </div>
              </div>

              {/* Bento Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 md:items-start gap-2 md:gap-12">
                {/* Left Column: Capabilities & Industries */}
                <div className="md:col-span-7 flex flex-col gap-6 md:gap-8">
                  {/* Core Capabilities — now 3 cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
                    <div className="flex flex-row items-center gap-3 group">
                      <div className="w-10 h-10 min-w-[40px] flex items-center justify-center bg-[#e8e7ed] rounded-xl group-hover:bg-[#00193c] transition-colors duration-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#00193c] group-hover:text-white transition-colors">
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          <path d="M5 11h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V11z" />
                          <circle cx="12" cy="16" r="1" />
                        </svg>
                      </div>
                       <h3 className="font-['Outfit'] font-bold text-[13px] sm:text-base lg:text-lg text-[#00193c]">Medical Hygiene</h3>
                    </div>
                    <div className="flex flex-row items-center gap-3 group">
                      <div className="w-10 h-10 min-w-[40px] flex items-center justify-center bg-[#e8e7ed] rounded-xl group-hover:bg-[#00193c] transition-colors duration-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#00193c] group-hover:text-white transition-colors">
                          <path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" />
                        </svg>
                      </div>
                      <h3 className="font-['Outfit'] font-bold text-base sm:text-lg text-[#00193c]">Industrial Reliability</h3>
                    </div>
                    {/* ══ ZONE 2a: 3rd Feature Card ══ */}
                    <div className="flex flex-row items-center gap-3 group">
                      <div className="w-10 h-10 min-w-[40px] flex items-center justify-center bg-[#e8e7ed] rounded-xl group-hover:bg-[#00193c] transition-colors duration-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#00193c] group-hover:text-white transition-colors">
                          <rect x="1" y="3" width="15" height="13" />
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                          <circle cx="5.5" cy="18.5" r="2.5" />
                          <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                      </div>
                      <h3 className="font-['Outfit'] font-bold text-base sm:text-lg text-[#00193c]">Pan India Delivery</h3>
                    </div>
                    {/* ══ 4th Feature Card ══ */}
                    <div className="flex flex-row items-center gap-3 group">
                      <div className="w-10 h-10 min-w-[40px] flex items-center justify-center bg-[#e8e7ed] rounded-xl group-hover:bg-[#00193c] transition-colors duration-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#00193c] group-hover:text-white transition-colors">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4l3 3" />
                        </svg>
                      </div>
                      <h3 className="font-['Outfit'] font-bold text-base sm:text-lg text-[#00193c]">Quality Assurance</h3>
                    </div>
                  </div>

                  {/* Industries Served */}
                  <div className="space-y-6">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#747781] font-bold">Industries Served</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['Hospitals', 'Hotels', 'Resorts', 'Banks', 'Institutions', 'Multiplexes'].map((industry) => (
                        <span key={industry} className="px-3 py-2.5 bg-[#f4f3f8] text-[#1a1b1f] text-sm font-semibold rounded-full hover:bg-[#e3e2e7] transition-colors cursor-default border border-[#c4c6d1]/20 text-center">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ══ ZONE 1: Stats Row ══ */}
                  <div className="grid grid-cols-3 gap-0 border border-[#e3e2e7] rounded-2xl overflow-hidden">
                    <div className="flex flex-col items-center justify-center py-4 sm:py-6 px-2 sm:px-4 text-center border-r border-[#e3e2e7]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6 text-[#00193c] mb-1 sm:mb-2">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                        <path d="M9 22v-4h6v4" />
                        <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
                      </svg>
                      <span className="font-['Outfit'] font-extrabold text-lg sm:text-2xl text-[#00193c] leading-none">500+</span>
                      <span className="text-[#747781] text-[9px] sm:text-[11px] font-semibold uppercase tracking-widest mt-1">Clients</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-4 sm:py-6 px-2 sm:px-4 text-center border-r border-[#e3e2e7]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6 text-[#00193c] mb-1 sm:mb-2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span className="font-['Outfit'] font-extrabold text-lg sm:text-2xl text-[#00193c] leading-none">10+</span>
                      <span className="text-[#747781] text-[9px] sm:text-[11px] font-semibold uppercase tracking-widest mt-1">Years Experience</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-4 sm:py-6 px-2 sm:px-4 text-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-6 sm:h-6 text-[#00193c] mb-1 sm:mb-2">
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                      <span className="font-['Outfit'] font-extrabold text-lg sm:text-2xl text-[#00193c] leading-none">Pan India</span>
                      <span className="text-[#747781] text-[9px] sm:text-[11px] font-semibold uppercase tracking-widest mt-1">Supply Network</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Contact Card */}
                <div className="md:col-span-5 relative md:-mt-16">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00193c]/5 rounded-full blur-3xl -z-10"></div>
                  <div className="bg-white p-8 rounded-2xl border border-[#c4c6d1]/30 flex flex-col gap-8 relative overflow-hidden">
                    {/* Red Accent Bar */}
                    <div className="absolute top-0 right-0 w-1.5 h-full bg-[#b51a1e]"></div>

                    <div className="space-y-2">
                      <h5 className="text-[#00193c] font-['Outfit'] font-bold text-2xl">K. Ragavendran B.E.</h5>
                      <span className="text-[#b51a1e] text-xs font-bold uppercase tracking-widest">Proprietor</span>
                    </div>

                    <div className="space-y-6">
                      <a className="flex items-center gap-4 group no-underline" style={{ textDecoration: 'none' }} href="tel:9865271371">
                        <div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center group-hover:bg-[#b51a1e] transition-colors shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#b51a1e] group-hover:text-white transition-colors">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <span className="text-[#1a1b1f] font-bold text-lg group-hover:text-[#b51a1e] transition-colors font-['Outfit']">98652 71371</span>
                      </a>
                      <a className="flex items-center gap-4 group no-underline" style={{ textDecoration: 'none' }} href="mailto:thiyashenterprise@gmail.com">
                        <div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center group-hover:bg-[#b51a1e] transition-colors shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#b51a1e] group-hover:text-white transition-colors">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <span className="text-[#1a1b1f] font-medium group-hover:text-[#b51a1e] transition-colors truncate font-['Inter']">thiyashenterprise@gmail.com</span>
                      </a>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center shrink-0 group-hover:bg-[#b51a1e] transition-colors">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#b51a1e] group-hover:text-white transition-colors">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </div>
                        <p className="text-[#43474f] text-sm leading-relaxed pt-2 group-hover:text-[#b51a1e] transition-colors">
                          88/11, Thendral Nagar,<br />
                          Chenniyavalasu Road,<br />
                          Perundurai - 638 052.
                        </p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/919865271371?text=${encodeURIComponent("Hello, I'm interested in Thiyash Enterprise's housekeeping products. Could you please provide more details about your products and pricing?")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                      className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#1ebe5d] transition-all active:scale-95 duration-200 mt-4 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.132 1.528 5.88L0 24l6.282-1.501A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.875 9.875 0 01-5.031-1.378l-.361-.214-3.732.893.924-3.638-.235-.374A9.856 9.856 0 012.106 12C2.106 6.58 6.58 2.106 12 2.106c5.419 0 9.894 4.474 9.894 9.894 0 5.419-4.475 9.894-9.894 9.894z" />
                      </svg>
                      Inquire on WhatsApp
                    </a>

                  </div>
                </div>
              </div>

            </main>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default EnterpriseDetails;
