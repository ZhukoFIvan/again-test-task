import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ genderCount }) => {
	const data = {
		labels: ['Male', 'Female'],
		datasets: [
			{
				label: 'Gender Distribution',
				data: [genderCount.maleCount, genderCount.femaleCount],
				backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
				borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
				borderWidth: 1,
			},
		],
	}

	return <Doughnut data={data}  />
}

export default DoughnutChart
