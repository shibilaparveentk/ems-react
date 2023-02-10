import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from '../Employee';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [empName, setName] = useState('')
  const [empDesig, setDesig] = useState('')
  const [empSalary, setSalary] = useState(0)
  const [empId, setId] = useState('')

  // console.log(empName);
  // console.log(empDesig);
  // console.log(empSalary);
  // console.log(empId);

  
  const navigate = useNavigate()

  const handleUpdate =(event)=>{
    //to prevent auto refresh
    event.preventDefault()

    
    //find index number of empId that should be updated
    let index = Employee.map((item)=>item.empId).indexOf(empId)
    let emp = Employee[index]
    emp.empId = empId
    emp.empName = empName
    emp.empDesig = empDesig
    emp.empSalary = empSalary
    navigate('/')
  }


  useEffect(() => {
    setName(localStorage.getItem("empName"))
    setDesig(localStorage.getItem("empDesig"))
    setSalary(JSON.parse(localStorage.getItem("empSalary")))
    setId(localStorage.getItem("empId"))

  }, [])

  return (

    <div className='my-5 p-5'>
      <h1 className='text-secondary'>Update Employee Details</h1>
      <p style={{ 'text-align': 'justify' }}> Employee information helps organisation to keep critical details about every employee in a single accessible place.Many essential activities such as payroll,health insurance and taxation utilise the employees information from the same database.
        Knowing about the information form and its importance can help you prepare a concise and practical information form and efficiently manage the employee data you collect.
      </p>

      <div className='row'>
        {/* <div className='col-4'>
          <img className='mt-5' style={{ "width": "300px" }} src='https://cdn.pixabay.com/photo/2017/07/11/13/56/user-2493635_1280.png' alt="no image"></img>
        </div> */}
        <div className='col-8'>
          <Form className='border mt-3 p-5 '>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" value={empName} placeholder="Enter Employee Name"
                onChange={(event) => setName(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDesig">
              <Form.Control type="text" value={empDesig} placeholder="Enter Employee Designation"
                onChange={(event) => setDesig(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSalary">
              <Form.Control type="text" value={empSalary} placeholder="Enter Employee Salary"
                onChange={(event) => setSalary(event.target.value)}/>
            </Form.Group>


            <Button onClick={(event)=>handleUpdate(event)} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className='col-2'></div>
      </div>
    </div>


  )
}

export default Update