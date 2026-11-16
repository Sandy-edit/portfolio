import React from "react";
import './Footer.css';

export function Community() {
  return (
    <section className="w-full bg-[#0e1614] py-20 px-8 md:px-16 border-t border-[#c5a059]/20">
      <div className="max-w-6xl mx-auto bg-[#14221f] border border-[#c5a059]/30 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c5a059] mb-3 block">
              THE COLLECTOR'S CIRCLE
            </span>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#f4efe6] leading-tight mb-6">
              Where rare editions meet true enthusiasts.
            </h2>

            <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-8">
              "A truly great game commands your attention, pulling you out of the digital ether and into the tactile present." Join over 1,000+ Indian collectors and gamers getting first access to every new vault drop.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-[#0e1614] border border-[#c5a059]/30 px-4 py-2 rounded-xl text-xs font-semibold text-[#f4efe6]">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                Early Drop Access
              </div>
              <div className="flex items-center gap-2 bg-[#0e1614] border border-[#c5a059]/30 px-4 py-2 rounded-xl text-xs font-semibold text-[#f4efe6]">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                Member-Only Deals
              </div>
              <div className="flex items-center gap-2 bg-[#0e1614] border border-[#c5a059]/30 px-4 py-2 rounded-xl text-xs font-semibold text-[#f4efe6]">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                Strategy Swaps
              </div>
            </div>

         
        <button class="buttn1">Join The Community</button>

          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#0e1614] border border-[#c5a059]/30 rounded-2xl p-6">
              <div className="text-3xl font-serif font-bold text-[#c5a059] mb-1">1,000+</div>
              <div className="text-sm font-semibold text-[#f4efe6]">Active Collectors</div>
              <p className="text-xs text-stone-400 mt-1">Trading strategy tips and securing limited vault arrivals across India.</p>
            </div>

            <div className="bg-[#0e1614] border border-[#c5a059]/30 rounded-2xl p-6">
              <div className="text-3xl font-serif font-bold text-[#c5a059] mb-1">24 hrs</div>
              <div className="text-sm font-semibold text-[#f4efe6]">Early Access Window</div>
              <p className="text-xs text-stone-400 mt-1">Community members get notified a full day before public drops go live.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Community;