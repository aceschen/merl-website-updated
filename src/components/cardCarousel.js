import '../App.scss';

export default function CardCarousel(props) {
    return (
		<div id="card-carousel">
			<img src={props.imgsrc} alt="" width={200}></img>
			<p>{props.title}</p>			
		</div>
    )

}