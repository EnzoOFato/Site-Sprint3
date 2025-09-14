import './App.css'
import Index from './pages/Index'
import Head from "./components/Head"
import Footer from './components/Footer'
import Campeonatos from './pages/Campeonatos'
import { Outlet } from "react-router-dom";


function App() {

  return (
    <>
      <div className='flex flex-col'>
        <Head /> 
        <div>
          <Outlet />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
