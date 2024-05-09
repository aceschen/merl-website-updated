import theaterbirds from './images/theaterbids.png'
import { NavLink } from 'react-router-dom';
import '../App.scss';

export default function aboutMERL() {
    return (
		<div >
			<div className="flex-row gap-12">
				<span class="dot red"></span>
				<h1>About MERL</h1>
			</div>
			<div className="flex-row gap-36 black rounded-corners section-margin">
				<img src={theaterbirds} alt="" width={600}></img>
				<div className='flex-col align-left text-white gap-12'>
					<h1 className='text-white'>Media Education Research Lab</h1>
					<p className='text-white'>We aim to create legible, meaningful, and transparent diversity scores for film and TV.</p>
					<p className='text-white'>Each of our reviews is written by a real person trained on MERL's scoring system.</p>
					<p className='text-white'>Read more about our rating system &gt;</p>
				</div>
			</div>
		</div>
    )

}