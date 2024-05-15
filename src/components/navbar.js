import { NavLink } from 'react-router-dom';

import logo from './images/logo.png';
import '../App.scss';

export default function Navbar() {
    return (
		<div className='flex-row' id='nav'>
			<div className='nav-section'>
				<NavLink className={"navLink"} to="/search">Reviews</NavLink>
				<NavLink className={"navLink"} to="/">Articles</NavLink>
				<NavLink className={"navLink"} to="/">Rating System</NavLink>
			</div>
			<div className='nav-section flex-col'>
				<a href="/"><img src={logo} alt="MERL Logo" id="navLogo" width={300}></img></a>
				<h2>Diversity scores for film and TV</h2>
				
			</div>
			<div className='nav-section'>
				<input type="text" placeholder="Search film and TV" className='text-input'></input>
				<NavLink className={"navLink"} to="/">Sign In</NavLink>
				
			</div>
		</div>
    )

}