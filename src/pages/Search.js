import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Card from '../components/card';
import '../App.scss';

import jsonData from '../data/2019.json';
import scores from '../data/2019-blurbs.json';
import posters from '../data/imdb-posters.json';

export default function Search(props) {

	
	var merlscores2019 = {};

	var titles = new Set(); //all the unique 2019 titles
	const items = jsonData["items"];
	items.map((item) => (titles.add(item["propertyNameOriginal"])
		));
	// console.log(titles);

	titles.forEach(function(title) {
		//saves title and overall MERL score to scores2019
		merlscores2019[title] = calculateScores(scores["items"], title);
	})

	var merlpercentiles2019 = calculatePercentiles(merlscores2019, titles.size);
	// console.log("percentiles ", merlpercentiles2019);

	// cardData looks like... 
	// [{title: "wanda", "score": x, "percentile": y}, {...}]
	var cardData = []
	titles.forEach(function(title) {
		cardData.push({"title": title, "score": merlscores2019[title], "percentile": merlpercentiles2019[title], "poster": posters[title]})
	})
	console.log("cardData", cardData);

    return (
		<div className="App">
			<header>
				<Navbar></Navbar>
			</header>
		  
			<body>
			
				<div className='align-left'>
					<h1>All Reviews</h1>
					<input type='text' placeholder="Search film and TV" className='search-page-input margin-bottom-32'></input>
				</div>

				<div className='flex-wrap gap-36 align-left'>
					
				{cardData.map((item => (
					<Card
						title={item["title"]}
						poster={item["poster"]}
						score={item["score"]}
						percentile={item["percentile"]}
						text="150 character blurb here!!"
					/>
				)))}
				</div>

				<Footer/>
			</body>
		</div>
	  );
}


function calculateScores(items, title) {
	/*
	returns the combined average score for a given title, which
	is calculated as the (quant1 + qual1 + quant2 + qual2) / 2 
	since there are 2 blurbs per title
	 */
	var totalScore = 0; 
	items.forEach(function(item) {
		if (item["propertyNameOriginal"] === title) {
			totalScore += item["qualitativeScore"];
			totalScore += item["quantitativeScore"];
		}
	});
	return Math.ceil(totalScore / 2);
}

function calculatePercentiles(items, totalItems) {
		var percentiles = {};

		//sorts the dictionary by worst to best 
		const sortedDict = Object.fromEntries(Object.entries(items).sort(([,a],[,b]) => a- b));
			
		//calculates percentile
		var i = 1;
		for (var key in sortedDict) {
			percentiles[key] = Math.round(i / totalItems * 100);
			i += 1;
		}
		return percentiles;
		
}