import { Trash } from "react-bootstrap-icons";


function TableHeader(){
  return ( 
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Department</th>
      <th scope="col">Hire Date</th>
      <th scope="col"></th>
    </tr>
  </thead>
  )
}
function TablebBody(props){
  

  const rows = props.tableEmployees.map((employee, index) => {
  return (
    
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{employee.firstname}</td>
      <td>{employee.lastname}</td>
      <td>{employee.department}</td>
      <td>{employee.hiredate}</td>
      <td><button onClick={props.tableOnDelete} value= {employee.id} className = "btn btn-primary "> Delete <Trash/> </button></td>
    </tr>
  
  );

});
return <tbody>{rows}</tbody>;
}

function Data(props) {
  return (
    <div className="container my-5">
     <table className="table table-striped">
    < TableHeader />
    < TablebBody 
    tableEmployees = {props.employees}
    tableOnDelete = {props.onDelete}
  />
</table>
    </div>
  );
}

export default Data;
