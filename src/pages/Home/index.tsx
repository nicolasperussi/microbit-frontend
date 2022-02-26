import React from "react";
import Navigation from "../../components/Navigation";

const Home = () => {
  return (
    <div className="fullPage">
      <Navigation />
      <div className="p-3 page-container">
        <header className="d-flex container justify-content-between align-items-center">
          <h1>Página Inicial</h1>
          {/* <button className="btn btn-lg btn-primary">Novo Curso</button> */}
        </header>
      </div>
    </div>
  );
};

export default Home;
