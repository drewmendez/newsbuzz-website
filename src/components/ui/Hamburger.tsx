"use client";

import { useToggleContext } from "../../context/ToggleState";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Hamburger() {
  const { isOpen, setIsOpen } = useToggleContext();

  const handleClick = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "unset" : "hidden";
  };

  return (
    <button className="text-2xl lg:hidden" onClick={handleClick}>
      {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
    </button>
  );
}
