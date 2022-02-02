import React from 'react';
import { Routes, Route } from "react-router-dom";

import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import DcScreen from "../components/dc/DcScreen";
import { Navbar } from '../components/ui/Navbar';
import HeroScreen from '../components/heroe/HeroScreen';

const DashboardRoutes = () => {
  return (
      <>
            <Navbar />
            <div className='container mt-3'>
              <Routes>
                  <Route path="/" element={<MarvelScreen />} />
                  <Route path="marvel" element={<MarvelScreen />} />
                  <Route path="dc" element={<DcScreen />} />
                  <Route path="search" element={<SearchScreen />} />
                  <Route path="hero/:heroId" element={<HeroScreen />} />
              </Routes>

            </div>
      </>

  )
};

export default DashboardRoutes;
