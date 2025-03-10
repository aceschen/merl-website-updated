import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wandavision from './pages/Wandavision'
import IndvText from './pages/IndvText'
import Search from './pages/Search';
import About from './pages/About';
// import Courses from './pages/Courses';
import './App.scss';
import { Link } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';


const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/wandavision" element={<Wandavision />} />
           <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />

           {/* <Route path="/top10" element={<Top10 />} /> */}

           <Route path="/reviews/:title" element={<IndvText />} />
        </Routes>
        <Analytics />
     </>
  );
 };
 

export default App;
