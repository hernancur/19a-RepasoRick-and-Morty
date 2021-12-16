import rootReducer from "./reducer";
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// thunk se usa para hacer pedidos asincronos, como un pedido a nuestro back por ejemplo

export default store