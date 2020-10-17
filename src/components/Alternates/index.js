import React from 'react';
import { connect } from 'react-redux';
import * as removePlayerAlternate from '../../actions/removePlayerAlternates';
import { IoMdRemoveCircle } from 'react-icons/io';

const Alternates = (props) => {
	const { alternates, removePlayerAlternate } = props;
	return (
		<section className='headlines'>
			<h2 className='headlines__title'>Alternates</h2>
			<div className='headlines__content'>
				{alternates.map((alternates) => (
					<article
						className='headlines__content-list'
						key={alternates.id}
					>
						<div>
							<img src={alternates.foto} alt={alternates.nombre} />
							<button
								onClick={() => removePlayerAlternate(alternates)}
							>
								<IoMdRemoveCircle size='20' />
							</button>
						</div>
						<p>{alternates.nombre}</p>
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
	...removePlayerAlternate,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Alternates);
