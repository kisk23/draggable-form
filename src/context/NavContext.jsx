
import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export function NavProvider({ children }) {
  const [showLabels, setShowLabels] = useState(false);
  const [showInputs, setShowInputs] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <NavContext.Provider
      value={{
        showLabels,
        setShowLabels,
        showInputs,
        setShowInputs,
        showButtons,
        setShowButtons,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  return useContext(NavContext);
}
