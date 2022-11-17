import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}>

                    </Service>)
                }
            </div>
    );
};

export default Services;