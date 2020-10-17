import {
	ADD_HEADLINES,
	ADD_ALTERNATES,
	REMOVE_HEADLINE,
	REMOVE_ALTERNATES,
	RE_START,
} from '../types/coachTypes';
import { Data } from '../LocalData/index';

const INITIAL_STATE = {
	players: Data,
	alternates: [],
	headlines: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_HEADLINES:
			return {
				...state,
				headlines: state.headlines.concat(action.payload),
				players: state.players.filter(
					(i) => i.id !== action.payload.id
				),
			};

		case ADD_ALTERNATES:
			return {
				...state,
				alternates: state.alternates.concat(action.payload),
				players: state.players.filter(
					(i) => i.id !== action.payload.id
				),
			};

		case REMOVE_HEADLINE:
			return {
				...state,
				headlines: state.headlines.filter(
					(i) => i.id !== action.payload.id
				),
				players: state.players.concat(action.payload),
			};

		case REMOVE_ALTERNATES:
			return {
				...state,
				alternates: state.alternates.filter(
					(i) => i.id !== action.payload.id
				),
				players: state.players.concat(action.payload),
			};

		case RE_START:
			return {
				...state,
				players: Data,
				alternates: action.payload,
				headlines: action.payload,
			};

		default:
			return state;
	}
};
