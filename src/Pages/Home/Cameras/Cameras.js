import React, { useEffect, useState } from 'react';
import Camera from './Camera';

const Cameras = () => {
    const [cameras, setCameras] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/camera')
            .then(res => res.json())
            .then(data => setCameras(data))
    }, [])
    return (
        <div>
            <h3 className='text-center text-3xl  mb-3 font-semibold text-primary'>Camera</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    cameras.map(camera => <Camera key={camera._id} camera={camera}></Camera>)
                }
            </div>
        </div>
    );
};

export default Cameras;