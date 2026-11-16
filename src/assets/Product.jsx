import React, { useState } from "react";
import './Product.css';

export function FreshDrops() {
  const list = [
    {
      id: 1,
      title: "THE DUNE CHRONICLES: DELUXE HARDCOVER",
      author: "Frank Herbert",
      pages: "896 Pages",
      price: 1169,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "BATMAN: THE LONG HALLOWEEN OMNIBUS",
      author: "Jeph Loeb",
      pages: "384 Pages",
      price: 1099,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "THE HOBBIT: ILLUSTRATED EDITION",
      author: "J.R.R. Tolkien",
      pages: "368 Pages",
      price: 749,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "WATCHMEN: COLLECTOR'S GRAPHIC NOVEL",
      author: "Alan Moore",
      pages: "416 Pages",
      price: 2099,
      originalPrice: 2199,
      image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "THE NAME OF THE WIND",
      author: "Patrick Rothfuss",
      pages: "662 Pages",
      price: 2200,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      title: "SPIDER-MAN: INTO THE SPIDER-VERSE ARTBOOK",
      author: "Ramin Zahed",
      pages: "200 Pages",
      price: 3499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      title: "THE SANDMAN: BOOK ONE",
      author: "Neil Gaiman",
      pages: "480 Pages",
      price: 3999,
      originalPrice: 4499,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      title: "PROJECT HAIL MARY",
      author: "Andy Weir",
      pages: "496 Pages",
      price: 2599,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const [vals, setVals] = useState({});
  const [msgs, setMsgs] = useState({});

  const change = (id, val) => {
    setVals({ ...vals, [id]: val });
  };

  const check = (item) => {
    const t = Number(vals[item.id]);

    if (!t) {
      alert("Enter a valid price!");
      return;
    }

    if (item.price <= t) {
      setMsgs({ ...msgs, [item.id]: `🎉 Target reached! Price (₹${item.price}) is within ₹${t}!` });
    } else {
      setMsgs({ ...msgs, [item.id]: `🔔 Alert saved for ₹${t}.` });
    }
  };

  return (
    <section className="w-full bg-[#160c09] py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="w-8 h-[2px] bg-[#D49A9A] mb-3" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#faf5f0]">
              Fresh drops this week.
            </h2>
            <p className="text-sm text-stone-400 mt-1">
              Just Landed. Grab Them Before They Sell Out
            </p>
          </div>

          <a
            href="#view-all"
            className="text-sm font-semibold text-[#D49A9A] hover:text-[#F2C1C1] transition-colors mt-4 md:mt-0 inline-flex items-center gap-1 cursor-pointer"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((item) => (
            <div
              key={item.id}
              style={{ boxShadow: "0 4px 16px rgba(212, 154, 154, 0.15)" }}
              className="bg-[#1c0f0c] border border-[#D49A9A]/20 rounded-2xl p-4 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#1e3a2f] text-[#a3e635] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    New Arrival
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#faf5f0] line-clamp-2 mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-stone-400 mb-4">
                  <span>✍️ {item.author}</span>
                  <span>📖 {item.pages}</span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-lg font-bold text-[#faf5f0]">
                    ₹{item.price}
                  </span>
                  <span className="text-xs text-stone-500 line-through">
                    ₹{item.originalPrice}
                  </span>
                </div>

                <div className="mb-4 bg-[#160c09] p-3 rounded-xl border border-[#D49A9A]/30">
                  <label className="block text-[11px] text-[#D49A9A] font-semibold mb-1">
                    Set Price Alert (₹)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="e.g. 999"
                      value={vals[item.id] || ""}
                      onChange={(e) => change(item.id, e.target.value)}
                      className="w-full bg-[#1c0f0c] border border-[#D49A9A]/30 text-[#faf5f0] text-xs px-2.5 py-1.5 rounded-lg focus:outline-none focus:border-[#D49A9A]"
                    />
                    <button
                      onClick={() => check(item)}
                      className="bg-[#D49A9A] hover:bg-[#c28787] text-[#160c09] text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
                    >
                      Set
                    </button>
                  </div>

                  {msgs[item.id] && (
                    <p className="text-[11px] text-[#F2C1C1] mt-2 leading-tight">
                      {msgs[item.id]}
                    </p>
                  )}
                </div>
              </div>

              <button className="Add-btn">
                <span className="Add-span-btn">Add To Cart</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FreshDrops;