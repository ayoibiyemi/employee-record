import React from "react";


function Form(props) {
  return (
    <div className = "row">
      <div className = "col-sm-6">
    <form onSubmit = {props.onAddEmployee}>
  <div className="mb-3">
    <label htmlFor="firstname" className="form-label">First Name</label>
    <input 
    type="text" 
    name= "firstname"
    className="form-control" 
    id="firstname" 
    value= {props.firstName}
    onChange= {props.onFirstNameInputChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="lastname" className="form-label">Last Name</label>
    <input 
    type="text" 
    name= "lastname"
    className="form-control" 
    id="lastname" 
    value = {props.lastName}
    onChange= {props.onLastNameInputChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="department" className="form-label">Department</label>
    <input 
    type="text" 
    name="department"
    className="form-control" 
    id="department" 
    value = {props.department}
    onChange = {props.onDepartmentInputChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="date" className="form-label">Hire Date</label>
    <input 
    type="date" 
    name= "hiredate"
    className="form-control" 
    id="date"
    value= {props.hireDate}
    onChange= {props.onHireDateInputChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Add Record</button>
</form>
      </div>
    </div>
  );
}

export default Form;
