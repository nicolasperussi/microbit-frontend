import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewClassModal from "../../components/Modals/NewClass";
import Navigation from "../../components/Navigation";
import { api } from "../../services/api";
import "./styles.scss";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/classes").then((res) => {
      setClasses(res.data.classes);
    });
    api.get("/students").then((res) => {
      setStudents(res.data.students);
    });
  }, []);

  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className="fullPage">
      <Navigation />
      <div className="p-3 page-container">
        <header className="d-flex fluid-container justify-content-between align-items-center mb-5">
          <h1>Turmas</h1>
          <button
            className="btn btn-lg btn-primary"
            onClick={() => openModal()}
          >
            Nova Turma
          </button>
        </header>

        <div className="d-flex fluid-container align-content-center row gap-5 px-3">
          <Link
            to="/classes/english"
            className="d-flex justify-content-center align-items-center btn btn-lg btn-danger course-link"
          >
            Inglês
          </Link>
          <Link
            to="/classes/computing"
            className="d-flex justify-content-center align-items-center btn btn-lg btn-success course-link"
          >
            Informática
          </Link>
        </div>

        <NewClassModal
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

export default Classes;
