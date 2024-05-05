"use client";

import { useToggleContext } from "@/context/ToggleState";
import Search from "./ui/Search";

export default function MobileMenu() {
  const { isOpen } = useToggleContext();

  return (
    <aside
      className={`absolute ${isOpen ? "left-0" : "-left-[100%]"} w-full p-4 transition-all duration-300`}
    >
      <Search />
      <nav className="font-heading mt-4 grid gap-5 text-xl font-bold">
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
