import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Nav from 'react-bootstrap/Nav';

import {Context1} from './../App'
import { addProduct } from "../store";


function Detail(props){
    let state = useSelector((state)=>{ return state })
    let dispatch = useDispatch()
    let {stock, shoes} = useContext(Context1)
    let [warn,setWarn] = useState('')

    useEffect(()=>{
        let a = setTimeout(()=>{setTime(false)}, 2000)
        return (()=>{
            clearTimeout(a)
        })
    })

    let [fade1, setFade1] = useState('')

    useEffect(()=>{
        setTimeout(()=>{setFade1('end')},100)
        return ()=>{
            setFade1('')
        }
    },[])

    useEffect(()=>{
        let localItem = localStorage.getItem('watched')
        localItem = JSON.parse(localItem)
        localItem.push(find.id)
        let set = new Set(localItem)
        let newLocalItem = [...set]
        localStorage.setItem('watched', JSON.stringify(newLocalItem))
    },[])

    // useEffect(()=>{
    //     if (isNaN(warn) === true){
    //         alert('돈두댓...')
    //     }`
    // },[warn])

    let [time,setTime] = useState(true)
    let {id} = useParams()
    let find = props.shoes.find(e =>{return e.id == id})
    let [tap, setTap] = useState(0)

    return(
        <div className={`container start ${fade1}`}>
            {
                time === true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null
            }

            {/* {stock}  */}
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${Number(id)+1}.jpg`} width="100%" />
                </div>

                {/* <input onChange={(e)=>{setWarn(e.target.value)}}></input> */}

                <div className="col-md-6">
                    <h4 className="pt-5">{find.title}</h4>
                    <p>{find.content}</p>
                    <p>{find.price}원</p>
                    <button className="btn btn-danger" onClick={()=>{
                        let product = { id : 1, name : find.title, count : 1}
                        dispatch(addProduct(product))
                        console.log(state.cart)
                    }}>주문하기</button> 
                    <Link to="/cart"><button >확인용 버튼</button></Link>
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTap(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTap(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTap(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TapContent tap={tap} />

        </div> 
    )
    
}

function TapContent({tap}){

    let {stock} = useContext(Context1)

    let [fade, setFade] = useState('')

    useEffect(()=>{
        setTimeout(()=>{setFade('end')},100)
        return ()=>{
            setFade('')
        }
    },[tap])

    return (
    <div className={`start ${fade}`}>
        {[<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tap]}
    </div>
        )
}




export default Detail; 