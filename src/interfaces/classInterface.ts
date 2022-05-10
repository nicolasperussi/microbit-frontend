import IStudent from "./studentInterface";

interface IClass {
  _id: string;
  teacher: string;
  course: string;
  time: string;
  students?: Array<IStudent> | undefined;
}

export default IClass;
