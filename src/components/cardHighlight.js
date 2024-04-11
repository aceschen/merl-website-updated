import { NavLink } from 'react-router-dom';

// import logo from './images/logo.png';
import wandavision from './images/wandavision.png';
import scoreYellow from './images/scoreYellow.png'
import '../App.css';

export default function CardHighlight(props) {
    return (
		<div className="cardHighlight">
			<h1>{props.title}</h1>
			<div className='cardHighlightContent'>
				<img src={props.imagesrc} alt="" className="cardHighlightImage"></img>
				<div className="cardHighlightScoreText">
					<img src={props.scoresrc} alt="" className="cardHighlightScore"></img>
					<p>{props.quote}</p>
					<NavLink className={"navLink"} to={props.link}>Read the review &gt;</NavLink>
				</div>
			</div>				
		</div>
    )

}