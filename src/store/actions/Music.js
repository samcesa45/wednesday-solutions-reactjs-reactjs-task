import * as actionTypes from './actionTypes';
import axios from 'axios';

export const search = (item) => {
	return (dispatch) => {
		return axios
			.get('/search?term=' + item)
			.then((res) => {
				return dispatch({
					type: actionTypes.SEARCH,
					payload: res.data.results,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};
};

export const addToFavourite = (item) => (dispatch) => {
	return setTimeout(() => {
		return dispatch({
			type: actionTypes.ADD_TO_FAVOURITE,
			payload: item,
		});
	}, 0);
};

export const removeFromFavourite = (item) => (dispatch) => {
	setTimeout(() => {
		let obj = JSON.parse(localStorage.getItem('Favourite'));
		let final = obj.filter((id) => {
			return id.trackId !== item.trackId;
		});
		localStorage.setItem('Favourite', JSON.stringify(final));
		return dispatch({
			type: actionTypes.REMOVE_FROM_FAVOURITE,
			payload: item,
		});
	}, 0);
};
