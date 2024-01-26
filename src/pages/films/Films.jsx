import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Item from "../../components/item/item";
function Films() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/peliculas").then((respuesta) =>
      respuesta.json().then((datos) => {
        setItems(datos);
      })
    );
  }, []);

  function insertarItem(item) {
    fetch("http://localhost:3000/peliculas", {
      method: "POST",
      body: JSON.stringify(item),
    })
      .then(() => {
        setItems([...items, item]);
      })
      .catch((error) => {
        alert("Error al subir laa pelicula");
      });
  }

  return (
    <>
      <h2>Películas</h2>
      <Container fluid className="py-3">
        <Row>
          {items.map((i) => (
            <Item item={i}></Item>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Films;
