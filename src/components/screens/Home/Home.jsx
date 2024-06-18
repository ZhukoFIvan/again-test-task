import axios from 'axios'
import { useEffect, useState } from 'react'
import Sidebar from '../../layout/Sidebar/Sidebar'
import BarChart from '../../ui/BarChart'
import DoughnutChart from '../../ui/DoughnutChart'
import styles from './Home.module.scss'

//TODO: filters for users, charts(gender,age,salary, job)
const Home = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [data, setData] = useState([])
	const [userPerPage] = useState(10)
	const [genderCount, setGenderCount] = useState({
		maleCount: 0,
		femaleCount: 0,
	})

	function countGenders(data) {
		let maleCount = 0
		let femaleCount = 0

		data.forEach((item) => {
			if (item.gender === 'male') {
				maleCount++
			} else if (item.gender === 'female') {
				femaleCount++
			}
		})

		return { maleCount, femaleCount }
	}
	useEffect(() => {
		const getCitizens = async () => {
			setIsLoading(true)
			const res = await axios.get('http://dummyjson.com/users')
			setData(res.data.users)
			const count = countGenders(res.data.users)
			setGenderCount(count)
			setIsLoading(false)
		}
		getCitizens()
	}, [])
	const getMonthlyBirthCounts = (users) => {
		const birthCounts = Array(12).fill(0)

		users.forEach((user) => {
			const month = new Date(user.birthDate).getMonth()
			birthCounts[month]++
		})

		return birthCounts
	}

	const birthCounts = getMonthlyBirthCounts(data)

	return (
		<section className={styles.wrapper}>
			<Sidebar />

			<div className={styles.content}>
			
				<div className={styles.doughnut}>
					<div className={styles.info}>
						<div>
							<h3>{genderCount.maleCount}</h3> мужчин
						</div>
						<div>
							<h3>{genderCount.femaleCount}</h3> женщин
						</div>
					</div>
					<DoughnutChart genderCount={genderCount} />
				</div>

				<div className={styles.bar_chart}>
					<div className={styles.info}></div>
					<BarChart birthCounts={birthCounts} />
				</div>
			</div>
		</section>
	)
}

export default Home
