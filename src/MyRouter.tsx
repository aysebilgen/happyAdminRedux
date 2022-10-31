import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import CategoriesList from './Categories/CategoriesList'

import * as React from 'react';

export interface IAppProps {
}

export default function MyRouter (props: IAppProps) {
  return (
    <Router>
    
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/cat" element={<CategoriesList />} />
      
     
     
    </Routes>
  </Router>
  );
}

