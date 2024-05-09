import CardHighlight from './cardHighlight';
import CardWV from './cardWVTest';

import scoreYellow from './images/scoreYellow.png'
import scoreGreen from './images/scoreGreen.png'
import wandavision from './images/wandavision.png'
import spiderverse from './images/spiderverse.png'
import '../App.scss';

export default function latestReviews() {
    return (
		<div >
			<div className="flex-row gap-12">
				<span class="dot blue"></span>
				<h1>Latest Reviews</h1>
			</div>
			<div className='flex-row gap-120 section-margin'>
				{/* <CardHighlight
					imagesrc={wandavision}
					title="Wandavision"
					scoresrc={scoreYellow}
					quote="WandaVision isn't particularly offensive when it comes to diversity on screen, but it's not good either."
					link="/wandavision" /> */}
					<CardWV></CardWV>
					<CardWV></CardWV>
				{/* <CardHighlight
					imagesrc={spiderverse}
					title="Spider-Man: Across the Spiderverse"
					scoresrc={scoreGreen}
					quote="Addressing topics of family, Afro-Latino culture, and women mentorship all across the multiverse..."
					link="/" /> */}
			</div>
		</div>
    )

}