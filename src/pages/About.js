import Navbar from '../components/navbar';
import TopStudios from '../components/homepage/topStudios';
import LatestReviews from '../components/homepage/latestReviews';
import AboutMERL from '../components/homepage/aboutMERL';
import Collections from '../components/homepage/collections';
import Footer from '../components/footer';
import '../App.scss';

const Home = () => {
    return (
		<div className="App">
			<header>
				<Navbar></Navbar>
			</header>
		  
			<body>
		<div className='padding-bottom-48 white'>
			<div className="align-left section-header white">
				<h1>About MERL </h1>		
			</div>	
				<div className='align-left collection'>

				<p>The Media Education Research Lab (MERL, rhymes with “pearl”) is a UC Berkeley-based research lab founded and led by Professor Abigail De Kosnik. Since 2020, MERL has worked to develop a method for measuring and representing the quantity and quality of diversity in popular media. We call our method “MERL Diversity Scores.”</p>

<p>We are currently evaluating the diversity of 80 films and TV series released from 2019 to 2022 using the Diversity Scores method and exploring other pedagogical applications.</p>

<p>MERL has employed more than 30 UC Berkeley Ph.D. students and undergraduates as lab researchers since its founding.</p>

<p>Our project has received funding from craigslist, AAPI (Asian American Pacific Islander) Data at UC Berkeley’s Asian American Research Center, and a Concept Grant from Sage Publishing. We have also received support from the Berkeley Center for New Media and the Department of Theater, Dance, and Performance Studies. We have presented our research at the Total Screen Conference at the University of Quebec in Montreal (UQAM), the Modern Language Association (MLA) Conference, and the Society for Cinema and Media Studies (SCMS) Conference.</p>
</div>

			<div className="align-left section-header white">
				<h1>Current Project</h1>		
			</div>	
				<div className='align-left collection'>
<p>We’ve tagged, scored, and blurbed 80 texts released between 2019 and 2022: 10 movies and 10 TV shows per year, each of which has been tagged, scored, and reviewed twice.</p>

<p>The movies were chosen according to mainstream financial success. We tagged the 10 movies that performed the best at the box office each year. Some films released at the end of the year appear twice because they also performed well the following year.</p>

<p>The TV shows were chosen according to a mix of commercial success, critical acclaim, and impact, as determined by cross-referencing year-end lists from sources such as <i>Vox</i>, <i>The New York Times</i>, and <i>Vulture</i>. We selected shows that appeared on multiple lists and showed evidence of popular interest on Google Trends.
</p>
</div>
</div>
				
				<Footer/>
			</body>
		</div>
	  );
}

export default Home;
