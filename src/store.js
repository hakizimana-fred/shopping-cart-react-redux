import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './Redux/Reducers/cartReducer'


export const store = createStore(
    cartReducer,
    composeWithDevTools()
)





