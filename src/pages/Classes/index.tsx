import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="fullPage">
      <Navigation />
      <div className="p-3 page-container">
        <header className="d-flex container justify-content-between align-items-center mb-5">
          <h1>Turmas</h1>
          <button className="btn btn-lg btn-primary">Nova Turma</button>
        </header>
        <div className="d-flex container row gap-5">
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
      </div>
    </div>
  );
};

export default Classes;
