import "./App.css";
import React from "react";
import MainContent from "./components/MainContent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catalog from "./components/Catalog";
import { useEffect } from "react";
import CarDetail from "./components/CarDetail";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About";
import { loader as carsLoader } from "./components/Catalog";
import { loader as carDetailLoader } from "./components/CarDetail";
import { loader as carImagesLoader } from "./components/Gallery";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/carx",
    element: <MainContent />,
    errorElement: <Error />,
  },
  {
    path: "/carx/catalog",
    element: <Catalog />,
    loader: carsLoader,
  },
  {
    path: "/carx/catalog/:id",
    element: <CarDetail />,
    loader: carDetailLoader,
    errorElement: <Error />,
  },
  {
    path: "/carx/gallery/:id",
    element: <Gallery />,
    loader: carImagesLoader,
    errorElement: <Error />,
  },
  {
    path: "/carx/contact",
    element: <Contact />,
  },
  {
    path: "/carx/about",
    element: <About />,
  },
]);

function App() {
  useEffect(() => {
    document.title = "Car-X";
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
