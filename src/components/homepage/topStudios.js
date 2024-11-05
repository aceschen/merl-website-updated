import '../../App.scss';
import topstudios from '../images/topstudios.png'


export default function TopStudios() {
    return (
		<div className='padding-bottom-48 white'>
			<div className="align-left section-header white">
				<h1>Top Scoring Studios</h1>		
			</div>	
			<div className='align-left collection'>
				<div className='flex-col gap-8'>
					<img src={topstudios} alt="" width={456} className='margin-4'></img>
				</div>
				<div className='flex-col gap-24'>
					<div className='flex-row gap-24'>
						<h1 className='score-studio'>54</h1>
						<div className='flex-col gap-8'>
							<h1>1. Max</h1>
							<i>Average score of 6 titles</i>
						</div>
					</div>
					<div className='flex-row gap-24'>
						<h1 className='score-studio'>48</h1>
						<div className='flex-col gap-8'>
							<h1>2. Walt Disney Pictures</h1>
							<i>Average score of 8 titles</i>
						</div>
					</div>
					<div className='flex-row gap-24'>
						<h1 className='score-studio'>41</h1>
						<div className='flex-col gap-8'>
							<h1>3. Netflix</h1>
							<i>Average score of 12 titles</i>
						</div>
					</div>
					<a href={"/"}><button className="button pink" to={"/"}>See full list of studios &gt;</button></a>
				
				</div>
			</div>
		</div>
    )

}