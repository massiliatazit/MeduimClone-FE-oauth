import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const loginFetch = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:9001/authors/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      props.history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12}>
          <h1>Login.</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className=" d-flex justify-content-center">
          <Form onSubmit={loginFetch} className="w-75 ">
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email Addresss"
                value={email}
                required
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100">
              LOGIN
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} className="d-flex justify-content-center">
          <a
            href="http://localhost:9001/authors/3rdParty/google"
            className="w-75"
          >
            <Button variant="dark" className="w-100">
              LOGIN WITH GOOGLE
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
