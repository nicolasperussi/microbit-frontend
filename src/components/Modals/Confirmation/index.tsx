import React from "react";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import Modal, { ModalProps } from "react-bootstrap/modal";
import Button from "react-bootstrap/Button";

const Confirmation = (
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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Apagar <strong>{props.studentname}</strong>?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.actionmessage}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => props.action(props.studentid)}>
          {props.actionname}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirmation;
