import { NavLink } from 'react-router-dom';
import CardCarousel from './cardCarousel';

import ast from './images/carousel-cards/carousel-asteroid.png';
import bar from './images/carousel-cards/carousel-barbie.png';
import blu from './images/carousel-cards/carousel-bluebeetle.png';
import dar from './images/carousel-cards/carousel-daredevil.png';
import enc from './images/carousel-cards/carousel-encanto.png';
import opp from './images/carousel-cards/carousel-oppenheimer.png';
import spi from './images/carousel-cards/carousel-spiderverse.png';
import top from './images/carousel-cards/carousel-topgun.png';

import leftArrow from './images/left.png';
import rightArrow from './images/right.png';
import '../App.scss';

export default function Collection() {
    return (
		<div>
			<div className='flex-row space-between'>
				<div className="flex-row gap-12">
					<span class="dot blue"></span>
					<h1>MERL's Top 10</h1>	
				</div>
				<NavLink id="view-collection" to="/top10">VIEW COLLECTION</NavLink>
			</div>

			<div className='flex-row space-between align-top'>
				<img src={leftArrow} alt="" className="carouselArrow"></img>
				<CardCarousel
					imgsrc={spi}
					title="Spider-Man: Into the Spider-Verse"/>
				<CardCarousel
					imgsrc={ast}
					title="Asteroid City"/>
				<CardCarousel
					imgsrc={bar}
					title="Barbie"/>
				<CardCarousel
					imgsrc={top}
					title="Top Gun: Maverick"/>
				<img src={rightArrow} alt="" className="carouselArrow"></img>
			</div>
		</div>
    )

}