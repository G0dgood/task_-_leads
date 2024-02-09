import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LineChart = () => {
	const data: any = {
		labels: [19, 20, 21, 22, 23, 24, 25],
		datasets: [
			{
				fill: false,
				lineTension: 0.3,
				backgroundColor: '#C4B4F7',
				borderColor: '#990000',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: '#990000',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: '#990000',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [65, 59, 80, 81, 56, 23, 55],
			},
		],
	};



	const options: any = {
		plugins: {
			legend: {
				display: false, // Set display property of legend to false
			},
		},
		scales: {
			y: {
				min: 0,
				max: 100,
			},
		},
		responsive: true,
		maintainAspectRatio: false,
	};
	return (
		<div className='Linestyle'>
			<Line data={data} options={options} />
		</div>
	);
};

export default LineChart;
