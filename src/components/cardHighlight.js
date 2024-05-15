import { NavLink } from 'react-router-dom';
// import data from './2019.json';
// figure out the json stuff ......

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
			<h1>{props.title}</h1>
			<div className='flex-row gap-36 align-top'>
				<img src={props.poster} alt="" className="card-highlight-image"></img>
				<div className="flex-col gap-12 gray-primary-text">
					<div className='score'>
						<div className='score-progress green'style={{width:250*props.percentile/100}}></div>
						<div className='score-container'></div>
						<div className='score-value'>{props.score}</div>
					</div>
					<p>"{props.text}"</p>
					<NavLink className={"navLink"} to={props.link}>Read the review &gt;</NavLink>
				</div>
			</div>				
		</div>
    )

}