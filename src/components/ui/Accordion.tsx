"use client";

import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

type AccordionProps = {
  title: string;
  content: string[];
};

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#e2e2e2] py-3">
      <div className="flex justify-between">
        <p className="font-heading text-xl font-bold">{title}</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          <IoIosArrowUp
            className={`transition-all duration-200 ${isOpen ? "scale-y-100" : "-scale-y-100"}`}
          />
        </button>
      </div>
      <ul className={`pl-7 pt-2 ${isOpen ? "grid" : "hidden"}`}>
        {content.map((item, index) => (
          <li className="font-heading text-lg text-[#767676]" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
