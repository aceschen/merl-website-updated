import { NavLink } from 'react-router-dom';
import jsonWV from './2019.json';
// figure out the json stuff ......

// import logo from './images/logo.png';
import wandavision from './images/wandavision.png';
import scoreYellow from './images/scoreYellow.png'
import '../App.scss';

export default function CardWV(props) {

	const id = jsonWV['media-id'];
	const name = jsonWV["property-name"];
	const score = jsonWV['merl-score'];
	const percentile = jsonWV['percentile'];
	const crow = jsonWV['crow-type'];
	const poster = jsonWV['poster-src'];
	const text = jsonWV['text-preview'];
	

    return (
		<div className="card-highlight">
			<h1>{name}</h1>
			<div className='flex-row gap-36 align-top'>
				<img src={poster} alt="" className="card-highlight-image"></img>
				<div className="flex-col gap-12 gray-primary-text">
					<div className='score'>
						<div className='score-progress green'style={{width:332*percentile/100}}></div>
						<div className='score-container'></div>
						<div className='score-value'>24</div>
					</div>
					<p>{text}</p>
					<NavLink className={"navLink"} to={props.link}>Read the review &gt;</NavLink>
				</div>
			</div>				
		</div>
    )

}