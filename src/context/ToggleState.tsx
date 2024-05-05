"use client";

import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleContext = createContext<ContextProps | null>(null);

export default function ToggleContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ToggleContext.Provider>
  );
}

export const useToggleContext = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error(
      "Toggle context should be used within ToggleContextProvider",
    );
  }
  return context;
};
