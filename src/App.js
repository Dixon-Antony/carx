import "./App.css";
import React from "react";
import Header from "./components/Header";
import Container from "./components/UI/Container";
import MainContent from "./components/MainContent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catalog from "./components/Catalog";
import { useEffect } from "react";
import CarDetail from "./components/CarDetail";

const cars = [
  {
    id: "1",
    brand: "Skoda",
    model: "Octavia",
    price: "13.5 Lacs",
    kms: "35000",
    make: "2017",
    variant: "petrol",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "2",
    brand: "Porsche",
    model: "911 GT3 Rs",
    price: "3.5 Cr",
    kms: "15000",
    make: "2015",
    variant: "petrol",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "3",
    brand: "Rolls Royce",
    model: "BoatSail",
    price: "5 Cr",
    kms: "85000",
    make: "2020",
    variant: "petrol",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
  },
  {
    id: "4",
    brand: "Lamborghini",
    model: "Aventador",
    price: "2.5 Cr",
    kms: "25000",
    make: "2018",
    variant: "petrol",
    transmission: "Automatic",
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/catalog",
    element: <Catalog cars={cars} />,
  },
  {
    path: "/catalog/:id",
    element: <CarDetail />,
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
