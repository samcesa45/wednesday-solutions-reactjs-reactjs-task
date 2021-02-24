import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { connect } from 'react-redux';
import {
	addToFavourite,
	search,
	removeFromFavourite,
} from '../store/actions/Music';
import Filter from '../component/Filter';
// import ScrollComponent from '../component/ScrollComponent';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { Typography, Grid, IconButton, Toolbar } from '@material-ui/core';

import { makeStyles, Zoom } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(12),
		right: theme.spacing(2),
	},
}));
const Home = (props) => {
	const ScrollComponent = ({ children }) => {
		const trigger = useScrollTrigger({
			disableHysteresis: true,
			threshold: 100,
		});
		const classes = useStyles();
		const handleClick = (event) => {
			const anchor = (event.target.ownerDocument || document).querySelector(
				'#scroll-to-top'
			);
			if (anchor) {
				anchor.scrollIntoView({ behaviour: 'smooth', block: 'center' });
			}
		};
		return (
			<Zoom in={trigger}>
				<div role="presentation" className={classes.root} onClick={handleClick}>
					{children}
				</div>
			</Zoom>
		);
	};

	return (
		<>
			<Navbar onSearchSubmit={props.search} />
			<Toolbar id="scroll-to-top">
				{props.data <= 0 ? (
					<Typography
						variant="h1"
						style={{ color: '#ffff', textAlign: 'center' }}>
						Nothing to show
					</Typography>
				) : null}
				<Filter data={props.data} />
				<ScrollComponent {...props}>
					<Fab color="secondary" size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</ScrollComponent>
			</Toolbar>
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
