import '../../App.scss';

export default function Articles() {
    return (
		<div>
			<div className="align-left section-header white">
				<h1>Articles</h1>		
			</div>	
			<div className='align-left collection' id='articles'>
				<div>
					<h1 className='margin-4'>ReFrame Report on Gender & Hiring in TV 2023</h1>
					<p className='text-gray-primary'>According to the ReFrame Report on Gender & Hiring in TV, 108 (54 percent) of the top 200 scripted series...</p>
				</div>
				<div>
					<h1 className='margin-4'>Luminate’s 2023 Entertainment Diversity Progress Report</h1>
					<p className='text-gray-primary'>The takeaways, according to Deadline.</p>
				</div>
				<div>
					<h1 className='margin-4'>Your Balanced Media Diet and Dark Matters</h1>
					<p className='text-gray-primary'>All part of Science Gallery Dublin's October 2021 show, BIAS.</p>
				</div>
				<div>
					<h1 className='margin-4'>Your Balanced Media Diet and Dark Matters</h1>
					<p className='text-gray-primary'>All part of Science Gallery Dublin's October 2021 show, BIAS.</p>
				</div>
				{/* removing this bc the footer one is visible right below */}
				{/* <div>
					<h2>Like what you see? Subscribe to our newsletter!</h2>
				</div>
				<div className='flex-row gap-24 white'>
					<input type="text" placeholder="Email Address" className='email-input'></input>
					<button className='button green' id='#button-subscribe'>Subscribe</button>
				</div> */}
			</div>
		</div>
    )

}