import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Careers from './Pages/Careers'
import Job from './Pages/Job'
import About from './Pages/About'
import Industry from './Pages/Industry'
import Industries from './Pages/Industries'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/industries' element={<Industries />} />
        <Route path='/industry/:industry' element={<Industry />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/job/:id/:title' element={<Job />} />
      </Routes>
    </Router>
  );
  
}

