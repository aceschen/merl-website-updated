import birds from './images/birds.png'
import { NavLink } from 'react-router-dom';
import '../App.scss';

export default function aboutMERL() {
    return (
		<div className='gray-primary flex-col align-left gap-24' id='aboutMERL'>
			{/* <div className="flex-row gap-12">
				<span class="dot red"></span>
				<h1>About MERL</h1>
			</div> */}
			<h1 className='text-white'>What is MERL?</h1>
			<div className="flex-row gap-36">
				<img src={birds} alt="" width={428}></img>
				<div className='flex-col align-left text-white gap-24'>
					<h1 className='text-white' id='aboutCallout'>Media Education Research Lab</h1>
					<p className='text-white'>We aim to create legible, meaningful, and transparent diversity scores for film and TV. Text text text text text text text text. </p>
					<p className='text-white'>Each of our reviews is written by a real person trained on MERL's scoring system. Text text text text text. text text text text text text.</p>
					<a href={"/wandavision"}><button className="button pink" to={"/"}>Read about the TSB system &gt;</button></a>
				
				</div>
			</div>
		</div>
    )

}