import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className=''>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}>

                    </Service>)
                }
            </div>
            <h1 className=''>SEcond section</h1>
        </div>
    );
};

export default Services;