import '../../App.scss';

export default function Reviews(props) {

	const reviewer1 = props.reviewer1;
	const reviewer2 = props.reviewer2;


    return (
		<div className='align-left section-header white reviews'>
			<h1>Review #1</h1>
			<h3>Posted ADD DATE by <b>{reviewer1.pseudonym ? reviewer1.pseudonym : reviewer1.tagger}</b></h3>
			<p style={{ whiteSpace: 'pre-wrap' }} 
			dangerouslySetInnerHTML={{ __html: reviewer1.copyEditedBlurb }}/>

			<br/>
			<br/>
			
			<h1>Review #2</h1>
			<h3>Posted ADD DATE by <b>{reviewer2.pseudonym ? reviewer2.pseudonym : reviewer2.tagger}</b></h3>
			<p  style={{ whiteSpace: 'pre-wrap' }} 
			dangerouslySetInnerHTML={{ __html: reviewer2.copyEditedBlurb }}/>
			
		</div>
    )

}