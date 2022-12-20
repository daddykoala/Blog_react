import {configureStore} from '@reduxjs/toolkit'
import articleReducer from './article/articleReducer';
import thunk from 'redux-thunk';



const store = configureStore({
    reducer: {
        article:articleReducer
    },
  })

export default store