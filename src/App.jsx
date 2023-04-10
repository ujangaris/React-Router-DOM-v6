import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Post from './components/Post'
import Product from './components/Product'
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link> |<Link to='/login'>Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/:id'
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        >
          {/* membuat children dari component Details */}
          {/* /:id/post => /i/post */}
          <Route path={'post'} element={<Post />} />
          {/* /:id/product => /i/product */}
          <Route path={'product'} element={<Product />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
