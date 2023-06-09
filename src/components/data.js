let cars = [
  {
    id: "1",
    brand: "Skoda",
    model: "Octavia",
    price: "13.5 Lacs",
    kms: "35000",
    make: "2017",
    variant: "petrol",
    transmission: "Automatic",
    engine: "1.8 tsi",
    color: "Phantom Black",
    gearBox: "DSG",
    type: "sedan",
    img1: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    img2: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
    img3: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    sold: "unsold",
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
    engine: "1.8 tsi",
    color: "Phantom Black",
    gearBox: "DSG",
    type: "sedan",
    img1: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    img2: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    img3: "https://images.unsplash.com/photo-1549927681-0b673b8243ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    sold: "unsold",
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
    engine: "1.8 tsi",
    color: "Phantom Black",
    gearBox: "DSG",
    type: "sedan",
    img1: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    img2: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    img3: "https://images.unsplash.com/photo-1511125357779-27038c647d9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    sold: "sold",
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
    engine: "1.8 tsi",
    color: "Phantom Black",
    gearBox: "DSG",
    type: "sedan",
    img1: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    img2: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    img3: "https://images.unsplash.com/photo-1547038577-da80abbc4f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80",
    sold: "sold",
  },
  {
    id: "5",
    brand: "Mercedes",
    model: "AMG",
    price: "1.5 Cr",
    kms: "45000",
    make: "2021",
    variant: "petrol",
    transmission: "Automatic",
    engine: "1.8 tsi",
    color: "Phantom Black",
    gearBox: "DSG",
    type: "sedan",
    img1: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
    img2: "https://images.unsplash.com/photo-1471174617910-3e9c04f58ff5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    img3: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    sold: "unsold",
  },
];

export const changeStatus = (id) => {
  cars[parseInt(id) - 1].sold = "sold";
};

export default cars;
