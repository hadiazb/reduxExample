import { ADD_ALTERNATES } from '../types/coachTypes';

export const addPlayerAlternates = (player) => (
	dispatch
) => {
	dispatch({
		type: ADD_ALTERNATES,
		payload: player,
	});
};
