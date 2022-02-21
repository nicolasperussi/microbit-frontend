interface IReport {
  teacher: string;
  week: string;
  classes: [
    {
      class: string;
      date: Date;
      subject: string;
      content: string;
    }
  ] 
}

export default IReport;