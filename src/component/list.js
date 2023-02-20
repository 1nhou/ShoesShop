import { Link,  } from "react-router-dom";
import Card from 'react-bootstrap/Card';



function ShoeList(props){
    return(
    <>
        <div className='main-bg'><div className="items"><Test props={props} /></div></div>
        
            <div className='container'>
                <div className='row'>
                {
                props.shoes.map(function(a,i){
                    return (
                        <div className="col-md-4" key={i}>
                            <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%"/>
                            <Link to={`/detail/${i}`}><h4>{props.shoes[i].title}</h4></Link>
                            <p>{props.shoes[i].content}</p> 
                            <p>{props.shoes[i].price}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    </>
    )
}

let Test = function(props) {

    let watched = localStorage.getItem('watched')
    let watchedItems = JSON.parse(watched)    

    return(
        
     
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>최근 본 상품</Card.Title>
        <hr></hr>
        <div>
          {
    
                watchedItems.map((a,i)=>{
                let find = props.props.shoes.findIndex((e)=>{return e.id === a})
                  return (

                    <Card.Text key={i}>
                        {find == -1 ? null :<img src={`https://codingapple1.github.io/shop/shoes${a +1}.jpg`} width="30%" />}
                       <Link to={ find == -1 ? null : `/detail/${props.props.shoes[a].id}`}>{find == -1 ? null : props.props.shoes[a].title}</Link>
                       <hr></hr>
                    </Card.Text>
                  )
              })
           
          }
          </div>
      </Card.Body>
    </Card>
  )
  }

export default ShoeList