import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'

const initialState = {
    items: [
        { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1 },
        { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
        { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
        { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
        { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
        { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 }
    ],
    addedItems: [],
    total: 0

}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TO_CART':
            // check if action id exists in hte added items
            let addedItem = state.items.find(item => item.id === action.payload)
            let existed_item = state.addedItems.find(item => item.id === action.payload)

            if (existed_item) {
                alert('Item already in the cart')
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addedItem.price

                }
            } else {
                let newTotal = addedItem.price + state.total
                addedItem.quantity = 1
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }

        case 'REMOVE_ITEM':
            let removedItem = state.addedItems.find(item => item.id === action.payload)
            let newItems = state.addedItems.filter(item => item.id !== action.payload)

            let newTotal = state.total - removedItem.price

            return {
                ...state,
                addedItems: newItems,
                total: newTotal
            }
        default:
            return state
    }

}



