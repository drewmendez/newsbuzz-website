import Hamburger from "./ui/Hamburger";
import Search from "./ui/Search";

export default function Header() {
  return (
    <header className="border-b border-[#e2e2e2] px-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 py-4">
        <div className="font-heading text-4xl font-extrabold tracking-tighter text-yellow-600 lg:text-6xl">
          NewsBuzz
        </div>
        <div className="hidden justify-items-end gap-3 lg:grid">
          <Search />
          <hr className="my-1 h-px w-full border-0 bg-[#e2e2e2]" />
          <nav className="font-heading hidden h-[24px] flex-wrap gap-8 overflow-hidden text-base font-semibold lg:flex">
            <a href="">General</a>
            <a href="">Business</a>
            <a href="">Entertainment</a>
            <a href="">Health</a>
            <a href="">Science</a>
            <a href="">Sports</a>
            <a href="">Technology</a>
          </nav>
        </div>
        <Hamburger />
      </div>
    </header>
  );
}
