import Navbar from '../components/navbar';
import TopStudios from '../components/homepage/topStudios';
import LatestReviews from '../components/homepage/latestReviews';
import AboutMERL from '../components/homepage/aboutMERL';
import Collections from '../components/homepage/collections';
import Footer from '../components/footer';
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
