import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import ApiUser from "./Middleware/apiUsers";
import user from './Reducer/UserReduser'
import register from './Reducer/Register'
export default configureStore({
    reducer:{
        user,
        register
    },
    middleware:[
        ApiUser,
        thunkMiddleware
    ]
})