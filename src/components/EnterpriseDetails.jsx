import Reveal from './Reveal';

const EnterpriseDetails = () => {
  return (
    <section id="enterprise" className="bg-[#f8fafc] pt-10 pb-16 px-6 lg:px-12 font-['Inter']">
      <div className="max-w-7xl mx-auto">
        <Reveal animation="reveal-up">
          <div className="text-center mb-6">
            <span className="text-[#2563eb] text-base font-bold tracking-[0.4em] uppercase ml-[0.4em]">Associated Enterprise</span>
          </div>
        </Reveal>

        <Reveal animation="reveal-up">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl bg-[#ffffff] border border-[#e3e2e7]">

            {/* Main Bento Content */}
            <main className="p-8 md:p-12 lg:p-16 relative bg-[#ffffff]">
              {/* Branding Section */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
                <div className="space-y-4">
                  {/* Logo */}
                  <div className="max-w-[280px]">
                    <img src={`${import.meta.env.BASE_URL}t-logo.png`} alt="Thiyash Enterprise" className="w-full h-auto" />
                  </div>
                  <p className="text-[#43474f] text-sm uppercase tracking-[0.15em] font-semibold">
                    Manufacturer of Housekeeping Products
                  </p>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <div className="bg-[#ffdad6] text-[#93000e] px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-2 h-fit">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    ISO Certified Manufacturing
                  </div>
                </div>
              </div>

              {/* Bento Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 md:items-start gap-12">
                {/* Left Column: Capabilities & Industries */}
                <div className="md:col-span-7 flex flex-col gap-8">
                  {/* Core Capabilities — now 3 cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-4 group">
                      <div className="w-14 h-14 flex items-center justify-center bg-[#e8e7ed] rounded-2xl group-hover:bg-[#00193c] transition-colors duration-300">
                        <span className="material-symbols-outlined text-[#00193c] group-hover:text-white transition-colors">sanitizer</span>
                      </div>
                      <h3 className="font-['Outfit'] font-bold text-lg text-[#00193c]">Medical-Grade Hygiene</h3>
                      <p className="text-[#43474f] text-sm leading-relaxed">Engineered for surgical environments where sterility is non-negotiable.</p>
                    </div>
                    <div className="flex flex-col gap-4 group">
                      <div className="w-14 h-14 flex items-center justify-center bg-[#e8e7ed] rounded-2xl group-hover:bg-[#00193c] transition-colors duration-300">
                        <span className="material-symbols-outlined text-[#00193c] group-hover:text-white transition-colors">precision_manufacturing</span>
                      </div>
                      <h3 className="font-['Outfit'] font-bold text-lg text-[#00193c]">Industrial Reliability</h3>
                      <p className="text-[#43474f] text-sm leading-relaxed">Consistent performance under high-volume demand and rigorous usage.</p>
                    </div>
                    {/* ══ ZONE 2a: 3rd Feature Card ══ */}
                    <div className="flex flex-col gap-4 group">
                      <div className="w-14 h-14 flex items-center justify-center bg-[#e8e7ed] rounded-2xl group-hover:bg-[#00193c] transition-colors duration-300">
                        <span className="material-symbols-outlined text-[#00193c] group-hover:text-white transition-colors">local_shipping</span>
                      </div>
                      <h3 className="font-['Outfit'] font-bold text-lg text-[#00193c]">Pan India Delivery</h3>
                      <p className="text-[#43474f] text-sm leading-relaxed">Reliable dispatch to institutions across Tamil Nadu and beyond — on time, every time.</p>
                    </div>
                  </div>

                  {/* Industries Served */}
                  <div className="space-y-6">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#747781] font-bold">Industries Served</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {['Hospitals', 'Hotels', 'Resorts', 'Banks', 'Institutions', 'Multiplexes'].map((industry) => (
                        <span key={industry} className="px-3 py-2.5 bg-[#f4f3f8] text-[#1a1b1f] text-sm font-semibold rounded-full hover:bg-[#e3e2e7] transition-colors cursor-default border border-[#c4c6d1]/20 text-center">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ══ ZONE 1: Stats Row ══ */}
                  <div className="grid grid-cols-3 gap-0 border border-[#e3e2e7] rounded-2xl overflow-hidden">
                    <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
                      <span className="material-symbols-outlined text-[#00193c] text-2xl mb-2">apartment</span>
                      <span className="font-['Outfit'] font-extrabold text-2xl text-[#00193c] leading-none">500+</span>
                      <span className="text-[#747781] text-[11px] font-semibold uppercase tracking-widest mt-1">Clients</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-6 px-4 text-center border-l border-r border-[#e3e2e7]">
                      <span className="material-symbols-outlined text-[#00193c] text-2xl mb-2">calendar_month</span>
                      <span className="font-['Outfit'] font-extrabold text-2xl text-[#00193c] leading-none">10+</span>
                      <span className="text-[#747781] text-[11px] font-semibold uppercase tracking-widest mt-1">Years Experience</span>
                    </div>
                    <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
                      <span className="material-symbols-outlined text-[#00193c] text-2xl mb-2">local_shipping</span>
                      <span className="font-['Outfit'] font-extrabold text-2xl text-[#00193c] leading-none">Pan India</span>
                      <span className="text-[#747781] text-[11px] font-semibold uppercase tracking-widest mt-1">Supply Network</span>
                    </div>
                  </div>

                </div>

                {/* Right Column: Contact Card */}
                <div className="md:col-span-5 relative">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00193c]/5 rounded-full blur-3xl -z-10"></div>
                  <div className="bg-white p-8 rounded-2xl border border-[#c4c6d1]/30 shadow-xl flex flex-col gap-8 relative overflow-hidden">
                    {/* Red Accent Bar */}
                    <div className="absolute top-0 right-0 w-1.5 h-full bg-[#b51a1e]"></div>

                    <div className="space-y-2">
                      <h5 className="text-[#00193c] font-['Outfit'] font-bold text-2xl">K. Ragavendran B.E.</h5>
                      <span className="text-[#b51a1e] text-xs font-bold uppercase tracking-widest">Proprietor</span>
                    </div>

                    <div className="space-y-6">
                      <a className="flex items-center gap-4 group no-underline" style={{ textDecoration: 'none' }} href="tel:9865271371">
                        <div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center group-hover:bg-[#b51a1e] transition-colors">
                          <span className="material-symbols-outlined text-[#b51a1e] group-hover:text-white text-xl">call</span>
                        </div>
                        <span className="text-[#1a1b1f] font-bold text-lg group-hover:text-[#b51a1e] transition-colors font-['Outfit']">98652 71371</span>
                      </a>
                      <a className="flex items-center gap-4 group no-underline" style={{ textDecoration: 'none' }} href="mailto:thiyashenterprise@gmail.com">
                        <div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center group-hover:bg-[#b51a1e] transition-colors">
                          <span className="material-symbols-outlined text-[#b51a1e] group-hover:text-white text-xl">mail</span>
                        </div>
                        <span className="text-[#1a1b1f] font-medium group-hover:text-[#b51a1e] transition-colors truncate font-['Inter']">thiyashenterprise@gmail.com</span>
                      </a>
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center shrink-0 group-hover:bg-[#b51a1e] transition-colors">
                          <span className="material-symbols-outlined text-[#b51a1e] group-hover:text-white text-xl">location_on</span>
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
                      className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#1ebe5d] transition-all active:scale-95 duration-200 mt-4 shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-2"
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
