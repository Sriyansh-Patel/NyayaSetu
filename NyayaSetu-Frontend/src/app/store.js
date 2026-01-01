import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '../features/themeSlices.js';
export const store=configureStore({
    reducer:{
        theme:themeReducer
    }
})


// Redux toolkit introduce single source of truth
// All the state is stored in a single store
// Store is an object that holds the application's state
// ConfigureStore is a function that creates a Redux store
// Reducer must be passed to store
// Reducer are simply functions that take the current state and an action as arguments and return a new state
// The createSlice function from Redux Toolkit automatically generates action creators and action types
// useDispatch and useSelector hooks are used to interact with the store
// useDispatch is used to dispatch actions
// useSelector is used to select state from the store i.e get data from the store
// 