
import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export function NavProvider({ children }) {
  const [showElements, setShowElements] = useState("");

  const [formElements, setFormElements] = useState([]);

  return (
    <NavContext.Provider
      value={{
        showElements,
        setShowElements,
        formElements,   
        setFormElements,
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
