import { useState, useEffect } from "react"
import { mockEmployees } from "../mockdata/mockEmployees"
import Navbar from "../components/Navbar"
import UserSector from "../components/UserSector"
import AdminSector from "../components/AdminSector"

const initialEmployees = mockEmployees

const Home = () => {

  const [ employees, setEmployees ] = useState([])
  const [ sector, setSector ] = useState('')

  const handleSetEmpolyees = (data) => {
    if (!data.name) return
    setEmployees((prev) => (
      [
        ...prev,
        {
          id: employees.length,
          ...data
        }
      ]
    ))
  }

  const handleDeleteEmployees = (id) => {
    setEmployees(() => (
      employees.filter((employee) => {
        return employee.id != id
      })
    ))
  }

  useEffect(() => {
    setEmployees(initialEmployees)
  }, [])

  let titles
  let sectorRender = ''
  switch (sector) {
    case 'User': {
      titles = 'Home - User Sector'
      sectorRender = <UserSector employees={employees} />
      break
    }
    case 'Admin': {
      titles = 'Home - Admin Sector'
      sectorRender = <AdminSector
                        employees={employees}
                        handleSetEmpolyees={handleSetEmpolyees}
                        handleDeleteEmployees={handleDeleteEmployees}
                      />
      break
    }
    default:
      titles = 'React - Assessment'
  }

  return (
    <div className="home row text-center gap-5">
      <Navbar />
      <header>
        <div>
          <h1>Generation Thailand </h1>
          <h1>{titles}</h1>
        </div>
        <div className="container-btn">
          <button onClick={() => setSector('User')}>User Home Sector</button>
          <button onClick={() => setSector('Admin')}>Admin Home Sector</button>
        </div>
      </header>
      <section>
        {sectorRender}
      </section>
    </div>
  )
}


export default Home
