import { Grid } from '@material-ui/core';
import React from 'react';
import SingleCard from './SingleCard';

const Filter = (props) => {
	return (
		<div>
			<Grid item xs={12} sm={6} md={4} lg={3}>
				{props.data
					? props.data.map((item) => <SingleCard item={item} key={item.id} />)
					: null}
			</Grid>
		</div>
	);
};

export default Filter;
