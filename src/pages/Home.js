import Navbar from '../components/navbar';
import LatestReviews from '../components/latestReviews';
import AboutMERL from '../components/aboutMERL';
import Articles from '../components/articles'
import Collection from '../components/collection';
import Footer from '../components/footer';
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
				<Collection/>
				<Footer/>
			</body>
		</div>
	  );
}

export default Home;
