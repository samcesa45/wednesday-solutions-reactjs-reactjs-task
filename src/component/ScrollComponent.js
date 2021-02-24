import { makeStyles, Zoom } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(12),
		right: theme.spacing(2),
	},
}));

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
			<div
				role="presentation"
				className={classes.root}
				handleClick={handleClick}>
				{children}
			</div>
		</Zoom>
	);
};

export default ScrollComponent;
