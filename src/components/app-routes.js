import React, { Suspense } from 'react';
import {BrowserRouter, Routes , Route } from "react-router-dom";

import HomeComponent from '../views/home';
import Spinner from '../components/spinner/spinner';
import BlogComponent from '../views/blog';

const RoutesComponent = () => {
return (
    <Suspense fallback={<Spinner />}>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
         element={<HomeComponent/>}
          />
        <Route
          path='/blog'
          element={<BlogComponent/>}
          />
        </Routes>
        </BrowserRouter>
 </Suspense>
);
};

export default  RoutesComponent;