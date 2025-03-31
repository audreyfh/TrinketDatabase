import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Collections from './pages/Collections';
import Ranking from './pages/Ranking';
import FutureTrinkets from './pages/Future';
import ExCollections from './pages/Example-Collection';
import ExTrinket from './pages/Example-Trinket';

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
          <Route path="Example-Collection" element={<ExCollections/>} />
          <Route path="Example-Trinket" element={<ExTrinket/>} />
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