import React, { useState, useRef, useEffect } from 'react';
import {
	Typography,
	CardContent,
	Card,
	Button,
	makeStyles,
	CardActionArea,
	IconButton,
	CardMedia,
	CardActions,
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { connect } from 'react-redux';
import {
	addToFavourite,
	search,
	removeFromFavourite,
} from '../store/actions/Music';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

const SingleCard = (props) => {
	const inputRef = useRef();
	const classes = useStyles();
	const [currentSong, setCurrentsong] = useState(null);
	const { item } = props;

	const handlePlay = (songPreview) => {
		if (currentSong) {
			if (currentSong === songPreview) {
				return inputRef.current.play();
			}
		}
		setCurrentsong(songPreview);
	};

	let storedItem =
		props.favoriteItem &&
		props.favoriteItem.find((o) => o.collectionId === item.collectionId);
	const disabledMovie = storedItem ? true : false;

	useEffect(() => {
		if (currentSong) {
			inputRef.current.play();
		}
	}, [currentSong]);
	return (
		<>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						image={item.artworkUrl100}
						title="artwork"
						className={classes.media}
					/>
					<CardContent>
						<Typography gutterBottom variant="caption" color="textSecondary">
							{item.artistName}
						</Typography>
						<Typography color="textSecondary" variant="body1">
							{item.collectionName}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						disabled={disabledMovie}
						size="small"
						color="primary"
						onClick={() => props.addToFavourite(item)}>
						{item ? 'add to favorite' : 'remove from favorite'}
					</Button>
					<Button
						// disabled={disabledMovie}
						size="small"
						color="primary"
						onClick={() => props.removeFromFavourite(item)}>
						{item ? 'remove from favorite' : { disabledMovie }}
					</Button>
					<audio ref={inputRef} src={currentSong} />
					<IconButton
						size="small"
						color="primary"
						onClick={() => handlePlay(item.previewUrl)}>
						<PlayArrowIcon />
					</IconButton>
					<IconButton
						size="small"
						color="primary"
						onClick={() => inputRef.current.pause()}>
						<PauseIcon />
					</IconButton>
				</CardActions>
			</Card>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		favoriteItem: state.musicReducers.favourite,
	};
};

export default connect(mapStateToProps, {
	addToFavourite,
	removeFromFavourite,
	search,
})(SingleCard);
