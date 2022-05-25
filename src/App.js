import React from 'react';
import Shop from './Pages/Shop/Shop';
import Beach from './Pages/Beach/Beach';
import Header from './components/Header';
import Events from './Pages/Events/Events';
import Studios from './Pages/Studios/Studios';
import Artists from './Pages/Artists/Artists';
import HomePage from './Pages/HomePage/HomePage';
import BuyRequest from './Pages/BuyRequest/BuyRequest';
import Latitude from './Pages/Latitude/Latitude';
import EventsPage from './Pages/EventsPage/EventsPage';
import ArtistPage from './Pages/ArtistPage/ArtistPage';
import ArtWorksPage from './Pages/ArtWorksPage/ArtWorksPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="beach" element={<Beach />} />
        <Route path="events" element={<Events />} />
        <Route path="studios" element={<Studios />} />
        <Route path="artists" element={<Artists />} />
        <Route path="latitude" element={<Latitude />} />
        <Route path="artwork" element={<ArtWorksPage />} />
        <Route path="BuyRequest" element={<BuyRequest />} />
        <Route path="events-page" element={<EventsPage />} />
        <Route path="artist-page" element={<ArtistPage />} />
      </Routes> 
    </>
  );
}

export default App;
