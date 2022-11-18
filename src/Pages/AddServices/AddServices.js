import React, { useEffect, useState } from 'react';
import { titleName } from '../../GeneralFunction/GeneralFunction';
import AddService from './AddService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {
    titleName('AddServices - CP')
    const [addServices, setAddServices] = useState([])

    const notify = () => toast.success('Successfully added', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    useEffect(() => {
        fetch('https://assignment-11-server-side-delta.vercel.app/allservices')
            .then(res => res.json())
            .then(data => setAddServices(data))
    }, [])

    const handleBookMark = (service) => {
        fetch('https://assignment-11-server-side-delta.vercel.app/bookmark', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // handleModal()
                    notify()
                }

            })
            .catch(err => console.error(err))
    }

    return (

        <div className=' my-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    addServices.map(service => <AddService
                        key={service._id}
                        service={service}
                        handleBookMark={handleBookMark}
                    ></AddService>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddServices;