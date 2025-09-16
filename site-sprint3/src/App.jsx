import './App.css'
import Head from "./components/Head"
import Footer from './components/Footer'
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
