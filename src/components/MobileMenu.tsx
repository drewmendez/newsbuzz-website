"use client";

import { useToggleContext } from "@/context/ToggleState";

import Search from "./ui/Search";
import Link from "next/link";

export default function MobileMenu() {
  const { isOpen } = useToggleContext();

  return (
    <aside
      className={`fixed ${isOpen ? "left-0" : "-left-full"} z-10 h-full w-full bg-[#fdfdfd] px-4 py-6 transition-all duration-300`}
    >
      <Search />
      <nav className="mt-4 grid justify-items-start gap-5 bg-[#fdfdfd] font-heading text-xl font-bold">
        <Link className="duration-300 hover:opacity-70" href="/">
          Home
        </Link>
        <Link className="duration-300 hover:opacity-70" href="/business">
          Business
        </Link>
        <Link className="duration-300 hover:opacity-70" href="/general">
          General
        </Link>
        <Link className="duration-300 hover:opacity-70" href="/entertainment">
          Entertainment
        </Link>
        <Link className="duration-300 hover:opacity-70" href="/health">
          Health
        </Link>
        <Link className="duration-300 hover:opacity-70" href="/science">
          Science
        </Link>
        <Link className="duration-300 hover:opacity-70" href="/sports">
          Sports
        </Link>
        <Link className="duration-300 hover:opacity-70" href="/technology">
          Technology
        </Link>
      </nav>
    </aside>
  );
}
