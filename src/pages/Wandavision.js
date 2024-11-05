import Navbar from '../components/navbar';
import CardCarousel from '../components/cardCarousel';
import Footer from '../components/footer';
import quantchart from '../components/images/quant-chart.png';
import qualchart from '../components/images/qual-chart.png';
import AtAGlance from '../components/indvtext/atAGlance'
import '../App.scss';
import { NavLink } from 'react-router-dom';
import Collection from '../components/collection';


const Wandavision = () => {
    return (
		<div className="App">
			<header>
				<Navbar></Navbar>
			</header>
		  
			<body>
				<AtAGlance/>


				{/* OLD VER */}
				<div className='flex-col gap-64'>

				<div>
					<h1 className='align-left'>WandaVision</h1>
					<p className='text-gray-secondary align-left'>TV Mini Series • 2021 • TV-PG • 5h 50m</p>
				</div>

				<div>
					<div className="flex-row gap-12">
						<span class="dot blue"></span>
						<h1>At a Glance</h1>
					</div>
					<div className='flex-row align-top gap-36'>
						<img className='rounded-corners' src='https://m.media-amazon.com/images/M/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWEwMmQtZTU5YTIwZmJjZGQ0XkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_FMjpg_UX1000_.jpg' 
							alt="" width={240}></img>
						<div className='flex-col align-left gap-12'>
							<div className='score'>
								<div className='score-progress green'style={{width:332*54/100}}></div>
								<div className='score-container'></div>
								<div className='score-value'>{24}</div>
							</div>
							<p>“WandaVision isn’t particularly offensive when it comes to diversity on screen, but it’s not good either.”</p>
							<p className='text-gray-secondary'>Reviewed by <NavLink className="navLink reviewer">Noon</NavLink></p>

							<p>“I found the show fell flat compared to the potential of the cast, with problems in how characters of color were represented and persistent reminders of how Marvel erased one of their few Jewish and Romani characters from their cinematic universe.”</p>
							<p className='text-gray-secondary'>Reviewed by <NavLink className="navLink reviewer">Jackal</NavLink></p>
							
							<h2>Bias Tags</h2>
							<div className='flex-row gap-12'>
								{/* NOTE: turn these into chips */}
								<p className='text-blue'>Young</p>
								<p className='text-blue'>Tokenization</p>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className="flex-row gap-12">
						<span class="dot blue"></span>
						<h1>Cast and Characters</h1>
					</div>
					<div className='flex-row gap-80'>
						<img src={quantchart} width={240} alt=""></img>
						<div className='flex-col align-left gap-12'>
							<p className="text-gray-secondary">Wanda Maximoff / Scarlet Witch (Elizabeth Olsen)</p>
							<p className="text-gray-secondary">Vision (Paul Bettany)</p>
							<p className="text-gray-secondary">Agatha Harkness (Kathrn Hahn)</p>
							<div className="flex-row gap-12">
								<span class="dot-small yellow"></span>
								<p className="text-gray-primary">Monica Rambeau (Teyonah Parris)</p>
							</div>
							<p className="text-gray-secondary">Jimmy Woo (Randall Park)</p>
							<p className="text-gray-secondary">Darcy Lewis (Kat Dennings)</p>
							<p className="text-gray-secondary">Ralph Bohner (Evan Peters)</p>
						</div>
					</div>
				</div>

				<div>
					<div className="flex-row gap-12">
						<span class="dot blue"></span>
						<h1>Bias and Reception</h1>
					</div>
					<div className='flex-row gap-80 align-top'>
						<img src={qualchart} width={240} alt=""></img>
						<div className='flex-col align-left gap-36'>
							<div className='flex-col gap-12'>
								<p className='bold'>Biases in the content</p>
								<details><summary>Young</summary>All characters are less than 50 years old.</details>
								<details><summary>Tokenization</summary>This character was tokenized in the text.</details>
								<details><summary>Violence*</summary>Reason for violence tag. * means it was contested.</details>
							</div>
							<div className='flex-col gap-12'>
								<p className='bold'>Reception of WandaVision</p>
								<p>Un-nuanced representation of POC</p>
								<p>Nuanced representation of women</p>
							</div>
						</div>

					</div>
				</div>

				<div className='flex-col align-left gap-12'>
					<div className="flex-row gap-12">
						<span class="dot blue"></span>
						<h1>Review #1</h1>
					</div>
					<p>Posted Jun 8, 2023 by <NavLink className="navLink reviewer">Noon</NavLink></p>
					<p className='text-gray-primary'>WandaVision isn’t particularly offensive when it comes to diversity on screen, but it’s not good either. Is it a fine way to spend six hours? Yes. Are the episodes better at 1.25x speed? Also yes. In teh perfect fantasy suburban town of Westview, New Jersey, white women rule—as they do in reality, in most American suburbs. This show is all about Wanda Maxinoff. Unfortunately, this means BIPOC characters—like the highly praised Teyonah Parris playing Monica Rambeau (link to Forbes article), who gets transported into Wanda’s world as Geraldine—are little more than accessories and tropes in Wanda’s constructed world. Geraldine is a neighbor for comedic relief and to serve Wanda when convenient, such as when she goes into unexpected labor. The only other BIPOC characte rint he show, Jimmy Woo, also revolves around Wanda’s story, though actor Randall Park brings in his own humor to brighten up otherwise dull lines. The wasted potential of these two characters is so bad, fans have been calling for a spin-off featuring them (JimmyMonica, anyone?).</p>
					<p className='text-gray-primary'>Most comic adaptations for the modern screen race-bend characters whose new ethnic identities add a layer to their narrative—take, for instance, Mark Grayson in Invincible, who feels pressure not only from failing to have superpowers like his dad, but also from wanting to be a good son in his Korean American family. WandaVision, unfortunately, does the opposite by white washing Wanda’s Romani Jewish roots; the show gives us some paltry flashbacks of her and her brother running from an unspecified war. What it chooses instead to highlight is Wan- da’s denial of and grief for her husband’s passing. On the one hand, this plays into hysterical women tropes—as pointed out by other reviewers. Wanda hurts the citizens of Westview when her (female, womanly) emotions get out of control. On the other hand, the show does seem to believe genuinely that these flaws are what make Wanda stronger—yay, feminism! And, while I personally don’t get it (yes, it’s cool that a woman and android have babies, but isn’t it just a nuclear family? Aren’t we still upholding heteronormativity?), Wanda and Vision’s non tra- ditional relationship has been met with positive reception from queer fans (cite), as has how campy Agatha is.</p>
					<p className='text-gray-primary'>The first few episodes of WandaVision are in black and white, emulating the early sitcoms of the 1950s. If I could, like Wanda, construct my own perfect world, it would be one where her story has a little more color.</p>
				</div>

				<div>
					<h2 className='align-left'>Like <i>WandaVision</i>? Try these other titles featuring women protagonists.</h2>
					<Collection></Collection>
				</div>
				<Footer></Footer>
				</div>
			</body>
		</div>
	  );
}

export default Wandavision;