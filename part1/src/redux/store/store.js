import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // Assurez-vous d'importer à partir de 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'; // Importez configureStore depuis Redux Toolkit
import rootReducer from '../reducers/rootReducer';
/*
const store = createStore(
  rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Utilisez getDefaultMiddleware pour obtenir les middlewares par défaut de Redux Toolkit

);
*/

const store = configureStore({
    reducer: rootReducer, // Utilisez votre rootReducer
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Utilisez getDefaultMiddleware pour obtenir les middlewares par défaut de Redux Toolkit
  });
export default store;
