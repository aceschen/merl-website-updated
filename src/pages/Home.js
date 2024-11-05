import Navbar from '../components/navbar';
import TopStudios from '../components/topStudios';
import LatestReviews from '../components/latestReviews';
import AboutMERL from '../components/aboutMERL';
import Articles from '../components/articles'
import Collections from '../components/collections';
import Footer from '../components/footer';
import { NavLink } from 'react-router-dom';
import '../App.scss';

const Home = () => {
    return (
		<div className="App">
			<header>
				<Navbar></Navbar>
			</header>
		  
			<body>
				<TopStudios/>
				<AboutMERL/>
				<LatestReviews/>
				<Collections/>
				{/* <Articles/> */}
				
				<Footer/>
			</body>
		</div>
	  );
}

export default Home;
