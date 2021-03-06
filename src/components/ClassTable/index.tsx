import React, { useLayoutEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import IClass from "../../interfaces/classInterface";
import IStudent from "../../interfaces/studentInterface";
import { api } from "../../services/api";

const ClassTable = ({ _id, course, teacher, time, students }: IClass) => {
  // const [students, setStudents] = useState([]);

  // useLayoutEffect(() => {
  //   api
  //     .get(`/students/class/${_id}`)
  //     .then((res) => setStudents(res.data.students));
  // });

  course = course === "english" ? "Inglês" : "Informática";

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>
            {time}, Professor {teacher}
          </th>
        </tr>
        <tr>
          <th>Nome</th>
          <th>Celular</th>
        </tr>
      </thead>
      <tbody>
        {students!.map((student: IStudent) => (
          <tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ClassTable;
