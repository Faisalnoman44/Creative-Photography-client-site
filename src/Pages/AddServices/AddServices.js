import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { titleName } from '../../GeneralFunction/GeneralFunction';
import AddService from './AddService';

const AddServices = () => {
    titleName('AddServices - CP')
    const [addServices, setAddServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setAddServices(data))
    }, [])

    return (
        
        <div className=' my-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    addServices.map(service => <AddService
                        key={service._id}
                        service={service}
                    ></AddService>)
                }
            </div>
        </div>
    );
};

export default AddServices;