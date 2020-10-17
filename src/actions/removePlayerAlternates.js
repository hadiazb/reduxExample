import { REMOVE_ALTERNATES } from '../types/coachTypes';

export const removePlayerAlternate = (player) => (
	dispatch
) => {
	dispatch({
		type: REMOVE_ALTERNATES,
		payload: player,
	});
};
