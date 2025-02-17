import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardHighlight from '../components/cardHighlight';
import '../App.scss';

import jsonData from '../data/2019.json';
import scores from '../data/2019-blurbs.json';
import posters from '../data/imdb-posters.json';
import { useState } from 'react';

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
	var allCardData = []
	titles.forEach(function(title) {
		allCardData.push({"title": title, "score": merlscores2019[title], "percentile": merlpercentiles2019[title], "poster": posters[title]})
	})
	// console.log("cardData", cardData);

	// ** search filter tutorial from https://www.geeksforgeeks.org/how-to-implement-search-filter-functionality-in-reactjs/
	// var titleList = [""];
	// titleList = Array.from(titles);
	// const [results, setResults] = useState(titleList);
	// const [searchVal, setSearchVal] = useState("");
	// function handleSearch() {
	// 	console.log("searching");
	// 	cardData = [];
    //     if (searchVal === "") { setResults(titleList); return; }
	// 	const filterBySearch = titleList.filter((title) => {
    //         if (title.toLowerCase()
    //             .includes(searchVal.toLowerCase())) { 
	// 			cardData.push({"title": title, "score": merlscores2019[title], "percentile": merlpercentiles2019[title], "poster": posters[title]})
	// 			console.log(cardData[0].title);
	// 			return title; 
	// 		}
    //     })
	// 	console.log(cardData);
    //     setResults(filterBySearch);
    // }

	var searchTerm = ""
	const [cardData, setCardData] = useState(allCardData);
	const [searchVal, setSearchVal] = useState("");
	function handleSearch() {
		console.log("searching");
		if (searchVal === "") { setCardData(allCardData); return; }
		const filterBySearch = allCardData.filter((title) => {
            if (title.title.toLowerCase()
                .includes(searchVal.toLowerCase())) { 
				cardData.push({"title": title, "score": merlscores2019[title], "percentile": merlpercentiles2019[title], "poster": posters[title]})
				return title; 
			}
        })
		console.log(cardData);
		searchTerm = searchVal;
        setCardData(filterBySearch);
    }


    return (
		<div className="App">
			<header>
				<Navbar></Navbar>
			</header>
		  
			<body>
			
			<div className='white'>
				<div className="align-left section-header flex-col gap-24">
					<h1>Search Reviews</h1>
					<div>
						<input 					
							className="search-page-input"
							placeholder='Search movies and TV'
							onChange={e => setSearchVal(e.target.value)} 
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									handleSearch();
								}
							}}
						>
						</input>
						{/* maybe add button */}
						{/* <button onClick={handleSearch}>search</button> */}
					</div>
					<p>
						{cardData.length} results
					</p>
				</div>

			
			
				<div className='align-left collection'>
					{cardData.map((item => (
						<CardHighlight
							title={item["title"]}
							poster={item["poster"]}
							score={item["score"]}
							percentile={item["percentile"]}
							text="150 character blurb here!!"
						/>
						)))}
				</div>

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