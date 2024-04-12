import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Articles() {
    return (
		<div>
			<div className="sectionHeader">
				<span class="dotGreen"></span>
				<h1>Articles</h1>		
			</div>	
			<div>
				<h1 className='articlePreviewTitle'>ReFrame Report on Gender & Hiring in TV 2023</h1>
				<p className='articlePreviewSubtitle'>Subtitle with more information</p>
			</div>
			<div>
				<h1 className='articlePreviewTitle'>Luminate’s 2023 Entertainment Diversity Progress Report</h1>
				<p className='articlePreviewSubtitle'>Subtitle with more information</p>
			</div>
			<div>
				<h1 className='articlePreviewTitle'>Your Balanced Media Diet and Dark Matters</h1>
				<p className='articlePreviewSubtitle'>Subtitle with more information</p>
			</div>
			<div id="subscribeToNewsletter">
				<div className="sectionHeader">
					<span class="dotGreen"></span>
					<h2>Like what you see? Subscribe to our newsletter!</h2>
				</div>	
				<input type="text" placeholder="Email Address" id="emailInput"></input>
				<button id="subscribeButton">Subscribe</button>
			</div>
		</div>
    )

}