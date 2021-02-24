import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Typography, TextField, makeStyles } from '@material-ui/core';
import classes from './Navbar.module.css';

let items = [
	'all',
	'movie',
	'podcast',
	'music',
	'musicVideo',
	'audiobook',
	'shortFilm',
];
const useStyles = makeStyles((theme) => ({
	text: {
		'& .MuiInputBase-input': {
			color: '#fff',
			padding: theme.spacing(1),
		},
		header: {
			'& .MuiTypography': {
				color: '#fff',
				[theme.breakpoints.down('sm')]: {
					fontSize: '10px',
				},
			},
		},
	},
}));
const Navbar = (props) => {
	const styles = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);
	const [searchTerm, setSearchTerm] = useState('');

	const handleSortClick = (e, id) => {
		e.preventDefault();
		setSelectedTab(id);
		let temp =
			'?term=' + searchTerm + '&media' + e.target.parentElement.textContent;
		props.onSearchSubmit(temp);
	};

	const filterInputChange = (e) => {
		props.onSearchSubmit(e.target.value);
	};

	return (
		<>
			<div className={classes.NavbarSearchContainer}>
				<div className={classes.Navbar}>
					<Typography
						variant="h4"
						gutterBottom
						classes={{ root: styles.header }}>
						Itunes Music Search
					</Typography>
					<TextField
						placeholder="Search for your favorite Artist"
						className={classes.NavbarInput}
						onKeyDown={(e) => filterInputChange(e)}
						classes={{ root: styles.text }}
					/>
				</div>

				<ul className={classes.NavbarLinks}>
					{items.map((item, id) => (
						<li key={id} className={classes.NavbarLink}>
							<a
								to=""
								name={item}
								className={selectedTab === id ? 'active' : ''}
								name={item}
								onClick={handleSortClick}>
								{item}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Navbar;
