import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './pages/Home/Home'
import ProjectsList from './pages/ProjectsList/ProjectsList'
import Project from './pages/Project/Project'
import Contact from './pages/Contact/Contact'

const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/portfolio-2023" element={<Home />} />
        <Route path="/portfolio-2023/projects" element={<ProjectsList />} />
        <Route path="/portfolio-2023/project/:name" element={<Project />} />
        <Route path="/portfolio-2023/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routing
