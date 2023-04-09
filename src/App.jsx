import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link> |<Link to='/login'>Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Detail />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
