import React, { useState } from "react";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import Modal, { ModalProps } from "react-bootstrap/modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "../../../services/api";

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
  const [teacher, setTeacher] = useState("");
  const [course, setCourse] = useState("");
  const [time, setTime] = useState("");

  const createClass = (teacher: string, course: string, time: string) => {
    api.post("/classes", { teacher, course, time }).then(props.closeModal());
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cadastrar Nova Turma
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="col-8">
          <Form.Group className="mb-3" controlId="formBasicTeacher">
            <Form.Label>Professor</Form.Label>
            <Form.Select
              className="mb-3"
              defaultValue=""
              onChange={(e) => {
                setTeacher(e.target.value);
              }}
            >
              <option disabled value="">
                Escolha o professor
              </option>
              <option value="Fabrício">Fabrício</option>
              <option value="Nicolas">Nicolas</option>
              <option value="Renan">Renan</option>
              <option value="Rômulo">Rômulo</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSubject">
            <Form.Label>Matéria</Form.Label>
            <Form.Select
              className="mb-3"
              defaultValue=""
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            >
              <option disabled value="">
                Selecione uma turma
              </option>
              <option value="english">Inglês</option>
              <option value="computing">Informática</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTime">
            <Form.Label>Horário</Form.Label>
            <Form.Control
              type="text"
              placeholder="Horário das aulas"
              onChange={(e) => setTime(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Fechar
        </Button>
        <Button
          variant="primary"
          onClick={() => createClass(teacher, course, time)}
        >
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewClassModal;
