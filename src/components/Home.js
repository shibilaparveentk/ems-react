import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Employee from '../Employee';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  const handleDelete = (empId) => {
    let index = Employee.map((item) => item.empId).indexOf(empId)
    Employee.splice(index, 1)
    navigate('/');
  }
  
  const handleUpdate =(empId,empName,empDesig,empSalary)=>{
    localStorage.setItem("empId",empId)
    localStorage.setItem("empName",empName)
    localStorage.setItem("empDesig",empDesig)
    localStorage.setItem("empSalary",empSalary)
  }




  return (
    <>
     <div class="container">
        <h1 className='text-center my-5 mx-5'>List of Employees &nbsp;
          <Link to={'/add'}>
            <Button variant='primary'>ADD
              <i class="fa-solid fa-user-plus"></i>
            </Button>
  
          </Link>
        </h1>
        <div style={{ margin: "8rem" }}>
  
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>EMPLOYEE NAME</th>
                <th>EMPLOYEE DESIGNATION</th>
                <th>EMPLOYEE SALARY</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                Employee && Employee.length > 0 ?
                  Employee.map((item) => (
                    <tr>
                      <td>{item.empName}</td>
                      <td>{item.empDesig}</td>
                      <td>{item.empSalary}</td>
                      <td>
                       <Link to = {'/update'}>
                       <Button onClick={()=>handleUpdate(item.empId,item.empName,item.empDesig,item.empSalary)}>
                          <i class="fa-sharp fa-solid fa-user-pen"></i></Button>
                       </Link>

                         &nbsp;
                        <Button onClick={()=>handleDelete(item.empId)} variant='danger'>
                          <i class="fa-solid fa-user-minus"></i></Button>
                      </td>
                    </tr>
                  )) :
                  "No data to display"
              }
            </tbody>
          </Table>
        </div>
     </div >
    </>
  )
}

export default Home