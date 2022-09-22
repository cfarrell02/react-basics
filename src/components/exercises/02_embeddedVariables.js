import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  const Modules = [{name: "Devops",noLectures: 2, noPracticals: 2},
  {name: "Enterprise Web Dev",noLectures: 3, noPracticals: 2}]
  return (
    <div>
      <h1>MSc Computing - Modules table.</h1>
      <table className="table table-bordered">
  <thead>
    <tr>
      <th>Name</th>
      <th>No lectures</th>
      <th>No practicals</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td>{Modules[0].name}</td>
      <td>{Modules[0].noLectures}</td>
      <td>{Modules[0].noPracticals}</td>
    </tr>
    <tr>
      <td>{Modules[1].name}</td>
      <td>{Modules[1].noLectures}</td>
      <td>{Modules[1].noPracticals}</td>
    </tr>
  </tbody >
</table>
</div>

  );
};

export default Demo;
