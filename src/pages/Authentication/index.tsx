import React, { useState } from "react";
import "./styles.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login } from "../../services/auth";

const Authentication = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Endereço de e-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            login({ email, password });
            
          }}
        >
          Entrar
        </Button>
      </Form>
    </div>
  );
};

export default Authentication;
