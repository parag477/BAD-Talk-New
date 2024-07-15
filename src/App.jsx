
import './App.css'
import About from './components/About/About.jsx'
import HeroSection from './components/Hero/HeroSection'
import Navbar from './components/Navbar/Navbar'
import Team from './components/Team/Team'
import WhatisBad from './components/WhatisBad/WhatisBad'

function App() {
  return (
<>
<div>
  <Navbar/>
  <HeroSection/>
  <About/>
  <Team/>
  <WhatisBad/>
</div>

</>
  )
}

export default App
