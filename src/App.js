import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="App">
    
        <Router>
        <Navbar />
         <Routes>
            <Route path='/' exact element={<Home />} /> 
            <Route path='/home' exact element={<Home />} />
            <Route path='/about' exact element={<About />} />
            <Route path='/project' exact element={<Project />} />
       <Route path='/contact' exact element={<Contact/>}/>
          </Routes>

        </Router>
        

       
      </div>
    </>
  )
}

export default App;


