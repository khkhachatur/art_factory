import React from 'react';
import Header from './components/Header';
import HomePage from './Pages/HomePage/HomePage';
import Events from './Pages/Events/Events';
import Latitude from './Pages/Latitude/Latitude';
import Beach from './Pages/Beach/Beach';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="events" element={<Events />} />
        <Route path="latitude" element={<Latitude />} />
        <Route path="beach" element={<Beach />} />
      </Routes>
    </>
  );
}

export default App;
