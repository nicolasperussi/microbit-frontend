import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import "./styles.scss";

const Courses = () => {
  return (
    <div className="fullPage">
      <Navigation />
      <div className="p-3 page-container">
        <header className="d-flex container justify-content-between align-items-center mb-5">
          <h1>Cursos</h1>
          {/* <button className="btn btn-lg btn-primary">Novo Curso</button> */}
        </header>

        <div className="d-flex container row gap-5">
          <Link
            to="/courses/english"
            className="d-flex justify-content-center align-items-center btn btn-lg btn-danger course-link"
          >
            Inglês
          </Link>
          <Link
            to="/courses/computing"
            className="d-flex justify-content-center align-items-center btn btn-lg btn-success course-link"
          >
            Informática
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
