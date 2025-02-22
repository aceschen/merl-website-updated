import { NavLink } from 'react-router-dom';
import fb from './images/facebook.png'
import ig from './images/instagram.png'
import tw from './images/twitter.png'
import '../App.scss';

export default function Footer() {
    return (
		<div>
			<div className='flex-row space-between align-top white' id="footer">
				<div className="flex-col align-left gap-8">
					<h2 className="text-pink">About Us</h2>
					<NavLink>Home</NavLink>
					<NavLink>About MERL</NavLink>
					<NavLink>Articles</NavLink>
					<NavLink>Contact</NavLink>
					<NavLink>Press</NavLink>
				</div>
				<div className="flex-col align-left gap-8">
					<h2 className='text-pink'>Our Reviews</h2>
					<NavLink>Rating System</NavLink>
					<NavLink>All Reviews</NavLink>
					<NavLink>Glossary</NavLink>
				</div>
				<div className="flex-col align-left gap-36">
					<div className="flex-col align-left gap-8">
						<h2>Support MERL</h2>
						<button className="button pink">Donate</button>
					</div>
					<div className="flex-col align-left gap-8">
						<h2>Social Media</h2>
						<div className="flex-row gap-12">
							<img src={tw} alt="" width={24}></img>
							<img src={ig} alt="" width={24}></img>
							<img src={fb} alt="" width={24}></img>
						</div>
					</div>
				</div>
				<div className="flex-col align-left gap-12">
					<h2>Subscribe to our newsletter!</h2>
					<input type="text" placeholder="Name" className='email-input'></input>
					<input type="text" placeholder="Email Address" className='email-input'></input>
					<button className="button green">Subscribe</button>
				</div>
			</div>
		</div>
    )

}

