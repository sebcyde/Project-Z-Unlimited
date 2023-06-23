import LoadingScreen from './Pages/Loading/LoadingScreen';
import MyProfile from './Pages/MyProfile/MyProfile';
import { Route, Routes } from 'react-router-dom';
import UserPage from './Pages/UserPage/UserPage';
import Settings from './Pages/Settings/Settings';
import Messages from './Pages/Messages/Messages';
import Search from './Pages/Search/Search';
import React, { useState } from 'react';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import Home from './Pages/Home/Home';
import Chat from './Pages/Chat/Chat';

const App = () => {
	const [Loading, setLoading] = useState(false);
	const [User, setUser] = useState(true);

	return Loading ? (
		<LoadingScreen />
	) : !User ? (
		<Routes>
			<Route path="/" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	) : (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/user" element={<UserPage />} />
			<Route path="/settings" element={<Settings />} />
			<Route path="/search" element={<Search />} />
			<Route path="/profile" element={<MyProfile />} />
			<Route path="/messages" element={<Messages />} />
			<Route path="/chat" element={<Chat />} />
			{/* <Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} /> */}
		</Routes>
	);
};

export default App;
