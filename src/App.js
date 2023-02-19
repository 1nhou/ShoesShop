import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { createContext, useEffect, useState } from 'react';
import data from './data'
import ShoeList from './component/list';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './component/detail';
import axios from 'axios';
import Cart from './component/Cart';

export let Context1 = createContext()


function App() {

  useEffect(()=>{
    localStorage.setItem('watched',JSON.stringify( [] ))
  },[])

  // let obj = {name : 'ho'}
  // let save = localStorage.setItem('data',JSON.stringify(obj))
  //JSON으로 타입 바꿔서 저장
  // console.log(JSON.parse(save).name)
  // JSON으로 저장된것 다시 arr or obj로 변환

  let [count, setCount] = useState(0)
  let [shoes,setShoes] = useState(data)
  let [stock] = useState([10,11,12])
  let navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<ShoeList shoes={shoes} />}/>
        <Route className='start end' path='/detail/:id' element={
          <Context1.Provider value={{stock, shoes}}>
           <Detail shoes={shoes}  />
           </Context1.Provider>
           }  
           />
        <Route path='*' element={<div> 없는페이지셈</div>} />

        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문 양배추즙 공짜</div>} />
          <Route path='two' element={<div>생일기념 쿠폰드림</div>} />
        </Route> */}
      </Routes>
      <button onClick={()=>{
        setCount(count+1)
        if(count === 0){
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((data)=>{
          let copy = [...shoes]
          data.data.map((e)=>{copy.push(e)})
          setShoes(copy)
        })
        .catch(()=>{
          console.log('실패함ㅅㄱ')
        })
      } if(count === 1){
        axios.get('https://codingapple1.github.io/shop/data3.json')
        .then((data)=>{
          let copy = [...shoes]
          data.data.map((e)=>{copy.push(e)})
          setShoes(copy)
        })
        .catch(()=>{
          console.log('실패함ㅅㄱ')
        })
      } if(count >= 3){
        alert('더이상 상품없셈 그만누르셈')
      }
      }}>더보기</button>

      
    </div>
  );
}

// function Event(){
//   return (
//     <div>
//       <h4>오늘의 이벤트셈</h4>
//       <Outlet></Outlet>
//     </div>

//   )
// }

export default App;
