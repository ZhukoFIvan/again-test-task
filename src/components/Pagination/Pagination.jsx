import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import styles from './Pagination.module.scss'
const Pagination = ({
	userPerPage,
	totalUsers,
	paginate,
	setCurrentPage,
	currentPage,
}) => {
	const pageNumbers = []
	for (let index = 1; index <= totalUsers / userPerPage; index++) {
		pageNumbers.push(index)
	}

	return (
		<div className={styles.pagination}>
			<ul>
				<button
					className={styles.btns}
					onClick={() => setCurrentPage((prev) => prev - 1)}
					disabled={currentPage === 1}
				>
					<GrFormPrevious size={20} />
				</button>
				{pageNumbers.map((number, i) => (
					<li
						key={i}
						className={styles.number}
						onClick={() => {
							paginate(number)
						}}
					>
						<span>{number}</span>
					</li>
				))}
				<button
					className={styles.btns}
					onClick={() => setCurrentPage((prev) => prev + 1)}
					disabled={currentPage === pageNumbers.length}
				>
					<GrFormNext size={20} />
				</button>
			</ul>
		</div>
	)
}

export default Pagination
