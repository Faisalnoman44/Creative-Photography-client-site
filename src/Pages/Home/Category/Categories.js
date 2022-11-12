import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className=' my-4'>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline btn-primary">Info</button>
            </div>
        </div>
    );
};

export default Categories;