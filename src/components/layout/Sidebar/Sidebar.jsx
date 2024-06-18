import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.scss'
const Sidebar = () => {
	return (
		<section className={styles.sidebar}>
			<nav>
				<div className={styles.top}>
					<h1>LOGO</h1>
				</div>
				<div className={styles.line}></div>
				<ul className={styles.center}>
					<li>
						<NavLink
							to='/'
							style={({ isActive }) => {
								return {
									fontWeight: isActive ? 'bold' : '',
									color: isActive ? 'purple' : 'black',
								}
							}}
						>
							Главная
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/users'
							style={({ isActive }) => {
								return {
									fontWeight: isActive ? 'bold' : '',
									color: isActive ? 'purple' : 'black',
								}
							}}
						>
							Пользователи
						</NavLink>
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default Sidebar
