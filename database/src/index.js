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
import FutureTrinkets from './pages/Future-Trinkets';
import ExCollections from './pages/Example-Collection';
import ExTrinket from './pages/Example-Trinket';

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="collections" element={<Collections/>} />
          <Route path="ranking" element={<Ranking/>} />
          <Route path="future-trinkets" element={<FutureTrinkets/>} />
          <Route path="example-collection" element={<ExCollections/>} />
          <Route path="example-trinket" element={<ExTrinket/>} />
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