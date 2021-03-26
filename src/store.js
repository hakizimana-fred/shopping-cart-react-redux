import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


export const store = createStore(
    () => "I am root reducer for now!",
    composeWithDevTools()
)





