// import React from 'react';
// import { connect } from 'react-redux';

// import CollectionItem from '../../components/collection-item/collection-item.component';

// import { selectCollection } from '../../redux/shop/shop.selectors'; 

// import './collection.styles.scss';

// const Collection = ({ collection }) => {
//     const { title, items } = collection;
//     return (
//         <div className='collection-page'>
//             <h2 className='title'>{title}</h2>
//             <div className='items'>
//                 {items.map(item => <CollectionItem key={item.id} item={item} />)}
//             </div>
//         </div>
// 		);
// };

// /**
//  * * passing state as 2nd param to selectCollection is needed b/c
//  * * unlike other selectors we've writte, this selector needs part
//  * * of the state depending on the URL parameter
//  * * state gets passed to the function returned from selec tCollection method
//  * @param {we knew this} state 
//  * @param {*props of the component that we wrap with connect} ownProps 
//  */
// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

// export default connect(mapStateToProps)(Collection);
import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);