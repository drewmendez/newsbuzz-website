"use client";

import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="flex rounded-full border-2 border-[#e2e2e2] bg-white px-4 py-1">
      <input
        className="mr-2 bg-transparent outline-none"
        type="text"
        placeholder="Search"
      />
      <button className="-mr-3 ml-auto rounded-full bg-yellow-600 p-2 text-white">
        <FaSearch />
      </button>
    </div>
  );
}