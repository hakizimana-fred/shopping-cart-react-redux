
export const addToCart = (id) => ({
    type: 'ADD_TO_CART',
    payload: id
})

export const getProducts = (id) => ({
    type: 'GET_ITEMS',
})

export const removeFromCart = (id) => ({
    type: 'REMOVE_ITEM',
    payload: id
})
