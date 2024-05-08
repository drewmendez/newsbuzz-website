import Link from "next/link";

import Hamburger from "./ui/Hamburger";
import Search from "./ui/Search";

export default function Header() {
  return (
    <header className="sticky top-0 border-b border-[#e2e2e2] bg-white px-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 py-6">
        <Link
          className="font-heading text-4xl font-extrabold tracking-tighter text-yellow-600 lg:text-6xl"
          href="/"
        >
          NewsBuzz
        </Link>
        <div className="hidden justify-items-end gap-3 lg:grid">
          <Search />
          <hr className="my-1 h-px w-full border-0 bg-[#e2e2e2]" />
          <nav className="hidden h-[24px] flex-wrap gap-8 overflow-hidden font-heading font-semibold lg:flex">
            <Link href="">Business</Link>
            <Link href="">General</Link>
            <Link href="">Entertainment</Link>
            <Link href="">Health</Link>
            <Link href="">Science</Link>
            <Link href="">Sports</Link>
            <Link href="">Technology</Link>
          </nav>
        </div>
        <Hamburger />
      </div>
    </header>
  );
}
