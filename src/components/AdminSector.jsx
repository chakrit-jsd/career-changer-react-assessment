import { useState } from "react"

const AdminSector = ({ employees, handleSetEmpolyees, handleDeleteEmployees }) => {
  const [ name, setName ] = useState('')
  const [ lastname, setLastname ] = useState('')
  const [ position, setPosition ] = useState('')

  const setData = () => {
    const data = {
      name: name,
      lastname: lastname,
      position: position
    }
    handleSetEmpolyees(data)

    setName('')
    setLastname('')
    setPosition('')
  }

  return (
    <div>
      <div className="container-header-admin">
        <h4>Create User Here</h4>
        <div className="container-input">
          <input type="text" placeholder="Name" value={name} onChange={({target}) => setName(target.value)}/>
          <input type="text" placeholder="Lastname" value={lastname} onChange={({target}) => setLastname(target.value)} />
          <input type="text" placeholder="Position" value={position} onChange={({target}) => setPosition(target.value)} />
          <button onClick={() => setData()}>Save</button>
        </div>
      </div>
      <table className="border-dark table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
              <td><button onClick={() => handleDeleteEmployees(employee.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminSector
