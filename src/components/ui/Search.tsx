"use client";

import { useToggleContext } from "@/context/ToggleState";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const { isOpen, setIsOpen } = useToggleContext();
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/search?q=" + search);
    inputRef?.current?.blur();
    setSearch("");
    if (window.innerWidth < 1024) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <form
      className="flex rounded-full border-2 border-[#e2e2e2] bg-white px-4 py-1"
      onSubmit={(event) => handleSubmit(event)}
    >
      <input
        className="mr-2 bg-transparent outline-none"
        type="text"
        placeholder="Search"
        value={search}
        ref={inputRef}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="-mr-3 ml-auto rounded-full bg-accent p-2 text-white duration-300 hover:opacity-70">
        <FaSearch />
      </button>
    </form>
  );
}
