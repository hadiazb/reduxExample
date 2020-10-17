import { REMOVE_HEADLINE } from '../types/coachTypes';

export const removePlayerHeadline = (player) => (
	dispatch
) => {
	dispatch({
		type: REMOVE_HEADLINE,
		payload: player,
	});
};
