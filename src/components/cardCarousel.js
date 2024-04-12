import '../App.css';

export default function CardCarousel(props) {
    return (
		<div id="cardCarousel">
			<img src={props.imgsrc} alt="" width={200}></img>
			<p>{props.title}</p>			
		</div>
    )

}