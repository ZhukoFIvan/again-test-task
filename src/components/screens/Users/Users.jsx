import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../Pagination/Pagination'
import Sidebar from '../../layout/Sidebar/Sidebar'
import styles from './Users.module.scss'

//TODO: filters for users, charts(gender,age,salary, job),personal page for every user
const Users = () => {
	const columns = [
		'FIO',
		// 'Birthday',
		// 'Gender',
		// 'Address',
		'Phone',
		'Email',
		// 'Job',
		// 'Department',
		// 'Hire Date',
		// 'Salary',
	]
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [data, setData] = useState([])
	const [userPerPage] = useState(15)
	useEffect(() => {
		const getCitizens = async () => {
			setIsLoading(true)
			const res = await axios.get('http://dummyjson.com/users')
			setData(res.data.users)
			setIsLoading(false)
		}
		getCitizens()
	}, [])

	const lastUserIndex = userPerPage * currentPage

	const firstUserIndex = lastUserIndex - userPerPage

	const currentUser = data.slice(firstUserIndex, lastUserIndex)

	const paginate = (pageNumbers) => {
		setCurrentPage(pageNumbers)
	}

	return (
		<section className={styles.wrapper}>
			<Sidebar />
			{isLoading ? (
				<div className={styles.loading}>
					<img src='/tenor.gif' />
				</div>
			) : (
				<div className={styles.content}>
					<table>
						<thead>
							<tr>
								{columns.map((column, index) => (
									<th key={index}>{column}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{currentUser.map((citizen) => (
								<tr key={citizen.id} className={styles.row}>
									<td>
										<Link to={`/users/${citizen.id}`}>
											{citizen.firstName +
												' ' +
												citizen.lastName +
												' ' +
												citizen.maidenName}
										</Link>
									</td>

									<td>{citizen.phone}</td>
									<td>{citizen.email}</td>
								</tr>
							))}
						</tbody>
					</table>
					<div>Всего людей {data?.length}</div>
					<Pagination
						userPerPage={userPerPage}
						totalUsers={data?.length}
						paginate={paginate}
						setCurrentPage={setCurrentPage}
						currentPage={currentPage}
					/>
				</div>
			)}
		</section>
	)
}

export default Users
