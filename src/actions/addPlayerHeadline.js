import { ADD_HEADLINES } from '../types/coachTypes';

export const addPlayerHeadline = (player) => (dispatch) => {
	dispatch({
		type: ADD_HEADLINES,
		payload: player,
	});
};
