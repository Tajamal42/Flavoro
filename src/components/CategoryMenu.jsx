import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)) 
    ];
    setCategories(uniqueCategories);
  }
  useEffect(() => {
    listUniqueCategories();
    //console.log(categories)
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className='ml-6 mt-5'>
        <h3 className='text-xl font-medium'>Find the best food</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden'>
        <button onClick={() => dispatch(setCategory("All"))} className={`px-3 py-2 text-center bg-gray-200 font-medium rounded-lg hover:bg-green-500 hover:text-white ${ selectedCategory === "All" && "bg-green-500 text-white" }`}>All</button>
            {
              categories.map((category, index) => {
                return(
                  <button onClick={() => dispatch(setCategory(category))} className={`px-3 py-2 text-center bg-gray-200 font-medium rounded-lg hover:bg-green-500 hover:text-white ${ selectedCategory === category && "bg-green-500 text-white" }`} key={index}>{category}</button>
                )
              })
            }
        </div>
    </div>
  )
}

export default CategoryMenu