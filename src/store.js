import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'


let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1},
    ],
    reducers : {
        changeCount(state,action){
            let find =state.findIndex((e)=>{ return e.id === action.payload})
            state[find].count += 1
        },
        addProduct(state,action){
            
            let find =state.findIndex((e)=>{ return e.id === action.payload.id})
            if(find === -1){
                state.push(action.payload)
            }
            if(find !== -1){
                let find =state.findIndex((e)=>{ return e.id === action.payload.id})
                state[find].count +=1
            }
                // state[action.payload].count +=1
        },
        delProduct(state,action){
            let find =state.findIndex((e)=>{ return e.id === action.payload})
            state.splice(find, 1)
        }
    }
})

export let {changeCount,addProduct,delProduct} = cart.actions
//reducers에 이용한 함수들 export


export default configureStore({
  reducer: {
      user : user.reducer,
      cart : cart.reducer,
   }
}) 