import React, { useEffect, useState } from 'react';
import { titleName } from '../../GeneralFunction/GeneralFunction';
import Service from './Service';

const Services = () => {
    titleName('Services - CP')
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