import { createStore, applyMiddleware,combinereducers, combineReducers} from 'redux';
import articleReducer from './article/articleReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    articleReducer
})

const store = createStore (rootReducer,applyMiddleware(thunk))

export default store