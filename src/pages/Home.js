import Navbar from '../components/navbar';
import LatestReviews from '../components/latestReviews';
import AboutMERL from '../components/aboutMERL';
import Articles from '../components/articles'
import Collection from '../components/collection';
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
				<LatestReviews/>
				<AboutMERL/>
				<Articles/>
				
				<div className='flex-row space-between'>
					<div className="flex-row gap-12">
						<span class="dot blue"></span>
						<h1>MERL's Top 10</h1>	
					</div>
					<NavLink id="view-collection" to="/top10">VIEW COLLECTION</NavLink>
				</div>
				<Collection className='section-margin'/>
				
				<Footer/>
			</body>
		</div>
	  );
}

export default Home;
