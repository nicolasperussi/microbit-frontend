import React, { useState } from "react";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import Modal, { ModalProps } from "react-bootstrap/modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewClassModal = (
  props: JSX.IntrinsicAttributes &
    Omit<
      Pick<
        React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >,
        "key" | keyof React.HTMLAttributes<HTMLDivElement>
      > & {
        ref?:
          | ((instance: HTMLDivElement | null) => void)
          | React.RefObject<HTMLDivElement>
          | null
          | undefined;
      },
      BsPrefixProps<"div"> & ModalProps
    > &
    BsPrefixProps<"div"> &
    ModalProps & { children?: React.ReactNode }
) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cadastrar Novo Aluno
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className='col-8'>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome Completo"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="number"
              placeholder="Celular"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Fechar
        </Button>
        <Button variant="primary" onClick={() => props.createStudent(name, phone)}>
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewClassModal;
