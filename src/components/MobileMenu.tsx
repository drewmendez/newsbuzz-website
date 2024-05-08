"use client";

import { useToggleContext } from "@/context/ToggleState";

import Search from "./ui/Search";

export default function MobileMenu() {
  const { isOpen } = useToggleContext();

  return (
    <aside
      className={`fixed ${isOpen ? "left-0" : "-left-full"} h-full w-full bg-white px-4 py-6 transition-all duration-300`}
    >
      <Search />
      <nav className="mt-4 grid gap-5 bg-white font-heading text-xl font-bold">
        <a href="">Home</a>
        <a href="">General</a>
        <a href="">Business</a>
        <a href="">Entertainment</a>
        <a href="">Health</a>
        <a href="">Science</a>
        <a href="">Sports</a>
        <a href="">Technology</a>
      </nav>
    </aside>
  );
}
