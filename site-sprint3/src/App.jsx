import './App.css'
import Index from './pages/Index'
import Head from "./components/Head"
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='flex flex-col'>
        <Head /> 
        <div>
          <Index />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
