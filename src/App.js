import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wandavision from './pages/Wandavision'
// import About from './pages/About';
// import Courses from './pages/Courses';
import './App.scss';

const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/wandavision" element={<Wandavision />} />
           {/* <Route path="/search" element={<Search />} /> */}
           {/* <Route path="/top10" element={<Top10 />} /> */}
        </Routes>
     </>
  );
 };
 

export default App;
