import React from 'react';
import Team from '../../components/Team/index';
import Selection from '../../components/Selection/index';
import './style.scss';

const Home = () => {
	return (
		<main className='home'>
			<h1 className='home__title'>Colombian Cyclings</h1>
			<Team />
			<Selection />
		</main>
	);
};

export default Home;
