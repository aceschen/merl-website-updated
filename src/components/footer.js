import { NavLink } from 'react-router-dom';
import fb from './images/facebook.png'
import ig from './images/instagram.png'
import tw from './images/twitter.png'
import '../App.scss';

export default function Footer() {
    return (
		<div>
			<div className='flex-row space-between align-top' id="footer-margin">
				<div className="flex-col align-left gap-12">
					<h2 className="text-red">About Us</h2>
					<NavLink className="navLink">Home</NavLink>
					<NavLink className="navLink">About MERL</NavLink>
					<NavLink className="navLink">Articles</NavLink>
					<NavLink className="navLink">Contact</NavLink>
					<NavLink className="navLink">Press</NavLink>
				</div>
				<div className="flex-col align-left gap-12">
					<h2 className="text-blue">Our Reviews</h2>
					<NavLink className="navLink">Rating System</NavLink>
					<NavLink className="navLink">All Reviews</NavLink>
					<NavLink className="navLink">Glossary</NavLink>
				</div>
				<div className="flex-col align-left gap-12">
					<h2>Support MERL</h2>
					<button className="button pink">Donate</button>
					<h2>Social Media</h2>
					<div className="flex-row gap-12">
						<img src={tw} alt="" width={24}></img>
						<img src={ig} alt="" width={24}></img>
						<img src={fb} alt="" width={24}></img>
					</div>
				</div>
				<div className="flex-col align-left gap-12">
					<h2>Subscribe to our newsletter!</h2>
					<input type="text" placeholder="Name" className='text-input'></input>
					<input type="text" placeholder="Email Address" className='text-input'></input>
					<button className="button green">Subscribe</button>
				</div>
			</div>
		</div>
    )

}

