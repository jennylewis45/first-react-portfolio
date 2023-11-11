import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

     <Navbar/>
  
       
    <Router>
   
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      

      </Routes>
    

    </Router>
    <Home/>
   </div>
  );
}

export default App;
