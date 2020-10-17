import { RE_START } from '../types/coachTypes';

export const reStart = () => (dispatch) => {
	dispatch({
		type: RE_START,
		payload: [],
	});
};
