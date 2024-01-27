import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";


const Login = () => {
  return (
    <Form>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Form.Group>
              <Form.Label>email </Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form.Group>
              <Form.Label>password </Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <Button >Login</Button>
          </Col>
        </Row>
      </Container>
    </Form>
  )
}

export default Login
