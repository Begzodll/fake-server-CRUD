import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../Actions";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        nameValue: '',
        lastNameVal: '',
        email: '',
        webinarVal: "",
        stAddress: {
            street: '',
            location: {
                city: '',
                state: '',
                zip: ''
            }
        },
    },

    reducers: {
        getUser: (state, action) => {
            state.user = action.payload
        },
        getName: (state, action) => {
            state.nameValue = action.payload
        },
        getLastName: (state, action) => {
            state.lastNameVal = action.payload
        },
        getEmail: (state, action) => {
            state.email = action.payload
        },
        getWebinar: (state, action) => {
            state.webinarVal = action.payload
        },
        getAddress: (state, action) => {
            state.stAddress.street = action.payload
        },
        getCity: (state, action) => {
            state.stAddress.location.city = action.payload
        },
        getState: (state, action) => {
            state.stAddress.location.state = action.payload
        },
        getZip: (state, action) => {
            state.stAddress.location.zip = action.payload
        },
        savePost: (state, action) => {
            state.user.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.user.filter(item => item.id === action.payload)
            .forEach(f => state.user.splice(state.user.findIndex(i => i.id === f.id),1))
        },
    }
})
// Api Events
export const getUserFunc = () => apiCall({
    url:'/users',
    method:'get',
    onSuccess:userSlice.actions.getUser.type,
})

export const postSavedFunc = (data) => apiCall({
    url:'/users',
    method:'post',
    data,
    onSuccess:userSlice.actions.savePost.type
})

// export const userDelete = (data) => apiCall({
//     url:'/users/'+data,
//     method:'delete',
//     data
// })

export const userDelete = (data) => {
    return dispatch =>{
        dispatch({
            type:userSlice.actions.deleteUser.type,
            payload:data
        })
    }
}

// Function Events

export const getNameFunc = (event) => {
    return dispatch => {
        dispatch({
            type: userSlice.actions.getName.type,
            payload: event.target.value
        })
    }
}
export const getLastNameFunc = (event) => {
    return dispatch => {
        dispatch({
            type: userSlice.actions.getLastName.type,
            payload: event.target.value
        })
    }
}
export const getEmailFunc = (event) => {
    return dispatch => {
        dispatch({
            type: userSlice.actions.getEmail.type,
            payload: event.target.value
        })
    }
}
export const getWebinarFunc = (event) => {
    return dispatch => {
        dispatch({
            type: userSlice.actions.getWebinar.type,
            payload: event.target.value
        })
    }
}
export const getAddressFunc = (event) => {
    return dispatch => {
        dispatch({
            type: userSlice.actions.getAddress.type,
            payload: event.target.value
        })
    }
}
export const getCityFunc = (event) => {
    return dispatch => {
        dispatch({
            type: userSlice.actions.getCity.type,
            payload: event.target.value
        })
    }
}
export const getStateFunc = (event) => {
    return dispatch => {
        dispatch({
            type: userSlice.actions.getState.type,
            payload: event.target.value
        })
    }
}
export const getZipFunc = (event) => {
    return dispatch => {
        dispatch({
            type: userSlice.actions.getZip.type,
            payload: event.target.value
        })
    }
}
export default userSlice.reducer