import React from 'react'
// import Navigate
import { Navigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
  //   facke authentication
  const fakeAuth = true
  //   jika belum login
  if (!fakeAuth) return <Navigate to='/login' />
  // jika sudah login
  return props.children
}

export default ProtectedRoute
