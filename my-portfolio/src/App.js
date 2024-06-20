import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Nav from './Component/navigation';
import Testimonials from './Pages/Testimonials';
import Resume from './Pages/Resume'
import Project from './Pages/Projects';

function App() {
  return ( 
    <div className='bg-slate-300'>
            <BrowserRouter>
            <Nav className='p-4 bg-gray-800 text-white'/>
              <Routes>

              <Route path ='/'  element= {<Home />} />
                <Route path ='about'  element= {<About />} />
                <Route path ='portfolio'  element= {<Portfolio />} />
                <Route path = 'testimonials'  element = {<Testimonials />} />
                <Route path ='contact'  element= {<Contact />} />
                <Route path = 'resume' element = {<Resume/>}/>
                <Route path = 'projects' element = {<Project/>}/>
                
              </Routes>
              
            </BrowserRouter>
          
         
            
    </div>
  );
}

export default App;



