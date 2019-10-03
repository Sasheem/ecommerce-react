import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

// create new selector to convert our shop.collections object into an array
export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => Object.keys(collections).map(key => collections[key])
);

/**
 * * find collection.id matching the url parameter of our collection_id_map
 * @param {find match inside COLLECTION_ID_MAP} collectionUrlParam
 */
export const selectCollection = collectionUrlParam =>
	createSelector(
		[selectCollections],
		collections => collections[collectionUrlParam]
		// collections =>
		// 	collections.find(
		// 		collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
		// 	)
	);
