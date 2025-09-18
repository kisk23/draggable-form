
import FormBuilder from "./components/FormBuilder";
import Navbar from "./components/Navbar";
import React from 'react';
import { NavProvider } from './context/NavContext';
import ButtonTable from "./components/ButtonsTable";


export default function App() {
  return (
    <>
       <NavProvider>
        
          <Navbar />
         
          <FormBuilder />
    </NavProvider>
    
    </>
  );
}



















