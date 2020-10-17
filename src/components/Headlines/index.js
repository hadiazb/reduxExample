import React from 'react';
import { connect } from 'react-redux';
import * as removePlayerHeadline from '../../actions/removePlayerHeadline';
import { IoMdRemoveCircle } from 'react-icons/io';
import './style.scss';

const Headlines = (props) => {
	const { headlines, removePlayerHeadline } = props;
	return (
		<section className='headlines'>
			<h2 className='headlines__title'>Headlines</h2>
			<div className='headlines__content'>
				{headlines.map((headlines) => (
					<article
						key={headlines.id}
						className='headlines__content-list'
					>
						<p>{headlines.nombre}</p>
						<div>
							<img src={headlines.foto} alt={headlines.nombre} />
							<button
								onClick={() => removePlayerHeadline(headlines)}
							>
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
	...removePlayerHeadline,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Headlines);
