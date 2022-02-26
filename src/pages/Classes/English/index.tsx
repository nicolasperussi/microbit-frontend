import { useEffect, useState } from "react";
import Navigation from "../../../components/Navigation";
import { api } from "../../../services/api";
import IClass from "../../../interfaces/classInterface";
import ClassTable from "../../../components/ClassTable";

const EnglishClasses = () => {
  const [classes, setClasses] = useState<IClass[] | never[]>([]);

  useEffect(() => {
    api
      .get("/classes/course/english")
      .then((res) => setClasses(res.data.classes));
  }, []);

  return (
    <div className="fullPage">
      <Navigation />
      <div className="p-3 page-container">
        <header className="d-flex container justify-content-between align-items-center mb-5">
          <h1>Turmas de Inglês</h1>
          {/* <button classN  ame="btn btn-lg btn-primary">Novo Curso</button> */}
        </header>

        <div className="d-flex container row gap-5">
          {classes.map((classObj) => {
            return (
              <ClassTable
                key={classObj._id}
                _id={classObj._id}
                course={classObj.course}
                teacher={classObj.teacher}
                time={classObj.time}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EnglishClasses;
