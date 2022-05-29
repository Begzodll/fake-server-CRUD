import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../Actions";

const RegisterSlice = createSlice({
    name:'register',
    initialState:{
        register:[],
        name:'',
        lastName:'',
        dataAcc:{
            email:'',
            password:''
        }
    },
    reducers:{
         getRegister:(state,action) =>{
             state.register = action.payload
         },
         getName:(state,action) => {
             state.name = action.payload
         },
        getLastName:(state,action) => {
            state.lastName = action.payload
        },
        getEmail:(state,action) => {
            state.email = action.payload
        },
        getPassword:(state,action) => {
            state.password = action.payload
        },
        postData:(state,action) => {
             state.register.push(action.payload)
        },
        SingInEmail:(state,action) => {
            state.dataAcc.email = action.payload
        },
        SingInPassword:(state,action) => {
            state.dataAcc.password = action.payload
        },
    }
})

// Api Events
export const getRegisterFunc = () => apiCall({
    url:'/accounts',
    method:'get',
    onSuccess:RegisterSlice.actions.getRegister.type
})
export const postDataFunc = (data) => apiCall({
    url:'/accounts',
    method:'post',
    data,
    onSuccess:RegisterSlice.actions.postData.type
})

// Functions

export const getNameFunc = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getName.type,
            payload:e.target.value
        })
    }
}
export const getLastNameFunc = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getLastName.type,
            payload:e.target.value
        })
    }
}
export const getEmailFunc = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getEmail.type,
            payload:e.target.value
        })
    }
}
export const getPasswordFunc = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.getPassword.type,
            payload:e.target.value
        })
    }
}
export const SingInEmailFunc = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.SingInEmail.type,
            payload:e.target.value
        })
    }
}
export const SingInPasswordFunc = (e) => {
    return dispatch => {
        dispatch({
            type:RegisterSlice.actions.SingInPassword.type,
            payload:e.target.value
        })
    }
}

export default RegisterSlice.reducer