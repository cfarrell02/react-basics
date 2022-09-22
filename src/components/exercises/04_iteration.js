import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = (props) => {
  const Modules = [{name: "Devops",noLectures: 2, noPracticals: 2},
  {name: "Enterprise Web Dev",noLectures: 3, noPracticals: 2}]
  const course = "MSc Computing - Modules table.";

  const list = props.modules.map((module, index) => 
  <tr key={index}>
      <td>{module.name}</td>
      <td>{module.noLectures}</td>
      <td>{module.noPracticals}</td>

  </tr>
);
  return (
    <div>
      <h1>{props.course}</h1>
      <table className="table table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>No lectures</th>
      <th>No practicals</th>
    </tr>
  </thead>
  <tbody >
   {list}
  </tbody >
</table>
</div>

  );
};

export default Demo;
