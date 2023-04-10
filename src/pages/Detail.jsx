import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const Detail = () => {
  // pasang useparams dari react router dom
  // const params = useParams()
  // console.log(params)
  const { id } = useParams()
  // pasang hooks user
  const [user, setUser] = useState(null)
  // get data user berdasarkan id
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
      })
      .catch((err) => console.log(err))
  }, [id])
  return (
    <div>
      <h1>Detail Page</h1>
      <h2>params id: {id}</h2>
      {/* cetak data jsonnya kedalam browser */}
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <hr />
      {/* buat navigasi untuk children Detail */}
      <nav>
        <Link to='post'>Post</Link> |<Link to='product'>Product</Link>
      </nav>
      {/* Pasang Outlet dari react router dom */}
      <Outlet />
    </div>
  )
}

export default Detail
