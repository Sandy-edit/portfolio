import React from "react";
import './Footer.css';

export function Footer() {
  return (
    <footer className="w-full bg-[#0e1614] text-[#f4efe6] pt-16 pb-8 px-8 md:px-16 border-t border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Column 1: Brand Info (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#c5a059] mb-2">
              THE OWL'S VAULT
            </h3>
            <h4 className="text-2xl font-serif font-bold text-[#f4efe6] mb-3">
              Play Deliberately
            </h4>
            <p className="text-xs text-stone-400 max-w-sm mb-6 leading-relaxed">
              Elevating the tabletop experience for the discerning Indian player and collector.
            </p>

            {/* Social Icons Placeholder */}
            <div className="flex items-center gap-3">
              {["IG", "TW", "YT", "FB", "PIN"].map((social, index) => (
                <div
                  key={index}
                  className="w-9 h-9 rounded-full bg-[#14221f] border border-[#c5a059]/30 flex items-center justify-center text-[10px] font-bold text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0e1614] transition-colors cursor-pointer"
                >
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Destinations / Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#c5a059] mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li><a href="#collection" className="hover:text-[#c5a059] transition-colors">Complete Collection</a></li>
              <li><a href="#strategy" className="hover:text-[#c5a059] transition-colors">Strategy</a></li>
              <li><a href="#family" className="hover:text-[#c5a059] transition-colors">Family</a></li>
              <li><a href="#party" className="hover:text-[#c5a059] transition-colors">Party</a></li>
              <li><a href="#new" className="hover:text-[#c5a059] transition-colors">New Arrivals</a></li>
              <li><a href="#story" className="hover:text-[#c5a059] transition-colors">Our Story</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#c5a059] mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li><a href="#contact" className="hover:text-[#c5a059] transition-colors">Contact Us</a></li>
              <li><a href="#shipping" className="hover:text-[#c5a059] transition-colors">Shipping Policy</a></li>
              <li><a href="#returns" className="hover:text-[#c5a059] transition-colors">Returns & Refunds</a></li>
              <li><a href="#faqs" className="hover:text-[#c5a059] transition-colors">FAQs</a></li>
              <li className="pt-2 text-[11px] text-[#c5a059]">support@owlsvault.com</li>
            </ul>
          </div>

          {/* Column 4: Stay Updated (Newsletter) */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#c5a059] mb-4">
              Stay Updated
            </h4>
            <p className="text-xs text-stone-400 mb-4 leading-relaxed">
              New drops, game nights & exclusive offers straight to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#14221f] border border-[#c5a059]/30 text-[#f4efe6] text-xs px-3.5 py-2.5 rounded-lg focus:outline-none focus:border-[#c5a059]"
              />
              <button
                style={{
                  backgroundColor: "#c5a059",
                  boxShadow: "0 4px 12px rgba(197, 160, 89, 0.25)",
                }}
                className="w-full text-[#0e1614] text-xs font-bold py-2.5 rounded-lg transition-opacity hover:opacity-90 cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>

        {/* WhatsApp Community Banner Bar */}
        <div className="bg-[#14221f] border border-[#c5a059]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-center justify-center shrink-0 mx-auto md:mx-0">
              <svg className="w-6 h-6 text-[#c5a059] fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#f4efe6]">Join Our WhatsApp Community</h4>
              <p className="text-xs text-stone-400 mt-0.5">Game nights, new arrivals, exclusive member deals & 1,000+ fellow board game & book lovers across India.</p>
            </div>
          </div>
          <button class="buttn">
  Join The Community
</button>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 pt-6 border-t border-[#f4efe6]/10 gap-4">
          <p>© 2026 The Owl's Vault · Serving all of India, based in Bengaluru since 2025</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-[#c5a059] transition-colors">PRIVACY</a>
            <a href="#terms" className="hover:text-[#c5a059] transition-colors">TERMS</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;