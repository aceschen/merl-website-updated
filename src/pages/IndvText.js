import Navbar from '../components/navbar';
import Footer from '../components/footer';

import AtAGlance from '../components/indvtext/atAGlance';
import CharactersCast from '../components/indvtext/charactersCast';
import BiasReception from '../components/indvtext/biasReception';
import Reviews from '../components/indvtext/reviews';

// import allData from '../data';
// import Aladdin from '../data/Aladdin/Aladdin';

import '../App.scss';

import { useParams } from 'react-router';
import { useState, useEffect } from "react";

// import from string https://stackoverflow.com/questions/57121467/import-a-module-from-string-variable
async function importTextData(textName) {

	const textData = await import("../data/" + textName + "/" + textName);
	return textData;
}

const IndvText = () => {

	const { title } = useParams();
  	const [textData, setTextData] = useState(null); // the default cant be null i think

	useEffect(() => {
		if (title) {
		importTextData(title)
			.then((data) => setTextData(data))
			.catch((error) => console.error("Error loading text data:", error));
		}
	}, [title]);

	console.log(textData);

	// return (
	// 	<div>title is {title}</div>
	// 	// <div>{propertyNameOriginal}</div>
	// )

	if (textData) {
		return (
			<div className="App">
				<header>
					{/* <Navbar></Navbar> */}
					<h1>{title}</h1>
					<h2>{textData[0].propertyNameOriginal}</h2>
				</header>
			  
				{/* <body>
					<AtAGlance/>
					<CharactersCast/>
					<BiasReception/>
					<Reviews/>
	
					
					<Footer></Footer>
				</body> */}
			</div>
		  );
	} else {
		return (
			<div>404 page should go here</div>
		)
	}


    
}

export default IndvText;