import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";
import Accordion from "./ui/Accordion";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-[#e2e2e2] px-4 py-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="min-[930px]:flex min-[930px]:divide-x min-[930px]:pb-6">
          <div className="mb-6 min-[930px]:mr-12">
            <Link
              className="mb-3 inline-block font-heading text-5xl font-extrabold tracking-tighter text-accent"
              href="/"
            >
              NewsBuzz
            </Link>
            <div className="flex gap-2 text-3xl">
              <FaFacebookSquare />
              <AiFillTwitterCircle />
              <FaInstagramSquare />
            </div>
          </div>
          <MobileFooterNav />
          <DesktopFooterNav />
        </div>
        <div className="min-[930px]:border-t min-[930px]:border-[#e2e2e2]">
          <p className="pt-4 text-center font-heading text-sm text-[#767676]">
            Design Reference :{" "}
            <a href="https://www.sfgate.com" target="_blank">
              SFGATE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function MobileFooterNav() {
  return (
    <div className="min-[930px]:hidden">
      <Accordion
        title="About"
        content={["Our Company", "Careers", "Our Use of AI", "Ethics Policy"]}
      />
      <Accordion title="Contact" content={["Feedback", "Newsroom Contacts"]} />
      <Accordion
        title="Services"
        content={["Advertise with us", "Classifieds", "Recruitment"]}
      />
      <Accordion
        title="Quick Links"
        content={["Cars", "Jobs", "Weather", "Obituaries"]}
      />
    </div>
  );
}

function DesktopFooterNav() {
  return (
    <div className="hidden gap-12 min-[930px]:flex min-[930px]:pl-7">
      <div>
        <p className="mb-2 font-heading text-[14.224px] font-bold">About</p>
        <ul className="grid gap-2 font-heading text-[14.224px]">
          <li>Our Company</li>
          <li>Careers</li>
          <li>Our Use of AI</li>
          <li>Ethics Policy</li>
        </ul>
      </div>
      <div>
        <p className="mb-2 font-heading text-[14.224px] font-bold">Contact</p>
        <ul className="grid gap-2 font-heading text-[14.224px]">
          <li>Feedback</li>
          <li>Newsroom Contacts</li>
        </ul>
      </div>
      <div>
        <p className="mb-2 font-heading text-[14.224px] font-bold">Services</p>
        <ul className="grid gap-2 font-heading text-[14.224px]">
          <li>Advertise with us</li>
          <li>Classifieds</li>
          <li>Recruitment</li>
        </ul>
      </div>
      <div>
        <p className="mb-2 font-heading text-[14.224px] font-bold">
          Quick Links
        </p>
        <ul className="grid gap-2 font-heading text-[14.224px]">
          <li>Cars</li>
          <li>Jobs</li>
          <li>Weather</li>
          <li>Obituaries</li>
        </ul>
      </div>
    </div>
  );
}
