import { NavLink } from 'react-router-dom';
import fb from './images/facebook.png'
import ig from './images/instagram.png'
import tw from './images/twitter.png'
import '../App.css';

export default function Footer() {
    return (
		<div>
			<div id="footer">
				<div className="footerCol">
					<h2 className="footerTitle" style={{color:"#892B2B"}}>About Us</h2>
					<NavLink className="footerLink">Home</NavLink>
					<NavLink className="footerLink">About MERL</NavLink>
					<NavLink className="footerLink">Articles</NavLink>
					<NavLink className="footerLink">Contact</NavLink>
					<NavLink className="footerLink">Press</NavLink>
				</div>
				<div className="footerCol">
					<h2 className="footerTitle" style={{color:"#4361EE"}}>Our Reviews</h2>
					<NavLink className="footerLink">Rating System</NavLink>
					<NavLink className="footerLink">All Reviews</NavLink>
					<NavLink className="footerLink">Glossary</NavLink>
				</div>
				<div className="footerCol">
					<h2 className="footerTitle">Support MERL</h2>
					<button id="donateButton">Donate</button>
					<h2 className="footerTitle">Social Media</h2>
					<div id="socmedRow">
						<img src={tw} alt="" width={24}></img>
						<img src={ig} alt="" width={24}></img>
						<img src={fb} alt="" width={24}></img>
					</div>
				</div>
				<div className="footerColSubscribe">
					<h2 className="footerTitle">Subscribe to our newsletter!</h2>
					<input type="text" placeholder="Name" id="footerInput"></input>
					<input type="text" placeholder="Email Address" id="footerInput"></input>
					<button id="subscribeButton">Subscribe</button>
				</div>
			</div>
		</div>
    )

}

