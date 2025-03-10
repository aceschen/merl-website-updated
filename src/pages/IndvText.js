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

async function importTextCCData(textName) {
	const textCCData = await import("../data/" + textName + "/" + textName + "_CC");
	return textCCData;
}

const IndvText = () => {

	const { title } = useParams();
  	const [textData, setTextData] = useState(null); // the default cant be null i think
  	const [textCCData, setTextCCData] = useState(null); // the default cant be null i think

	useEffect(() => {
		if (title) {
		importTextData(title)
			.then((data) => setTextData(data))
			.catch((error) => console.error("Error loading text data:", error));

		importTextCCData(title)
			.then((data) => setTextCCData(data))
			.catch((error) => console.error("Error loading text data:", error));
		}
	}, [title]);

	// console.log(textCCData);

	// return (
	// 	<div>title is {title}</div>
	// 	// <div>{propertyNameOriginal}</div>
	// )

	if (textData && textCCData) {
		return (
			<div className="App">
				<header>
					<Navbar></Navbar>
					{/* <h1>{title}</h1>
					<h2>{textData[0].propertyNameOriginal}</h2> */}
				</header>
			  
				<body>
					<AtAGlance
						reviewer1={textData[0]}
						reviewer2={textData[1]}/>
					<CharactersCast
						ccData={textCCData}/>
					<BiasReception/>
					<Reviews
						reviewer1={textData[0]}
						reviewer2={textData[1]}/>
	
					
					<Footer></Footer>
				</body>
			</div>
		  );
	} else {
		return (
			<div>404 page should go here</div>
		)
	}


    
}

export default IndvText;