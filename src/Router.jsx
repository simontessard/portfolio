import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import ProjectsList from './pages/ProjectsList/ProjectsList'
import Project from './pages/Project/Project'
import Information from './pages/Information/Information'

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/about" element={<Information />} />
        <Route path="/portfolio/projects" element={<ProjectsList />} />
        <Route path="/portfolio/project/:name" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routing
