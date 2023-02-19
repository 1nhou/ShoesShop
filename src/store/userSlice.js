import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : { name : 'Ho', age : 20},
    reducers : {
        changeName(state){
            state.name = 'Inho'
        },
        changeAge(state, action){
            state.age += action.payload
        }
    },
})

export let {changeName, changeAge} = user.actions

export default user;