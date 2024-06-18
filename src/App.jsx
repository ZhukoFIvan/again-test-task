import React from 'react'
import Home from './components/screens/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './components/screens/Users/Users'
import NotFound from './components/screens/NotFound/NotFound'
import User from './components/screens/User/User'


const App = () => {
	return <BrowserRouter>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/users' element={<Users/>}/>
			<Route path='/users/:id' element={<User/>}/>
			{/* <Route path='/users/:id/address' element={<Address/>}/> */}
			<Route path='/not-found' element={<NotFound/>}/>
		</Routes>
	</BrowserRouter>
}

export default App
