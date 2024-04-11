import { NavLink } from 'react-router-dom';

import logo from './images/logo.png';
import '../App.css';

export default function Navbar() {
    return (
		<div id="nav">
			<div id="navLeft">
				<NavLink className={"navLink"} to="/search">Reviews</NavLink>
				<NavLink className={"navLink"} to="/">Articles</NavLink>
				<NavLink className={"navLink"} to="/">Rating System</NavLink>
			</div>
			<div id="navCenter">
				<img src={logo} alt="MERL Logo" id="navLogo"></img>
				<h2>Diversity scores for film and TV</h2>
				
			</div>
			<div id="navRight">
				<input type="text" placeholder="Search film and TV" id="navSearch"></input>
				<NavLink className={"navLink"} to="/">Sign In</NavLink>
				
			</div>
		</div>
    )

}