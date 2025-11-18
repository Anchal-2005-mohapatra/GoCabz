import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import dhauli from "../Assets/Tour/dhauli.png";
import chilika from "../Assets/Tour/chilika.png";
import goplapur from '../Assets/Tour/gopalpur.png';
import jagannath from "../Assets/Tour/jagannath.png";
import ram from "../Assets/Tour/Ram.png";
import iskon from "../Assets/Tour/iskon.png";
const alltour = [
    {
        id: 1,
        img: dhauli,
        place: "Dhauligiri, Bhubaneswar",
        famous: " We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit.",

    },
    {
        id: 2,
        img: chilika,
        place: "Chilika Lake, Odisha",
        famous: "We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 3,
        img: goplapur,
        place: "Gopalpur Sea Beach",
        famous: "We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 4,
        img: jagannath,
        place: "Jagannath Temple, Puri",
        famous: "We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 5,
        img: ram,
        place: "Ram Mandir, Bhubaneswar",
        famous: " We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },
    {
        id: 6,
        img: iskon,
        place: "Iskcon Temple, Bhubaneswar",
        famous: " We focus on unique, local experiences that allow you to immerse yourself in the culture, history, and natural beauty of the places you visit."
    },

]

const ViewDetails = () => {
    const { id } = useParams();
    const pid = Number(id)
    const [product, setProduct] = useState(null);

    useEffect(() => {

        window.scrollTo({ top: 0, behavior: "smooth" })
        const findProduct = alltour.find((p) => p.id === pid);
        setProduct(findProduct);
        localStorage.setItem('viewProduct', JSON.stringify(findProduct))
    }, [pid]);
    if (!product) {
        return <div> no list </div>
    }
    return (
        <div className='px-6 md:px-8 lg:px-9'>
            <p className='font-bold  text-center py-6 text-2xl'>ViewDetails</p>
            <div className='flex flex-col items-center justify-center'>
                <img src={product.img} alt="" className='max-h-[300px] bg-cover bg-center' />
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <p className='font-medium text-lg'>{product.place}</p>
                    <p className='max-w-[400px] text-center text-sm text-gray-600'>{product.famous}</p>
                    <button className='bg-orange-200 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 hover:text-black'>Book The Trip</button>
                </div>
            </div>
        </div>
    )
}

export default ViewDetails;