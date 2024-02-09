import React from 'react'
import { Bar } from 'react-chartjs-2';

const ThreeinOneBarChart = () => {
	const data = {
		labels: ['John', 'Alice', 'Bob', 'Eva', 'Mike'],
		datasets: [
			{
				label: 'Completed',
				backgroundColor: '#990000',
				borderColor: '#990000',
				borderWidth: 1,
				barThickness: 20,
				data: [12, 19, 3, 5, 2],
			},
			{
				label: 'Pending',
				backgroundColor: '#cc3333cd',
				borderColor: '#cc3333',
				borderWidth: 1,
				barThickness: 20,
				data: [10, 15, 7, 8, 6],
			},
			{
				label: 'Overdue',
				backgroundColor: '#ff66667a',
				borderColor: '#ff66667a',
				borderWidth: 1,
				barThickness: 20,
				data: [5, 8, 12, 9, 10],
			},
		],
	};




	const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
		responsive: true,
		maintainAspectRatio: false,
	};

	return (
		<div className='three-in-one'>
			<Bar data={data} options={options} height={"100%"} width={"100%"} />
			{/* <div>
			<Bar data={data} options={options} height={"30%"} width={"100%"} />
		</div> */}
		</div>
	);
}

export default ThreeinOneBarChart