import { Grid } from '@material-ui/core';
import React from 'react';
import SingleCard from './SingleCard';

const Filter = (props) => {
	return (
		<Grid
			container
			spacing={2}
			style={{ marginTop: '1.5rem', marginLeft: '0.5rem' }}>
			{props.data
				? props.data.map((item, index) => (
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<SingleCard item={item} key={item.index} />
						</Grid>
				  ))
				: null}
		</Grid>
	);
};

export default Filter;
