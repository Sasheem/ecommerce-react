export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	/**
	 * * quantity prop gets attached for the first time around since
	 * * the if block above won't run when a new item is added
	 */
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
