import React from "react";

export function CategoryCards() {
  return (
    <section className="w-full bg-[#160c09] py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="w-8 h-[2px] bg-[#D49A9A] mb-3" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#faf5f0]">
              Browse by Category
            </h2>
            <p className="text-sm text-stone-400 mt-1">
              Find your kind of game
            </p>
          </div>
          
          <a
            href="#view-all"
            className="text-sm font-semibold text-[#D49A9A] hover:text-[#F2C1C1] transition-colors mt-4 md:mt-0 inline-flex items-center gap-1 cursor-pointer"
          >
            View all →
          </a>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Deep Strategy */}
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80')`,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)"
            }}
            className="relative h-[420px] rounded-2xl overflow-hidden flex flex-col justify-between p-6 bg-cover bg-center border border-[#D49A9A]/20 transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#160c09]/90 via-[#1a2e1a]/80 to-[#160c09]/95 transition-opacity duration-300 group-hover:opacity-90" />
            
            <div className="relative z-10 flex items-center justify-between text-xs font-bold tracking-widest text-[#D49A9A]">
              <span>01 / STRATEGY</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold text-[#faf5f0] mb-1">
                Deep Strategy
              </h3>
              <p className="text-xs text-stone-300 mb-6">
                For the long-game thinker
              </p>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#D49A9A] group-hover:translate-x-1 transition-transform">
                View all →
              </div>
            </div>
          </div>

          {/* Card 2: Gateway Games */}
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80')`,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)"
            }}
            className="relative h-[420px] rounded-2xl overflow-hidden flex flex-col justify-between p-6 bg-cover bg-center border border-[#D49A9A]/20 transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#160c09]/90 via-[#3d2817]/80 to-[#160c09]/95 transition-opacity duration-300 group-hover:opacity-90" />
            
            <div className="relative z-10 flex items-center justify-between text-xs font-bold tracking-widest text-[#D49A9A]">
              <span>02 / EASY TO LEARN</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold text-[#faf5f0] mb-1">
                Gateway Games
              </h3>
              <p className="text-xs text-stone-300 mb-6">
                Perfect for newcomers
              </p>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#D49A9A] group-hover:translate-x-1 transition-transform">
                View all →
              </div>
            </div>
          </div>

          {/* Card 3: Family Games */}
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80')`,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)"
            }}
            className="relative h-[420px] rounded-2xl overflow-hidden flex flex-col justify-between p-6 bg-cover bg-center border border-[#D49A9A]/20 transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#160c09]/90 via-[#1b2a32]/80 to-[#160c09]/95 transition-opacity duration-300 group-hover:opacity-90" />
            
            <div className="relative z-10 flex items-center justify-between text-xs font-bold tracking-widest text-[#D49A9A]">
              <span>03 / PLAY TOGETHER</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold text-[#faf5f0] mb-1">
                Family Games
              </h3>
              <p className="text-xs text-stone-300 mb-6">
                For every age at the table
              </p>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#D49A9A] group-hover:translate-x-1 transition-transform">
                View all →
              </div>
            </div>
          </div>

          {/* Card 4: Party Games */}
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=800&q=80')`,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)"
            }}
            className="relative h-[420px] rounded-2xl overflow-hidden flex flex-col justify-between p-6 bg-cover bg-center border border-[#D49A9A]/20 transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#160c09]/90 via-[#3d1a1a]/80 to-[#160c09]/95 transition-opacity duration-300 group-hover:opacity-90" />
            
            <div className="relative z-10 flex items-center justify-between text-xs font-bold tracking-widest text-[#D49A9A]">
              <span>04 / GATHERINGS</span>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold text-[#faf5f0] mb-1">
                Party Games
              </h3>
              <p className="text-xs text-stone-300 mb-6">
                Games everyone wants to play
              </p>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#D49A9A] group-hover:translate-x-1 transition-transform">
                View all →
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CategoryCards;