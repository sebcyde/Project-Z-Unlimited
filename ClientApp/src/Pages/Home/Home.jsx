import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
	useEffect(() => {
		const FetchTest = async () => {
			// https://localhost:5000/Weather
			// https://localhost:5000/item/1

			// https://localhost:5000/anime

			const res = await axios.get('https://localhost:5000/anime/987');
			console.log('Data:', res);
		};
		FetchTest();
	}, []);

	return <div>test</div>;
};

export default Home;
