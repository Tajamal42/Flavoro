import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { removeFromCart, incrementQty, decremenQty } from '../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const ItemCard = ({id, name, price, img, qty}) => {
  const dispatch = useDispatch();
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
      
        <MdDelete onClick={()=> {
          dispatch(removeFromCart({id, name, price, img, qty})); 
          toast(`${name} Removed!`, { icon: '👏', });}} className='absolute right-7 text-gray-600 cursor-pointer' />
        <img src={img} alt='' className='w-[50px] h-[50px]' />
        <div className='leading-5'>
            <h2 className='text-gray-800'>{name}</h2>
            <div className='flex justify-between'>
                <span className='text-green-500'>PKR: {price}</span>
                <div className='flex justify-center items-center gap-2 absolute right-7'>
                    <CiCirclePlus onClick={()=> qty >= 1 ? dispatch(incrementQty({id})) : (qty = 0)} className='border-2 text-2xl hover:text-white hover:bg-green-500 hover:border-none rounded-md transition-all ease-linear cursor-pointer' />
                    <span>{qty}</span>
                    <CiCircleMinus onClick={() =>qty > 1 ? dispatch(decremenQty({id})) : (qty = 0) }  className='border-2 text-2xl hover:text-white hover:bg-green-500 hover:border-none rounded-md transition-all ease-linear cursor-pointer' />
                </div>
            </div> 
        </div>
    </div>
  )
}

export default ItemCard