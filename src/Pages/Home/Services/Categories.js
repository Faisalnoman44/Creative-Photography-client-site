import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
               categories.map(category => <Category
                 key={category.id}
                 category ={category}
               ></Category>)
            }
        </div>
    );
};

export default Categories;