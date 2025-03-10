import '../../App.scss';

import wv from '../images/wandavision.png'
import scoreOrange from '../images/score-orange.png'
import scoreGreen from '../images/score-green.png'

export default function AtAGlance(props) {

	var ccScore = (props.reviewer1.totalCastAndCharacterQuantitativeScoreOutOf50SeeTheRubric
					+ props.reviewer2.totalCastAndCharacterQuantitativeScoreOutOf50SeeTheRubric) / 2;
	if (ccScore % 1 !== 0) ccScore += 0.5;
	
	const brScore = (props.reviewer1.totalBiasAndReceptionQualitativeScoreOutOf50MultiplyBy2
					+ props.reviewer2.totalBiasAndReceptionQualitativeScoreOutOf50MultiplyBy2) / 2;
	if (brScore % 1 !== 0) ccScore += 0.5;
	// round these up or down 

	const totalScore = ccScore + brScore;

	var biasTags = props.reviewer1.biasTags; 
	var biasTags2 = props.reviewer2.biasTags;

	for (let i = 0; i < biasTags2.length; i++) {
		if (biasTags2[i] !== ' ' && biasTags2[i] !== ',') {
			if (!biasTags.includes(biasTags2[i])) {
				biasTags += ", "
				biasTags += biasTags2[i];
			}
		}
	  }


    return (
		<div className='align-left section-header white'>
				<div className="flex-col">
					<h1>{props.reviewer1.propertyNameOriginal}</h1>
					<h3>{props.reviewer1.mediaType}  • ADD YEAR • ADD RATING • ADD DURATION</h3>	
				</div>	

				<div className='flex-row align-top gap-24'>
					<img src={wv} alt="" width={319} className='margin-4'></img>
					<div style={{"width" : "661px"}} className='flex-col gap-24'>
						<div className='flex-row gap-36'>
							<div>
								<img src={scoreGreen} alt="soaring green bird" className="score-bird" width={300}></img>
								<div className='score-value score-green'>{totalScore}</div>
							</div>
							<div>
								<h3 className='italic'>Characters and Cast Score: {ccScore}</h3>
								<h3 className='italic'>Bias and Reception Score: {brScore}</h3>
							</div>

						</div>
						<div className='flex-col gap-12'>
							<p>"{props.reviewer1._150CharacterPullQuoteFromBlurb}"</p>
							<p>Reviewed by <b>{props.reviewer1.pseudonym ? props.reviewer1.pseudonym : props.reviewer1.tagger}</b></p>
						</div>
						<div className='flex-col gap-12'>
							<p>"{props.reviewer2._150CharacterPullQuoteFromBlurb}"</p>
							<p>Reviewed by <b>{props.reviewer2.pseudonym ? props.reviewer2.pseudonym : props.reviewer2.tagger}</b></p>
						</div>
						<div>
							<h2>Bias Tags: {biasTags}</h2>
						</div>


					</div>

				</div>
		</div>
    )

}