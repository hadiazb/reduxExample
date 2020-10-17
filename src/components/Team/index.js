import React from 'react';
import { connect } from 'react-redux';
import * as addPlayerHeadline from '../../actions/addPlayerHeadline';
import * as addPlayerAlternates from '../../actions/addPlayerAlternates';
import * as reStart from '../../actions/reStart';
import './style.scss';
import { IoMdRemoveCircle } from 'react-icons/io';
import {
	AiFillPlusCircle,
	AiOutlineReload,
} from 'react-icons/ai';

const Team = (props) => {
	const {
		players,
		addPlayerHeadline,
		addPlayerAlternates,
		reStart,
	} = props;
	return (
		<section className='team'>
			<div className='team__title'>
				<h2>Team</h2>
				<button onClick={() => reStart()}>
					<AiOutlineReload size='25' />
				</button>
			</div>
			<div className='team__content'>
				{players.map((player) => (
					<article
						key={player.id}
						className='team__content-list'
					>
						<img src={player.foto} alt={player.nombre} />
						<h3>{player.nombre}</h3>
						<div>
							<button onClick={() => addPlayerHeadline(player)}>
								<AiFillPlusCircle size='20' />
							</button>
							<button onClick={() => addPlayerAlternates(player)}>
								<IoMdRemoveCircle size='20' />
							</button>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

const mapStateToProps = (reducers) => {
	return reducers.coachReducer;
};

const mapDispatchToProps = {
	...addPlayerAlternates,
	...addPlayerHeadline,
	...reStart,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Team);
