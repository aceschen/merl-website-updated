import { NavLink } from 'react-router-dom';
// import data from './2019.json';
// figure out the json stuff ......

import '../App.scss';

export default function Card(props) {

    return (


		// NOTE: this is a hardcoded WandaVision one, ver with props below
		// <div>
		// 	<div className='flex-row gap-36 align-top'>
		// 		<img src="https://m.media-amazon.com/images/M/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWEwMmQtZTU5YTIwZmJjZGQ0XkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_.jpg" alt="" className="card-image"></img>
		// 		<div className="flex-col gap-12 gray-primary-text">
		// 			<h1 className='card-title'>WandaVision</h1>
		// 			<div className='score'>
		// 				<div className='score-progress green'style={{width:250*50/100}}></div>
		// 				<div className='score-container'></div>
		// 				<div className='score-value'>42</div>
		// 			</div>
		// 			<p>"WandaVision isn't particularly offensive when it comes to diversity on screen..."</p>
		// 			<NavLink className={"navLink reviewer"}>Read the review</NavLink>
		// 		</div>
		// 	</div>				
		// </div>


		<div>
		<div className='flex-row gap-36 align-top card'>
			<img src={props.poster} alt="" className="card-image"></img>
			<div className="flex-col gap-12 gray-primary-text">
				<h1 className='card-title'>{props.title}</h1>
				<div className='score'>
					<div className='score-progress green'style={{width:250*props.percentile/100}}></div>
					<div className='score-container'></div>
					<div className='score-value'>{props.score}</div>
				</div>
				<p>"{props.text}"</p>
				<NavLink className={"navLink reviewer"} to={props.reviewer}>Read the review</NavLink>
			</div>
		</div>				
		</div>

    )

}