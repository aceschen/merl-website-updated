import '../../App.scss';
import merltop10 from '../images/merl-top-10.png'
import classof2020 from '../images/class-of-2020.png'


export default function Collections() {
    return (
		<div>
			<div className="align-left section-header white">
				<h1>Browse Collections</h1>		
			</div>	
			<div className='align-left collection gap-24'>
				<div className='flex-col gap-8'>
					<img src={merltop10} alt="" width={477} className='margin-4'></img>
					<h1>MERL Top 10</h1>
					<p className='text-gray-primary'>The highest scoring titles across all of MERL's reviews.</p>
				</div>
				<div className='flex-col gap-8'>
					<img src={classof2020} alt="" width={477} className='margin-4'></img>
					<h1>Class of 2020</h1>
					<p className='text-gray-primary'>All scored TV and film from 2020, all in one place.</p>
				</div>
			</div>
		</div>
    )

}