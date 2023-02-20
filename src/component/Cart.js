import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {changeAge} from './../store/userSlice'
import {changeCount,delProduct} from './../store'
import { useState } from 'react'


function Cart(){

     let state = useSelector((state)=>{ return state })
     let dispatch = useDispatch()
     let [count, setCount] = useState(0)

     //store.js에 요청 보내주는 함수

    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            {state.user.name} {state.user.age}세의 장바구니
            <button onClick={()=>{dispatch(changeAge(10))}}>버튼이셈</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                        {
                        state.cart.map((e,i)=>{
                            return (
                                <>
                                    <tr key={i}>
                                        <td>{state.cart[i].id}</td>
                                        <td>{state.cart[i].name}</td>
                                        <td>{state.cart[i].count}</td>
                                        <td><button onClick={()=>{dispatch(changeCount(state.cart[i].id))}}>+</button></td>
                                        <td><button onClick={()=>{dispatch(delProduct(state.cart[i].id))}}>삭제하기</button></td>
                                    </tr>
                                </>
          
                            )
                        })
                        }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart