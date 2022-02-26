import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewStudentModal from "../../components/Modals/NewStudent";
import Navigation from "../../components/Navigation";
import Table from "react-bootstrap/Table";
import IStudent from "../../interfaces/studentInterface";
import { api } from "../../services/api";
import "./styles.scss";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/students").then((res) => {
      setStudents(res.data.students);
    });
  }, []);

  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const createStudent = async (name: string, phone: number) => {
    api.post("/students", { name, phone });
    // window.location.reload();
  };

  return (
    <div className="fullPage">
      <Navigation />
      <div className="p-3 page-container">
        <header className="d-flex container justify-content-between align-items-center mb-5">
          <h1>Alunos</h1>
          <button
            className="btn btn-lg btn-primary"
            onClick={() => openModal()}
          >
            Novo Aluno
          </button>
        </header>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Celular</th>
              <th>Turmas</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student: IStudent) => (
              <tr>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>

        <NewStudentModal
          show={show}
          onHide={closeModal}
          backdrop="static"
          createStudent={createStudent}
        />
      </div>
    </div>
  );
};

export default Students;
