"use client";

import { useToggleContext } from "../../context/ToggleState";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Hamburger() {
  const { isOpen, setIsOpen } = useToggleContext();

  return (
    <button className="text-2xl lg:hidden" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
    </button>
  );
}
