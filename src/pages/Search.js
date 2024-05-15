import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Card from '../components/card';
import '../App.scss';

const Home = () => {
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

				<div className='flex-col gap-36 align-left'>
					<div className='flex-row gap-36 align-top'>
						<Card/>
						<Card/>
					</div>
					<div className='flex-row gap-36 align-top'>
						<Card/>
						<Card/>
					</div>
					<div className='flex-row gap-36 align-top'>
						<Card/>
						<Card/>
					</div>
				</div>

				<Footer/>
			</body>
		</div>
	  );
}

export default Home;
