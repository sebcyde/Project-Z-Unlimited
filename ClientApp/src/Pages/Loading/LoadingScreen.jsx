import BarLoader from 'react-spinners/BarLoader';
import React from 'react';

const LoadingScreen = () => {
	return (
		<div className="LoadingScreenContainer">
			<BarLoader
				color={'#fff'}
				size={150}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default LoadingScreen;
