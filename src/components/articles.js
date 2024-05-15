import { NavLink } from 'react-router-dom';
import '../App.scss';

export default function Articles() {
    return (
		<div>
			<div className="flex-row gap-12">
				<span class="dot green"></span>
				<h1>Articles</h1>		
			</div>	
			<div className='align-left'>
				<div>
					<h1 className='margin-4'>ReFrame Report on Gender & Hiring in TV 2023</h1>
					<p className='text-gray-primary margin-bottom-32 italic'>Subtitle with more information</p>
				</div>
				<div>
					<h1 className='margin-4'>Luminate’s 2023 Entertainment Diversity Progress Report</h1>
					<p className='text-gray-primary margin-bottom-32 italic'>Subtitle with more information</p>
				</div>
				<div>
					<h1 className='margin-4'>Your Balanced Media Diet and Dark Matters</h1>
					<p className='text-gray-primary margin-bottom-32 italic'>Subtitle with more information</p>
				</div>
			</div>
			<div className='flex-row section-margin gap-36'>
				<div className="flex-row gap-12">
					<span class="dot green"></span>
					<h2 className='align-left'>Like what you see? Subscribe to our newsletter!</h2>
				</div>	
				<input type="text" placeholder="Email Address" className='text-input' id="email-input"></input>
				<button className='button green' id='#button-subscribe'>Subscribe</button>
			</div>
		</div>
    )

}