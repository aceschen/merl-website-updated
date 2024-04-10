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
			{/* <h2>Reviews</h2>
			<h2>Articles</h2>
			<h2>Rating System</h2> */}
			{/* <div className="grid-item" id="navbarLogo">
				<img src={logo} alt="MERL Logo"></img>
				<h2>Diversity scores for film and TV</h2>
			</div> */}
			{/* <h2>Search</h2>
			<h2>Sign in</h2> */}


			{/* <NavLink className={"navbar"} to="/">
				<img id="logo" src={logo} alt="Fanlink"></img>	
			</NavLink>
			<div id="links">
				<NavLink className={"navbar"} to="/about">ABOUT</NavLink>
				<NavLink className={"navbar"} to="/courses">COURSES</NavLink>
				<NavLink className={"navbar"} to="/">MENTORS & STAFF</NavLink>
				<NavLink className={"navbar"} to="/">PRICING</NavLink>
				<NavLink className={"navbar"} to="/">CONTACT</NavLink>
				<NavLink className={"navbar"} to="/">LOG IN</NavLink> */}
		</div>
    )

}