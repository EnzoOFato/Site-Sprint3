import './App.css'
import Index from './pages/Index'
import Head from "./components/Head"

function App() {

  return (
    <>
      <div className='flex flex-col'>
        <Head /> 
        <div className='min-h-screen'>
          <Index />
        </div>
      </div>
    </>
  )
}

export default App
