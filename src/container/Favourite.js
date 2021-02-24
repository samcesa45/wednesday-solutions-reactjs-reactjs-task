import {
	Typography,
	TextField,
	makeStyles,
	Grid,
	Paper,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import classes from './Favourite.module.css';
import SingleCard from '../component/SingleCard';
import {
	removeFromFavourite,
	search,
	addToFavourite,
} from '../store/actions/Music';

const useStyles = makeStyles((theme) => ({
	text: {
		'& .MuiInputBase-input': {
			color: '#fff',
			padding: theme.spacing(1),
		},
		header: {
			'.MuiTypography-h4': {
				color: '#fff',
				[theme.breakpoints.down('sm')]: {
					fontSize: '10px',
				},
			},
		},
	},
}));

const Favourite = (props) => {
	const items = props.isfavourite;
	const styles = useStyles();

	const filterList = (e) => {
		let updatedList = props.data;

		updatedList = updatedList.filter(
			(item) =>
				item.artistName
					.toLowerCase()
					.props.search(e.target.value.toLowerCase()) !== -1
		);
		return updatedList;
	};

	return (
		<div>
			<div className={classes.FavouriteSearchContainer}>
				<div className={classes.Favourite}>
					<Typography variant="h4" gutterBottom>
						Itunes Music Favourite
					</Typography>
					<TextField
						placeholder="Search "
						className={classes.FavouriteInput}
						onChange={filterList}
						classes={{ root: styles.text }}
						value={props.value}
					/>
				</div>
			</div>
			<Grid
				container
				spacing={2}
				style={{ marginTop: '1.5rem', marginLeft: '1.5rem' }}>
				{items.map((item, index) => (
					<Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
						<SingleCard key={item.artistId} item={item} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isfavourite: state.musicReducers.favourite,
		data: state.musicReducers.data,
		value: state.value,
	};
};

export default connect(mapStateToProps, {
	addToFavourite,
	removeFromFavourite,
	search,
})(Favourite);
