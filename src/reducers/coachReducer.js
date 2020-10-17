import {
	ADD_HEADLINES,
	ADD_ALTERNATES,
	REMOVE_HEADLINE,
	REMOVE_ALTERNATES,
} from '../types/coachTypes';

const INITIAL_STATE = {
	players: [
		{
			id: 1,
			nombre: 'Esteban Chaves',
			foto:
				'https://firebasestorage.googleapis.com/v0/b/colombiancycling-6eec5.appspot.com/o/FotosCiclistas%2Fchavito.jpg?alt=media&token=7d6ec514-c8ca-47a1-bc2a-654213250140',
		},
		{
			id: 2,
			nombre: 'Daniel Martinez',
			foto:
				'https://firebasestorage.googleapis.com/v0/b/colombiancycling-6eec5.appspot.com/o/FotosCiclistas%2Fdaniel.jpg?alt=media&token=36f30268-8f20-47f4-b787-a931b29b480e',
		},
		{
			id: 3,
			nombre: 'Egan Bernal',
			foto:
				'https://firebasestorage.googleapis.com/v0/b/colombiancycling-6eec5.appspot.com/o/FotosCiclistas%2Fegan.jpg?alt=media&token=bf77c525-a9a4-4119-adbc-588a7a3cf14b',
		},
		{
			id: 4,
			nombre: 'Fernando Gaviria',
			foto:
				'https://firebasestorage.googleapis.com/v0/b/colombiancycling-6eec5.appspot.com/o/FotosCiclistas%2Ffernando.jpeg?alt=media&token=b4b0e772-56fe-4f61-a7e9-4be4797928a5',
		},
		{
			id: 5,
			nombre: 'S Molano',
			foto:
				'https://firebasestorage.googleapis.com/v0/b/colombiancycling-6eec5.appspot.com/o/FotosCiclistas%2Fmolano.jpeg?alt=media&token=f3e1ce5c-35a3-44c3-a4ee-a388a0573545',
		},
		{
			id: 6,
			nombre: 'Nairo Quintana',
			foto:
				'https://firebasestorage.googleapis.com/v0/b/colombiancycling-6eec5.appspot.com/o/FotosCiclistas%2Fnairo.jpeg?alt=media&token=58c26177-c5dd-4085-ae01-31dbb2d046bc',
		},
		{
			id: 7,
			nombre: 'Rigoberto Uran',
			foto:
				'https://firebasestorage.googleapis.com/v0/b/colombiancycling-6eec5.appspot.com/o/FotosCiclistas%2Frigo.jpeg?alt=media&token=0951d4b5-8f55-4caf-a822-20b240c51962',
		},
		{
			id: 8,
			nombre: 'Sebastian Henao',
			foto:
				'https://firebasestorage.googleapis.com/v0/b/colombiancycling-6eec5.appspot.com/o/FotosCiclistas%2Fsebastianhenao.jpeg?alt=media&token=088ac2d2-f375-45fc-89b3-00f03dc47204',
		},
		{
			id: 9,
			nombre: 'Sergio Henao',
			foto:
				'https://firebasestorage.googleapis.com/v0/b/colombiancycling-6eec5.appspot.com/o/FotosCiclistas%2Fsergioluis.jpg?alt=media&token=84a3b443-83df-43b5-8b28-7c0bc599dd34',
		},
		{
			id: 10,
			nombre: 'Miguel Lopez',
			foto:
				'https://firebasestorage.googleapis.com/v0/b/colombiancycling-6eec5.appspot.com/o/FotosCiclistas%2Fsuperman.jpg?alt=media&token=9fdc7b52-8862-4f80-8e11-dbc9fa5b2540',
		},
	],
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

		default:
			return state;
	}
};
