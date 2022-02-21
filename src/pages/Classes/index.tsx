import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import IClass from "../../interfaces/classInterface";
import IStudent from "../../interfaces/studentInterface";
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
    <>
      <Navigation />
      <div className="container">
        <header className="d-flex container justify-content-between align-items-center">
          <h1>Turmas</h1>
          <button className="btn btn-lg btn-primary">Nova Turma</button>
        </header>
        <div className="row">
          {classes.map((classObj: IClass) => (
            <div key={classObj._id} className="col-xs-6 col-md-6">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">
                      {classObj.course}, {classObj.time}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student: IStudent) => {
                    // eslint-disable-next-line array-callback-return
                    return student.classes.map((studClass) => {
                      console.log(studClass === classObj._id);
                      if (studClass === classObj._id)
                        return (
                          <tr>
                            <td>{student.name}</td>
                          </tr>
                        );
                    });
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Classes;
