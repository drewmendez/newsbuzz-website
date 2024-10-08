import Hamburger from "./ui/Hamburger";
import Search from "./ui/Search";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#e2e2e2] bg-[#fdfdfd] px-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 py-6">
        <Link
          className="font-heading text-4xl font-extrabold tracking-tighter text-accent lg:text-6xl"
          href="/"
        >
          NewsBuzz
        </Link>
        <div className="hidden justify-items-end gap-3 lg:grid">
          <Search />
          <hr className="my-1 h-px w-full bg-[#e2e2e2]" />
          <nav className="hidden h-[24px] flex-wrap gap-8 overflow-hidden font-heading font-semibold lg:flex">
            <Link className="duration-300 hover:opacity-70" href="/business">
              Business
            </Link>
            <Link className="duration-300 hover:opacity-70" href="/general">
              General
            </Link>
            <Link
              className="duration-300 hover:opacity-70"
              href="/entertainment"
            >
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
        </div>
        <Hamburger />
      </div>
    </header>
  );
}
