import React from 'react';
import Navbar from '../component/Navbar';
import { connect } from 'react-redux';
import {
	addToFavourite,
	search,
	removeFromFavourite,
} from '../store/actions/Music';
import Filter from '../component/Filter';

import { Typography } from '@material-ui/core';

const Home = (props) => {
	return (
		<>
			<Navbar onSearchSubmit={props.search} />

			{props.data <= 0 ? (
				<Typography
					variant="h1"
					style={{ color: '#ffff', textAlign: 'center' }}>
					Nothing to show
				</Typography>
			) : null}
			<Filter data={props.data} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		data: state.musicReducers.data,
	};
};

export default connect(mapStateToProps, {
	search,
	addToFavourite,
	removeFromFavourite,
})(Home);
