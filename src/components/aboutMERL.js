import theaterbirds from './images/theaterbids.png'
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function aboutMERL() {
    return (
		<div >
			<div className="sectionHeader">
				<span class="dotRed"></span>
				<h1>About MERL</h1>
			</div>
			<div id="aboutMERL">
				<img src={theaterbirds} alt="" width={600}></img>
				<div>
					<h1 className='aboutMERLText'>Media Education Research Lab</h1>
					<p className='aboutMERLText'>We aim to create legible, meaningful, and transparent diversity scores for film and TV.</p>
					<p className='aboutMERLText'>Each of our reviews is written by a real person trained on MERL's scoring system.</p>
					<p className='aboutMERLText'>Read more about our rating system &gt;</p>
				</div>
			</div>
		</div>
    )

}