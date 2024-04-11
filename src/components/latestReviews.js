import { NavLink } from 'react-router-dom';

import CardHighlight from './cardHighlight';

import scoreYellow from './images/scoreYellow.png'
import scoreGreen from './images/scoreGreen.png'
import wandavision from './images/wandavision.png'
import spiderverse from './images/spiderverse.png'
import '../App.css';

export default function latestReviews() {
    return (
		<div >
			<div className="sectionHeader">
				<span class="dotBlue"></span>
				<h1>Latest Reviews</h1>
			</div>
			<div id="latestReviews">
				<CardHighlight
					imagesrc={wandavision}
					title="Wandavision"
					scoresrc={scoreYellow}
					quote="WandaVision isn't particularly offensive when it comes to diversity on screen, but it's not good either."
					link="/wandavision" />
				<CardHighlight
					imagesrc={spiderverse}
					title="Spider-Man: Across the Spiderverse"
					scoresrc={scoreGreen}
					quote="Addressing topics of family, Afro-Latino culture, and women mentorship all across the multiverse..."
					link="/" />
			</div>
		</div>
    )

}