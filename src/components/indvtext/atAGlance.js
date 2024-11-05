import { NavLink } from 'react-router-dom';
import '../../App.scss';

import topstudios from '../images/topstudios.png'
import wv from '../images/wandavision.png'
import scoreGreen from '../images/score-green.png'

export default function AtAGlance() {
    return (
		<div className='align-left section-header white'>
				<div className="flex-col">
					<h1>WandaVision</h1>
					<h3>TV Mini Series  • 2021 • TV-PG  • 5h 50m</h3>	
				</div>	

				<div className='flex-row align-top gap-24'>
					<img src={wv} alt="" width={319} className='margin-4'></img>
					<div style={{"width" : "661px"}} className='flex-col gap-24'>
						<div className='flex-row gap-36'>
							<div>
								<img src={scoreGreen} alt="soaring green bird" id="scoreGreen" width={300}></img>
								<div className='scoreValue'>58</div>
							</div>
							<div>
								<h3 className='italic'>Characters and Cast: Score 24</h3>
								<h3 className='italic'>Bias and Reception: Score 34</h3>
							</div>

						</div>
						<div className='flex-col gap-12'>
							<p>“WandaVision isn’t particularly offensive when it comes to diversity on screen, but it’s not good either. Is it a fine way to spend six hours? Yes. Are the episodes better at 1.25x speed? Also yes.”</p>
							<p>Reviewed by <b>Noon</b></p>
						</div>
						<div className='flex-col gap-12'>
							<p>“I found the show fell flat compared to the potential of the cast, with problems in how characters of color were represented and persistent reminders of how Marvel erased one of their few Jewish and Romani characters from their cinematic universe.”</p>
							<p>Reviewed by <b>Basil</b></p>
						</div>
						<div>
							<h2>Bias Tags: Young, Tokenization</h2>
						</div>


					</div>

				</div>
		</div>
    )

}