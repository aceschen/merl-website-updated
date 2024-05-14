import CardHighlight from './cardHighlight';

import scoreYellow from './images/scoreYellow.png'
import scoreGreen from './images/scoreGreen.png'
import wandavision from './images/wandavision.png'
import spiderverse from './images/spiderverse.png'
import '../App.scss';

import jsonData from './2019.json';

export default function latestReviews({jsonData}) {

    return (
		<div >
			<div className="flex-row gap-12">
				<span class="dot blue"></span>
				<h1>Latest Reviews</h1>
			</div>
			<div className='flex-row gap-120 section-margin'>
				{/* NOTE: manually filled cards just so it renders nicely for now */}
				<CardHighlight
					title="WandaVision"
					poster="https://m.media-amazon.com/images/M/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWEwMmQtZTU5YTIwZmJjZGQ0XkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_.jpg"
					score='24'
					percentile='54'
					text="WandaVision isn't particularly offensive when it comes to diversity on screen, but it's not good either."
				/>
				<CardHighlight 
					title="Spider-Man: Into the Spider-Verse"
					score="65"
					percentile="80" 
					poster="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg"
					text="Addressing topics of family, Afro-Latino culture, and women mentorship all across the multiverse..."
				/>

				{/* NOTE: was trying to map the JSON array into cards, which
				was not working! CardHighlight takes props right now */}
				{/* {jsonData?.map((data, key) => {
					return (
						<CardHighlight
						key={data['media-id']}
						text={data.text}
						poster={data.poster}
						percentile={data.percentile}>	
						</CardHighlight>
					);
				})} */}
       		
			
			</div>
		</div>
    )

}