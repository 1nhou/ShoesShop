import { Link } from "react-router-dom";

function ShoeList(props){
    return(
    <>
        <div className='main-bg'></div>
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

export default ShoeList;