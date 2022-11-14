import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className=' my-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn btn-outline btn-primary ">See All</button></Link>
            </div>
        </div>
    );
};

export default Categories;