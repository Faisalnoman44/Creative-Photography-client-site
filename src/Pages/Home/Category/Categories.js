import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://assignment-11-server-side-delta.vercel.app/services')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className=' mb-8'>
            <h3 className='text-center text-3xl  mb-3 font-semibold text-primary'>Services</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn btn-outline btn-primary">See All</button></Link>
            </div>
        </div>
    );
};

export default Categories;