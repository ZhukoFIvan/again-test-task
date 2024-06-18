import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = ({ birthCounts }) => {
	const data = {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		datasets: [
			{
				label: 'Number of Births',
				data: birthCounts,
				backgroundColor: ['rgba(153, 102, 255, 0.2)'],
				borderColor: ['rgba(153, 102, 255, 1)'],
				borderWidth: 1,
				borderRadius: 10, // Добавляем скругление
        borderSkipped: false, // Убираем пропуски границ для полного скругления
			},
		],
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {
				grid: {
					display: false,
				},
			},
		},
	}

	return <Bar data={data} options={options} />
}

export default BarChart
