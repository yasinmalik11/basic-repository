import { Routes, Route } from 'react-router-dom'
import Header from './Component/Header'
import Home from './Component/Home'
import Packages from './Component/Packages'
import About from './Component/About'
import Destination from './Component/Destination'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path='/Destination' element={<Destination/>}></Route>
        <Route path="/Packages" element={<Packages />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
     <Footer/>

    </>
  )
}

export default App
