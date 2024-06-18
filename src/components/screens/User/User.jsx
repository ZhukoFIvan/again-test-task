import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../../layout/Sidebar/Sidebar'
import styles from './User.module.scss'

const User = () => {
	const { id } = useParams()
	const [citizen, setCitizen] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		const getCitizen = async () => {
			setIsLoading(true)
			const res = await axios.get(`https://dummyjson.com/users/${id}`)
			setCitizen(res.data)
			setIsLoading(false)
		}
		getCitizen()
	}, [])

	return (
		<div className={styles.wrapper}>
			<Sidebar />
			
			{isLoading ? (
				<div className={styles.loading}>
					<img src='/tenor.gif' alt='' />
				</div>
			) : (
				<div className={styles.content}>
					{citizen && (
						<>
							<div className={styles.main}>
								<img src={citizen.image} alt='image' className={styles.image} />
								<div className={styles.info}>
									<div className={styles.name}>
										{citizen.firstName +
											' ' +
											citizen.lastName +
											' ' +
											citizen.maidenName}
									</div>
									<div>{citizen.age} лет</div>
								</div>
							</div>
						</>
					)}
					<div className={styles.interesting}>
						<div>{citizen.university}</div>
						<div>{citizen.address?.country}</div>
						<div>{citizen.company?.department}</div>
					</div>
					<div className={styles.center_side}>
						<div className={styles.address}>
							<h3>Адрес</h3>

							<div>
								<span>Страна </span>
								{citizen.address?.country}
							</div>
							<div>
								<span>Город </span>
								{citizen.address?.city}
							</div>
							<div>
								<span>Штат </span>
								{citizen.address?.state}
							</div>
							<div>
								<span>Индекс </span>
								{citizen.address?.postalCode}
							</div>
						</div>
						<div className={styles.general_info}>
							<h3>Общая информация</h3>

							<div>
								<span>Пол </span>
								{citizen.gender}
							</div>
							<div>
								<span>Почта </span>
								{citizen.email}
							</div>
							<div>
								<span>Телефон </span>
								{citizen.phone}
							</div>
							<div>
								<span>Дата рождения </span>
								{citizen.birthDate}
							</div>
							<div>
								<span>Группа крови </span>
								{citizen.bloodGroup}
							</div>
							<div>
								<span>Роль </span>
								{citizen.role}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default User
