import Navbar from '../components/navbar';
import LatestReviews from '../components/latestReviews';
import '../App.css';

const Home = () => {
    return (
		<div className="App">
			<header>
				<Navbar></Navbar>
			</header>
		  
			<body>
				<LatestReviews/>
			</body>
		</div>
	  );
}

export default Home;
