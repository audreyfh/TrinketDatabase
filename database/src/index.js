import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Collections from './pages/Collections';
import Ranking from './pages/Ranking';
import FutureTrinkets from './pages/Future';
import ExCollections from './pages/ExampleCollection';
import CuteCollection from './pages/Collections/CuteCollection';
import AnimalCollection from './pages/Collections/AnimalCollection';
import CollectibleCollection from './pages/Collections/CollectibleCollection';
import DollCollection from './pages/Collections/DollCollection';
import ForeignCollection from './pages/Collections/ForeignCollection';
import MiscCollection from './pages/Collections/Misc.Trinkets';
import VintageCollection from './pages/Collections/VintageCollection';
import JunkCollection from './pages/Collections/JunkCollection';
import ExTrinket from './pages/ExampleTrinket';

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Collections" element={<Collections/>} />
          <Route path="Ranking" element={<Ranking/>} />
          <Route path="Future" element={<FutureTrinkets/>} />
          <Route path="ExampleCollection" element={<ExCollections/>} />
          <Route path="/Collections/CuteCollection" element={<CuteCollection />} />
          <Route path="Collections/JunkCollection" element={<JunkCollection />} />
          <Route path="Collections/CollectibleCollection" element={<CollectibleCollection />} />
          <Route path="Collections/AnimalCollection" element={<AnimalCollection />} />
          <Route path="Collections/DollCollection" element={<DollCollection />} />
          <Route path="Collections/ForeignCollection" element={<ForeignCollection />} />
          <Route path="Collections/Misc.Collection" element={<MiscCollection />} />
          <Route path="Collections/VintageCollection" element={<VintageCollection />} />
          <Route path="ExampleTrinket" element={<ExTrinket/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
