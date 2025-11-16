import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import list from "../components/home/TrendingTour";

const ViewDetails = () => {
    const param = useParams();
    const[product, setProduct] = useState({});
    useEffect(()=>{
        const findProduct = list.find((p)=> p.id === param);
        setProduct(findProduct);
    },[param]);
    if(!product){
        return <div> no list </div>
    }
  return (
    <div>ViewDetails
        <div>
            <img src={product.img} alt="" />
            
        </div>
    </div>
  )
}

export default ViewDetails;