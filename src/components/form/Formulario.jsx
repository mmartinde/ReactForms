import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";

function Formulario({ onInsertarItem }) {
  const INITIAL_STATE = { descripcion: "", foto: "", year: "", categoria: "" };

  const [dato, setDato] = useState(INITIAL_STATE);

  /*  function cambiarDescripcion (e){
        setDato({...dato, descripcion: e.target.value})
    }

    function cambiarYear (e){
        setDato({...dato, year: e.target.value})
    }

    function cambiarFoto (e){
        setDato({...dato, foto: e.target.value})
    } */

  function cambiarAtributo(e, atributo) {
    setDato({ ...dato, [atributo]: e.target.value });
  }

  function insertar() {
    onInsertarItem(dato);
    setDato(INITIAL_STATE);
  }

  return (
    <Form>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Form.Group>
              <Form.Label>Titulo </Form.Label>
              <Form.Control
                value={dato.titulo}
                onChange={(e) => cambiarAtributo(e, "titulo")}
                type="text"
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Group>
              <Form.Label>Categoria </Form.Label>
              <Form.Control
                value={dato.categoria}
                onChange={(e) => cambiarAtributo(e, "categoria")}
                type="text"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Año </Form.Label>
              <Form.Control
                value={dato.year}
                onChange={(e) => cambiarAtributo(e, "year")}
                type="number"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Descripcion </Form.Label>
              <Form.Control
                value={dato.descripcion}
                onChange={(e) => cambiarAtributo(e, "descripcion")}
                type="text"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Foto </Form.Label>
              <Form.Control
                value={dato.foto}
                onChange={(e) => cambiarAtributo(e, "foto")}
                type="text"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Button onClick={insertar}>Save</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default Formulario;
