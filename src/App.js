import "./App.css";
import React from "react";
import Header from "./components/Header";
import Container from "./components/UI/Container";
import MainContent from "./components/MainContent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catalog from "./components/Catalog";
import { useEffect } from "react";
import CarDetail from "./components/CarDetail";
import { loader as carsLoader } from "./components/Catalog";
import { loader as carDetailLoader } from "./components/CarDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
    loader: carsLoader,
  },
  {
    path: "/catalog/:id",
    element: <CarDetail />,
    loader: carDetailLoader,
  },
]);

function App() {
  useEffect(() => {
    document.title = "Car-X";
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </React.Fragment>
  );
}

export default App;
