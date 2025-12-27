"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("انتخاب دسته بندی");

  const categories = [
    "دسته‌ بندی‌ها",
    "سرور",
    "تجهیزات شبکه",
    "رم سرور",
    "هارد سرور",
    "پردازنده",
  ];

  return (
    <div className="flex items-center gap-0 w-full max-w-2xl mx-auto flex-row-reverse">
      <button
        type="button"
        className="bg-[#17e2fe] hover:bg-[#14c8e0] text-white px-3 sm:px-4 md:px-5 lg:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-l-3xl transition-colors flex items-center justify-center shrink-0"
        aria-label="جستجو"
      >
        <FiSearch className="text-lg sm:text-xl md:text-2xl" />
      </button>

      <div className="relative bg-gray-100 border-t border-b border-gray-300 flex-[0.5]">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 bg-transparent border-none text-gray-600 focus:outline-none cursor-pointer text-xs sm:text-sm md:text-base appearance-none pr-6 sm:pr-8 pl-2 sm:pl-3 w-full"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <MdKeyboardArrowDown className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-sm sm:text-base" />
      </div>

      <div className="flex items-center flex-1 bg-gray-100 border border-gray-300 rounded-r-3xl">
        <input
          type="text"
          placeholder="جستجوی محصولات"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 bg-transparent border-none focus:outline-none text-right text-gray-600 placeholder-gray-500 text-xs sm:text-sm md:text-base"
        />
      </div>
    </div>
  );
}
