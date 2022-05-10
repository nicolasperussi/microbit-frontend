import React, { useEffect, useState } from "react";
import NewStudentModal from "../../components/Modals/NewStudent";
import Navigation from "../../components/Navigation";
import Table from "react-bootstrap/Table";
import IStudent from "../../interfaces/studentInterface";
import { api } from "../../services/api";
import "./styles.scss";
import IClass from "../../interfaces/classInterface";
import { Link } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    api.get("/students").then((res) => {
      setStudents(res.data.students);
    });
    api.get("/classes").then((res) => setClasses(res.data.classes));
  }, []);

  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className="fullPage">
      <Navigation />
      <div className="p-3 page-container">
        <header className="d-flex fluid-container justify-content-between align-items-center mb-5">
          <h1>Alunos</h1>
          <button
            className="btn btn-lg btn-primary"
            onClick={() => openModal()}
          >
            Novo Aluno
          </button>
        </header>

        <div className="d-flex fluid-container align-content-center row gap-5 px-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Celular</th>
                <th>Turmas</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student: IStudent) => {
                let studentClasses: any = classes.filter((c: IClass) =>
                  student.classes.includes(c._id)
                );

                return (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.phone}</td>
                    <td>
                      {studentClasses.map((c: IClass) => {
                        let linkClass =
                          c.course === "english"
                            ? "btn badge btn-danger"
                            : "btn badge btn-success";

                        return (
                          <Link to="" className={linkClass + " me-2"}>
                            {c.course === "english" ? "Inglês" : "Informática"},{" "}
                            {c.time}
                          </Link>
                        );
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        <NewStudentModal
          show={show}
          onHide={closeModal}
          closemodal={closeModal}
          backdrop="static"
          classes={classes}
        />
      </div>
    </div>
  );
};

export default Students;