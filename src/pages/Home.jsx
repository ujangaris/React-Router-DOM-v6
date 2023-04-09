import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // deklarasikan hooks users
  const [users, setUsers] = useState([])
  //   pasang useNavigate dari react-router-dom
  const navigate = useNavigate()
  //   gunakan useEffect untuk menampilkan data users
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUsers(data)
      })
      .catch((err) => console.log(err))
  }, [])
  //   pasang handleGoToDetail untuk menangkap nilai dari id
  // agar bisa kehalaman detail sesuai id dari user
  const handleGoToDetail = (id) => {
    navigate(`/${id}`)
    console.log(id)
  }
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {/* gunakan map untuk mencetak nilai dari users */}
        {users.map((user, index) => (
          <li key={index}>
            {user.name} |{' '}
            <button onClick={() => handleGoToDetail(user.id)}>
              go to details
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
