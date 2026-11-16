import React from "react";

export function Herocard() {
  return (
    <div className="w-full bg-[#160c09]" style={{paddingTop: '4rem'}}>
    
      <section className="relative w-full min-h-[500px] flex items-center bg-cover bg-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=1600&q=80')]">
       
        <div className="absolute inset-0 bg-gradient-to-r from-[#160c09]/95 via-[#160c09]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 md:px-16">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#e63956] mb-3">
              FRESH DROPS · THIS WEEK
            </p>

            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4 text-[#faf5f0]">
              <span className="block">New Arrivals,</span>
              <span className="block italic bg-gradient-to-r from-[#f8a5b5] to-[#e63956] bg-clip-text text-transparent">
                Before They Sell Out
              </span>
            </h1>

            <p className="text-sm md:text-base text-stone-300 mb-8">
              The latest additions to the Owls vault — these go fast.
            </p>

            <button className="button">
         Shop New Arrivals
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
          </div>
        </div>
      </section>

      
      <div className="w-full bg-[#1c0f0c] border-t border-b border-[#e63956]/20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#faf5f0]/10">
            
          
            <div className="flex items-center gap-4 lg:justify-center lg:px-6">
              <div className="w-11 h-11 rounded-full bg-[#e63956]/15 border border-[#e63956]/40 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#e63956]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v8H3V7zm11 3h4l3 3v2h-7v-5zM7 18a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#faf5f0]">Free Shipping</h3>
                <p className="text-xs text-stone-400 mt-0.5">On orders above ₹5,000</p>
              </div>
            </div>

        
            <div className="flex items-center gap-4 lg:justify-center lg:px-6">
              <div className="w-11 h-11 rounded-full bg-[#e63956]/15 border border-[#e63956]/40 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#e63956]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4.5-3 8.5-7 9-4-.5-7-4.5-7-9V7l7-4zm-2.5 9.5l2 2 3.5-3.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#faf5f0]">Secure Checkout</h3>
                <p className="text-xs text-stone-400 mt-0.5">Razorpay · UPI · Cards</p>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:justify-center lg:px-6">
              <div className="w-11 h-11 rounded-full bg-[#e63956]/15 border border-[#e63956]/40 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#e63956]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#faf5f0]">Ships in 24–48 hrs</h3>
                <p className="text-xs text-stone-400 mt-0.5">Pan-India delivery</p>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:justify-center lg:px-6">
              <div className="w-11 h-11 rounded-full bg-[#e63956]/15 border border-[#e63956]/40 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#e63956]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4m-5-9a5 5 0 0010 0V5H7v7zm10-5h2a2 2 0 010 4h-2M7 7H5a2-2 0 000 4h2" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#faf5f0]">1000+ Happy Gamers</h3>
                <p className="text-xs text-stone-400 mt-0.5">Across India</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Herocard;