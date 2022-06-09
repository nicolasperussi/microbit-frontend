import React, { useEffect, useLayoutEffect, useState } from "react";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { MdAdd as PlusIcon } from "react-icons/md";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "../../../services/api";
import IClass from "../../../interfaces/classInterface";

const EditStudentModal = (
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
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [classes, setClasses] = useState<Array<string>>([]);

  const updateStudent = async (
    name: string,
    phone: string,
    classes: Array<string>
  ) => {
    api.patch(`/students/${props.student._id}`, {
      name: name.length > 0 ? name : props.student.name,
      phone: phone.length > 0 ? phone : props.student.phone,
      classes: classes.length > 0 ? classes : props.student.classes,
    });
    props.closemodal();
    window.location.reload();
  };

  console.log({});

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar Aluno
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="col-8">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome Completo"
              defaultValue={props.student.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Celular</Form.Label>
            <Form.Control
              type="number"
              placeholder="Celular"
              defaultValue={props.student.phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicClasses">
            <Form.Label>Turmas</Form.Label>
            {props.student.classes.map((classId: string) => (
              <Form.Select
                className="mb-3"
                defaultValue={classId}
                onChange={(e) => {
                  setClasses((prev) => [...prev, e.target.value]);
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
            ))}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Fechar
        </Button>
        <Button
          variant="primary"
          onClick={() => updateStudent(name, phone, classes)}
        >
          Editar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditStudentModal;
