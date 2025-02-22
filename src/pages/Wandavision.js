import Navbar from '../components/navbar';
import Footer from '../components/footer';

import AtAGlance from '../components/indvtext/atAGlance';
import CharactersCast from '../components/indvtext/charactersCast';
import BiasReception from '../components/indvtext/biasReception';
import Reviews from '../components/indvtext/reviews';

import '../App.scss';


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