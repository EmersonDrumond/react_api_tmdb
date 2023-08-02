import "./App.css"
import { Link } from 'react-router-dom'

function App() {
 

  return (
    <>
      <nav className="navbar">
        <h2>
          <Link to="/">MoviesLib</Link>
        </h2>
        <Link to="/movie/1">MoviesLib</Link>
        <Link to="/search">MoviesLib</Link>
      </nav>
      <h2>MoviesLib</h2>
    </>
  )
}

export default App
