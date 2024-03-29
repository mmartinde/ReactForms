import { useEffect, useState } from "react";
import Formulario from "./components/form/Formulario";
import Item from "./components/item/item";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

import Index from "./pages/index/Index";
import Films from "./pages/films/Films";
import Contact from "./pages/contact/contact";
import NavigationBar from "./pages/navigationbar/navigationbar";
import { Route, Routes } from "react-router-dom";
import InsertFilms from "./pages/insertFilms/InsertFilms";
import Footer from "./pages/footer/Footer";
import Login from "./pages/login/Login";

function App() {
 

  return (
    <>
      <header>
        <NavigationBar></NavigationBar>
      </header>

      <Container>
        <Routes>
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/peliculas" element={<Films></Films>}></Route>
          <Route path="/contacto" element={<Contact></Contact>}></Route>
          <Route path="/nueva-pelicula" element={<InsertFilms></InsertFilms>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Container>

      <footer>
      <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
