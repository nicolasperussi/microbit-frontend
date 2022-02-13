import React, { useState } from "react";

import "./styles.scss";

import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdInsertDriveFile } from "react-icons/md";

import DefaultPicture from "../../assets/default-profile-picture.png";
import Button from "react-bootstrap/Button";
import { getUser, logout } from "../../services/auth";

const checkRoute = (route: string, location: string): String => {
  return location === route
    ? "btn-primary"
    : "btn-outline-primary";
};

const Navigation = () => {
  const [profilePicture, setProfilePicture] = useState(DefaultPicture);
  const user = getUser();

  const location = useLocation();

  return (
    <nav className="mb-nav">
      <div className="mb-nav-links">
        <Link
          className={`btn btn-lg ${checkRoute("/", location.pathname)} mb-nav-link `}
          to="/"
        >
          <MdDashboard className="mb-icon" /> Página Inicial
        </Link>
        <Link
          className={`btn btn-lg ${checkRoute(
            "/reports",
            location.pathname
          )} mb-nav-link`}
          to="/reports"
        >
          <MdInsertDriveFile className="mb-icon" /> Semanários
        </Link>
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
