import React from "react";
import Shop from "./Pages/Shop/Shop";
import Beach from "./Pages/Beach/Beach";
import Header from "./components/Header";
import Events from "./Pages/Events/Events";
import Studios from "./Pages/Studios/Studios";
import Artists from "./Pages/Artists/Artists";
import HomePage from "./Pages/HomePage/HomePage";
import Latitude from "./Pages/Latitude/Latitude";
import ApplyJob from "./Pages/ApplyJob/ApplyJob";
import ApplyForm from "./Pages/ApplyForm/ApplyForm";
import EventsPage from "./Pages/EventsPage/EventsPage";
import ArtistPage from "./Pages/ArtistPage/ArtistPage";
import YBAFReqiest from "./Pages/YBAFReqiest/YBAFReqiest";
import ArtWorksPage from "./Pages/ArtWorksPage/ArtWorksPage";

import { Routes, Route } from "react-router-dom";
import { events, shopCard } from "./db/dataBase";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/artwork/:id"
          element={<ArtWorksPage products={shopCard} />}
        />
        <Route
          path="/events-page/:id"
          element={<EventsPage products={events} />}
        />
        <Route path="shop" element={<Shop />} />
        <Route path="beach" element={<Beach />} />
        <Route path="events" element={<Events />} />
        <Route path="studios" element={<Studios />} />
        <Route path="artists" element={<Artists />} />
        <Route path="latitude" element={<Latitude />} />
        <Route path="apply-job" element={<ApplyJob />} />
        <Route path="apply-form" element={<ApplyForm />} />
        <Route path="artwork" element={<ArtWorksPage />} />
        <Route path="events-page" element={<EventsPage />} />
        <Route path="artist-page" element={<ArtistPage />} />
        <Route path="ybaf-request" element={<YBAFReqiest />} />
      </Routes>
    </>
  );
}

export default App;
