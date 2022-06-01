import { useEffect, useState } from "react";
import Navigation from "../../../components/Navigation";
import { api } from "../../../services/api";
import IClass from "../../../interfaces/classInterface";
import ClassTable from "../../../components/ClassTable";
import IStudent from "../../../interfaces/studentInterface";

const ComputingClasses = () => {
  const [classes, setClasses] = useState<IClass[] | never[]>([]);
  const [students, setStudents] = useState<IStudent[] | never[]>([]);

  useEffect(() => {
    api
      .get("/classes/course/computing")
      .then((res) => setClasses(res.data.classes));
    api.get("/students").then((res) => setStudents(res.data.students));
  }, []);

  return (
    <div className="fullPage">
      <Navigation />
      <div className="p-3 page-container">
        <header className="d-flex fluid-container justify-content-between align-items-center mb-5">
          <h1>Turmas de Informática</h1>
          {/* <button className="btn btn-lg btn-primary">Novo Curso</button> */}
        </header>

        <div className="d-flex container row d-flex fluid-container align-content-center row gap-5 px-3 gap-5">
          {classes.map((classObj) => {
            return (
              <ClassTable
                key={classObj._id}
                _id={classObj._id}
                course={classObj.course}
                teacher={classObj.teacher}
                time={classObj.time}
                students={students.filter((student) =>
                  student.classes.includes(classObj._id)
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComputingClasses;
