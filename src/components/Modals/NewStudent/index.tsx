import React, { useState } from "react";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { MdAdd as PlusIcon } from "react-icons/md";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "../../../services/api";
import IClass from "../../../interfaces/classInterface";

const NewStudentModal = (
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
  // User Info
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [classes, setClasses] = useState<Array<string>>([]);

  const [twoClasses, setTwoClasses] = useState(false);

  const createStudent = async (
    name: string,
    phone: string,
    classes: Array<string>
  ) => {
    console.log({ name, phone, classes });
    api.post("/students", { name, phone, classes });
    props.closemodal();
    window.location.reload();
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
          Cadastrar Novo Aluno
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="col-8">
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

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Turmas</Form.Label>
            <Form.Select
            className="mb-3"
              defaultValue=""
              onChange={(e) => {
                setClasses(prev => [...prev, e.target.value]);
              }}
            >
              <option disabled value="">
                Selecione uma turma
              </option>
              {props.classes.map((classObj: IClass) => (
                <option value={classObj._id} key={classObj._id}>
                  {classObj.course === "english" ? "Inglês" : "Informática"},{" "}
                  {classObj.time}
                </option>
              ))}
            </Form.Select>
            {twoClasses ? (
              <Form.Select
                defaultValue=""
                onChange={(e) => {
                  setClasses(prev => [...prev, e.target.value]);
                }}
              >
                <option disabled value="">
                  Selecione uma turma
                </option>
                {props.classes.map((classObj: IClass) => (
                  <option value={classObj._id} key={classObj._id}>
                    {classObj.course === "english" ? "Inglês" : "Informática"},{" "}
                    {classObj.time}
                  </option>
                ))}
              </Form.Select>
            ) : (
              <Button
                onClick={() => setTwoClasses(true)}
                variant="outline-success"
              >
                <PlusIcon style={{ fontSize: 20 }} />
              </Button>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Fechar
        </Button>
        <Button
          variant="primary"
          onClick={() => createStudent(name, phone, classes)}
        >
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewStudentModal;
