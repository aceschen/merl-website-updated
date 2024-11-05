import Navbar from '../components/navbar';
import CardCarousel from '../components/cardCarousel';
import Footer from '../components/footer';
import quantchart from '../components/images/quant-chart.png';
import qualchart from '../components/images/qual-chart.png';

import AtAGlance from '../components/indvtext/atAGlance';
import CharactersCast from '../components/indvtext/charactersCast';
import BiasReception from '../components/indvtext/biasReception';
import Reviews from '../components/indvtext/reviews';

import '../App.scss';
import { NavLink } from 'react-router-dom';
import Collection from '../components/collection';


const Wandavision = () => {
    return (
		<div className="App">
			<header>
				<Navbar></Navbar>
			</header>
		  
			<body>
				<AtAGlance/>
				<CharactersCast/>
				<BiasReception/>
				<Reviews/>

				
				<Footer></Footer>
			</body>
		</div>
	  );
}

export default Wandavision;