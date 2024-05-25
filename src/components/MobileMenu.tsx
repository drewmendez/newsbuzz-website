"use client";

import { useToggleContext } from "@/context/ToggleState";

import Search from "./ui/Search";

export default function MobileMenu() {
  const { isOpen, setIsOpen } = useToggleContext();

  return (
    <aside
      className={`fixed ${isOpen ? "left-0" : "-left-full"} z-10 h-full w-full bg-[#fdfdfd] px-4 py-6 transition-all duration-300`}
    >
      <Search />
      <nav className="mt-4 grid justify-items-start gap-5 bg-[#fdfdfd] font-heading text-xl font-bold">
        <a
          className="duration-300 hover:opacity-70"
          href="/"
          onClick={() => setIsOpen(!isOpen)}
        >
          Home
        </a>
        <a
          className="duration-300 hover:opacity-70"
          href="/business"
          onClick={() => setIsOpen(!isOpen)}
        >
          Business
        </a>
        <a
          className="duration-300 hover:opacity-70"
          href="/general"
          onClick={() => setIsOpen(!isOpen)}
        >
          General
        </a>
        <a
          className="duration-300 hover:opacity-70"
          href="/entertainment"
          onClick={() => setIsOpen(!isOpen)}
        >
          Entertainment
        </a>
        <a
          className="duration-300 hover:opacity-70"
          href="/health"
          onClick={() => setIsOpen(!isOpen)}
        >
          Health
        </a>
        <a
          className="duration-300 hover:opacity-70"
          href="/science"
          onClick={() => setIsOpen(!isOpen)}
        >
          Science
        </a>
        <a
          className="duration-300 hover:opacity-70"
          href="/sports"
          onClick={() => setIsOpen(!isOpen)}
        >
          Sports
        </a>
        <a
          className="duration-300 hover:opacity-70"
          href="/technology"
          onClick={() => setIsOpen(!isOpen)}
        >
          Technology
        </a>
      </nav>
    </aside>
  );
}
