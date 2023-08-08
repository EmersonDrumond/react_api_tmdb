import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'


import './App.css'


function App() {
  

  return (
    <main className='App'>
      <Navbar/>
      <Outlet/>
    </main>
  )
}

export default App
