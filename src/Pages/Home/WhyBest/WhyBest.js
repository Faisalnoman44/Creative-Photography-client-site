import React, { useEffect, useState } from 'react';


const WhyBest = () => {
    const [bestCollection, setBestCollection] = useState([])

    useEffect(() => {
        fetch('https://assignment-11-server-side-delta.vercel.app/bestcollection')
            .then(res => res.json())
            .then(data => setBestCollection(data))
    }, [])

    return (
        <div className='my-8'>
            <h3 className='text-center text-3xl mb-3 font-semibold text-primary'>Why Creative Photography Best</h3>
            <div className="card w-full h-full border border-primary">
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap 0'>
                    {
                        bestCollection.map(pic => <img className='w-[320px] h-64' alt='' src={pic.image} key={pic._id}></img>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WhyBest;