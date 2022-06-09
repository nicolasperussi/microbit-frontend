import React, { useState } from "react";

import "./styles.scss";

import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdInsertDriveFile, MdVerifiedUser } from "react-icons/md";

import DefaultPicture from "../../assets/default-profile-picture.png";
import Button from "react-bootstrap/Button";
import { getUser, logout } from "../../services/auth";

const checkRoute = (route: string, location: string): String => {
  return location.includes(route) ? "btn-primary" : "btn-outline-primary";
};

const Navigation = () => {
  const [profilePicture] = useState(DefaultPicture);
  const user = getUser();

  const location = useLocation();

  return (
    <nav className="mb-nav">
      <div className="mb-nav-links">
        <Link
          className={`btn ${checkRoute(
            "/home",
            location.pathname
          )} mb-nav-link `}
          to="/"
        >
          <MdDashboard className="mb-icon" /> Página Inicial
        </Link>
        {/* <Link
          className={`btn ${checkRoute(
            "/reports",
            location.pathname
          )} mb-nav-link`}
          to="/reports"
        >
          <MdInsertDriveFile className="mb-icon" /> Semanários
        </Link> */}
        <Link
          className={`btn ${checkRoute(
            "/classes",
            location.pathname
          )} mb-nav-link`}
          to="/classes"
        >
          <MdInsertDriveFile className="mb-icon" /> Turmas
        </Link>
        <Link
          className={`btn ${checkRoute(
            "/students",
            location.pathname
          )} mb-nav-link`}
          to="/students"
        >
          <MdVerifiedUser className="mb-icon" /> Alunos
        </Link>
        {/* <Link
          className={`btn ${checkRoute(
            "/courses",
            location.pathname
          )} mb-nav-link`}
          to="/courses"
        >
          <MdInsertDriveFile className="mb-icon" /> Cursos
        </Link> */}
      </div>
      <div className="mb-profile-wrapper">
        <img className="mb-profile-pic" src={profilePicture} alt="profile" />
        <h3 className="mb-username">{user.name}</h3>
        <Button variant="outline-secondary">Ver perfil</Button>
        <Button variant="outline-danger" onClick={() => logout()}>
          Sair
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
