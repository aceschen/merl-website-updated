import '../App.scss';
import '../App.scss';

export default function CardWV(props) {

	// NOTE: still missing the crow and some of the spacing feels bad

	// NOTE: leftover vars from when there was just wandavision
	// const id = jsonWV['media-id'];
	// const name = jsonWV["property-name"];
	// const score = jsonWV['merl-score'];
	// const percentile = jsonWV['percentile'];
	// const crow = jsonWV['crow-type'];
	// const poster = jsonWV['poster-src'];
	// const text = jsonWV['text-preview'];

	const birdColor = calculateColor(props.score);
	console.log(birdColor);
	console.log(typeof(birdColor));
	



    return (
		<div className="card-highlight">
			<div className='flex-col gap-12'>
				<div className='flex-row gap-12 align-top'>
					<img src={props.poster} alt="" className="card-highlight-image"></img>
					<div className="flex-col gap-12 gray-primary-text">
						<h1>{props.title}</h1>
						<div>
							<img src={require('./images/' + birdColor + '.png')} alt="soaring green bird" className='score-bird'></img>
							<div className={'score-value ' + birdColor}>{props.score}</div>
							{/* <div className='score-value score-green'>{props.score}</div> */}
						</div>
						{/* <div className='score'>
							<div className='score-progress green'style={{width:250*props.percentile/100}}></div>
							<div className='score-container'></div>
							<div className='score-value'>{props.score}</div>
						</div> */}
					</div>
				</div>
				<p>"{props.text}"</p>
				<a href={"/wandavision"}><button className="button pink" to={"/"}>Read the review and score &gt;</button></a>
				

			</div>
		</div>
    )

}

function calculateColor(score) {
	// returns the bird type 
	if (score >= 50) {
		return ['score-green']
	} else if (score >= 43) {
		return 'score-yellow'
	} else if (score >= 36) {
		return 'score-orange'
	} else {
		return 'score-red'
	}
}