import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Item from "../../components/item/item";
import axios from "axios";

function Films() {
  const [items, setItems] = useState([]);

  useEffect(() => {
/*   fetch("http://localhost:3000/peliculas").then((respuesta) =>
    respuesta.json().then((datos) => {
      setItems(datos);
    })
  ); */

    axios.get ("http://localhost:3000/peliculas")
    .then ((response)=>{
      setItems([...items, ...response.data])
    })
  }, []);

  

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
