import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
	const AnimeAPIBase = 'https://localhost:5001/anime';

	const GetAllAnime = async (PageNumber) => {
		const res = await axios.get(`${AnimeAPIBase}/${PageNumber}`);
		return res.data;
	};

	const GetTopAnime = async (PageNumber) => {
		const res = await axios.get(`${AnimeAPIBase}/top/${PageNumber}`);
		return res.data;
	};

	const GetAnimeGenres = async () => {
		const res = await axios.get(`${AnimeAPIBase}/genres`);
		return res.data;
	};

	useEffect(() => {
		const FetchTest = async () => {
			const all = await GetAllAnime(1);
			console.log('All:', all);

			const animegenres = await GetAnimeGenres();
			console.log('Anime Genres:', animegenres);

			const top = await GetTopAnime(1);
			console.log('Top:', top);
		};

		FetchTest();
	}, []);

	return <div>test</div>;
};

export default Home;
