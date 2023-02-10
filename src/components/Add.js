import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import Employee from '../Employee';



function Add() {
  const [empName, setName] = useState('')
  const [empDesig, setDesig] = useState('')
  const [empSalary, setSalary] = useState(0)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    //to prevent auto refresh
    event.preventDefault()
    // console.log(empName);
    // console.log(empDesig);
    // console.log(empSalary);

    
    //generate uuid
    const ids= uuid()
    let uniqueId = ids.slice(0,8)
    let salary = Number(empSalary)
    console.log(uniqueId );
    Employee.push({
      empId:uniqueId,
      empName,
      empDesig,
      empSalary:salary
  })
  navigate('/')
}

  return (
    <div className='my-5 p-5'>
      <h1 className='text-secondary'>Add New Employee Details</h1>
      <p style={{ 'text-align': 'justify' }}> Employee information helps organisation to keep critical details about every employee in a single accessible place.Many essential activities such as payroll,health insurance and taxation utilise the employees information from the same database.
        Knowing about the information form and its importance can help you prepare a concise and practical information form and efficiently manage the employee data you collect.
      </p>

      <div className='row'>
        {/* <div className='col-4'>
          <img className='mt-5' style={{"width":"300px" }} src='https://cdn.pixabay.com/photo/2017/07/11/13/56/user-2493635_1280.png' alt="no image"></img>
        </div> */}
        <div className='col-8'>
          <Form className='border mt-3 p-5 '>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Enter Employee Name"
                onChange={(event) => setName(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDesig">
              <Form.Control type="text" placeholder="Enter Employee Designation"
                onChange={(event) => setDesig(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSalary">
              <Form.Control type="text" placeholder="Enter Employee Salary"
                onChange={(event) => setSalary(event.target.value)} />
            </Form.Group>


            <Button onClick={(event) => handleSubmit(event)} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className='col-2'></div>
      </div>
    </div>

  )
  }

export default Add