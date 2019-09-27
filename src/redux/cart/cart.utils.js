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

// return array with modified cartItem with the decreased quantity
// or the removed item if it was the last one
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToRemove.id
	);

	/**
	 * * if this is last item then
	 * * return new array with all items that don't equal the one
	 * * to be removed
	 */
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map(cartItem =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
