import * as actionTypes from '../actions/actionTypes';
let setLocalStorage = localStorage.getItem('Favourite')
	? JSON.parse(localStorage.getItem('Favourite'))
	: [];

let initialState = {
	data: [],
	loading: false,
	favourite: setLocalStorage,
	value: '',
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SEARCH:
			return {
				...state,
				loading: true,
				data: action.payload,
			};

		case actionTypes.ADD_TO_FAVOURITE:
			localStorage.setItem(
				'Favourite',
				JSON.stringify([...state.favourite, action.payload])
			);

			return {
				...state,
				loading: true,
				favourite: [...state.favourite, action.payload],
			};
		case actionTypes.REMOVE_FROM_FAVOURITE:
			return {
				...state,
				loading: true,
				favourite: state.favourite.filter((item) => item !== action.payload),
			};

		default:
			return state;
	}
};

export default reducers;
