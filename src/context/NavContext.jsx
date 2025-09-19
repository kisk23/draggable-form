
import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export function NavProvider({ children }) {
  const [showElements, setShowElements] = useState("");

  const [formElements, setFormElements] = useState([]);
    const [sections, setSections] = useState({
    "section-1": [],
    "section-2": [],
    "section-3": [],
  });

  return (
    <NavContext.Provider
      value={{
        showElements,
        setShowElements,
        formElements,   
        setFormElements,
        sections,
        setSections
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  return useContext(NavContext);
}
export function useFormElements() {
return  useContext(NavContext);}


export function useSections() {
return  useContext(NavContext);}
