import Navbar from '../components/navbar';
import CardCarousel from '../components/cardCarousel';
import wandavision from '../components/images/wandavision.png';
import '../App.scss';
import { NavLink } from 'react-router-dom';

const Wandavision = () => {
    return (
		<div className="App">
			<header>
				<Navbar></Navbar>
			</header>
		  
			<body>
				<h1 className='align-left'>WandaVision</h1>
				<p className='text-gray-secondary align-left'>TV Mini Series • 2021 • TV-PG • 5h 50m</p>

				<div className="flex-row gap-12">
				<span class="dot blue"></span>
				<h1>At a Glance</h1>
				</div>
				<div className='flex-row align-top gap-36'>
					<img src='https://m.media-amazon.com/images/M/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWEwMmQtZTU5YTIwZmJjZGQ0XkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_FMjpg_UX1000_.jpg' 
						alt="" width={342}></img>
					<div className='flex-col align-left gap-12'>
						<div className='score'>
							<div className='score-progress green'style={{width:332*54/100}}></div>
							<div className='score-container'></div>
							<div className='score-value'>{24}</div>
						</div>
						<p>“WandaVision isn’t particularly offensive when it comes to diversity on screen, but it’s not good either.”</p>
						<p className='text-gray-secondary'>Reviewed by <NavLink className="navLink reviewer">Noon</NavLink></p>

						<p>“I found the show fell flat compared to the potential of the cast, with problems in how characters of color were represented and persistent reminders of how Marvel erased one of their few Jewish and Romani characters from their cinematic universe.”</p>
						<p className='text-gray-secondary'>Reviewed by <NavLink className="navLink reviewer">Jackal</NavLink></p>
						
						<h2>Bias Tags</h2>
						<div className='flex-row gap-12'>
							{/* NOTE: turn these into chips */}
							<p className='text-blue'>Young</p>
							<p className='text-blue'>Tokenization</p>
						</div>
					</div>
				</div>

				<div className="flex-row gap-12">
				<span class="dot blue"></span>
				<h1>Cast and Characters</h1>
				</div>



				<div className="flex-row gap-12">
				<span class="dot blue"></span>
				<h1>Bias and Reception</h1>
				</div>

				<div className="flex-row gap-12">
				<span class="dot blue"></span>
				<h1>Review #1</h1>
				</div>

				<div className="flex-row gap-12">
				<span class="dot blue"></span>
				<h1>Comments</h1>
				</div>

				<CardCarousel></CardCarousel>
			</body>
		</div>
	  );
}

export default Wandavision;
