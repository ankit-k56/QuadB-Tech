import { useState } from 'react'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Footer from './components/footer'


import InfoTable from './components/InfoTable'
import About from './components/About'
import FooterFixed from './components/FooterFixed'
import Copyright from './components/Copyright'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='p-[2rem]'>
    <Navbar/>
    <h1 className='text-stone-400 text-base md:text-3xl font-thin py-6'>Best Price to Trade</h1>
    <About/>
    <InfoTable/>
    </div>
    
    <Copyright/>
    <FooterFixed/>

    </>
  )
}

export default App
