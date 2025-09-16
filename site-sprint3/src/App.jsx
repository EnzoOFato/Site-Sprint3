import './App.css'
import Head from "./components/Head"
import Footer from './components/Footer'
import { Outlet } from "react-router-dom";


function App() {

  return (
    <>
      <Head /> 
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
