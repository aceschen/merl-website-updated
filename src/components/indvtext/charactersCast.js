import '../../App.scss';

import Chart from "chart.js/auto";


import { Chart as ChartJS, ArcElement, Tooltip, Legend, scales } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// got chart example here
// https://codesandbox.io/p/devbox/reactchartjs-react-chartjs-2-default-t64th?file=%2FApp.tsx%3A13%2C25

// export const NUMBER_CFG = {count: 5, min: 0, max: 100};
export const data = {
  labels: ['Ethnicity', 'Nationality', 'Gender', 'Sexuality', 'Age'],
  datasets: [
    {
      label: 'Points Scored',
      data: [2, 0, 2, 0, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)', 
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
	scales: 
		{
			r: {
				min: 0, 
				max: 5,
				ticks: {
					stepSize: 1
				}
			}
		}
	
}

export default function CharactersCast(props) {

	const ccData = props.ccData;

	var chars = [];
	var actors = [];
	console.log(ccData.length);
	for (let i = 0; i < ccData.length; i++) {
		// console.log(props[i].characterName + "hi")
		if (!chars.includes(ccData[i].characterName)) {
			chars.push(ccData[i].characterName);
			actors.push(ccData[i].actorName);
		}
	}

	// const listItems = chars.map(char => <li>{char}</li>);

	var castcharlist = []
	for (let i = 0; i < chars.length; i++) {
		castcharlist.push(<li>{chars[i]} <actor>({actors[i]})</actor></li>);
	}

    return (
		<div className='align-left section-header white flex-col gap-24'>
				<div className="flex-col">
					<h1>Characters and Cast</h1>
				</div>	

				<div className='flex-row align-top gap-24'>
					<PolarArea 
						data={data}
						options={options}
					/>
					<ul className='flex-col indvtext-lists'>
						{castcharlist}
					</ul>
				</div>
		</div>
    )

}