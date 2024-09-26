import { NavLink } from 'react-router-dom';
// import data from './2019.json';
// figure out the json stuff ......

import '../App.scss';

import scoreGreen from './images/score-green.png';
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


    return (
		<div className="card-highlight">
			<div className='flex-col gap-12'>
				<div className='flex-row gap-12 align-top'>
					<img src={props.poster} alt="" className="card-highlight-image"></img>
					<div className="flex-col gap-12 gray-primary-text">
						<h1>{props.title}</h1>
						<div>
							<img src={scoreGreen} alt="soaring green bird" id="scoreGreen" width={300}></img>
							<div className='scoreValue'>{props.score}</div>
						</div>
						{/* <div className='score'>
							<div className='score-progress green'style={{width:250*props.percentile/100}}></div>
							<div className='score-container'></div>
							<div className='score-value'>{props.score}</div>
						</div> */}
					</div>
				</div>
				<p>"{props.text}"</p>
				<a href={"/wandavision"}><button className="button pink" to={"/wandavision"}>Read the review and score &gt;</button></a>
				

			</div>
		</div>
    )

}