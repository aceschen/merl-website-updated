import { NavLink } from 'react-router-dom';

import logo from './images/logo.png';
import '../App.scss';

export default function Navbar() {
    return (
		<div>
		<div className='flex-row' id='nav'>
			<div className='nav-section'>
				<a href="/"><img src={logo} alt="MERL Logo" id="navLogo" width={300}></img></a>
				
			</div>
			<div className='nav-section'>
				<input type="text" id="nav-search" placeholder="Search diversity scores for movies and TV"></input>
			</div>

		</div>
		<div className='flex-row'>
			<div className='nav-section'>
				<div className='navItem'>
					<NavLink to="/search">Reviews</NavLink>
				</div>
				<div className='navItem'>
					<NavLink to="/">Articles</NavLink>
				</div>
				<div className='navItem'>
					<NavLink to="/">About MERL</NavLink>
				</div>
				<div className='navItem'>
					<NavLink to="/">TSB System</NavLink>
				</div>
				<div className='navItem'>
					<NavLink to="/">For Education</NavLink>
				</div>
				<div className='navItem'>
					<NavLink to="/">Sign In</NavLink>
				</div>
			</div>
		</div>
		</div>
    )

}