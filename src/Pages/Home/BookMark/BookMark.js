import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import BookMarkService from './BookMarkService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookMark = () => {
    const { user } = useContext(AuthContext)
    const [bookMarkServices, setBookMarkServices] = useState([])
    const notify = () => toast.success('Successfully Deleted', {
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
        fetch(`https://assignment-11-server-side-delta.vercel.app/bookmark?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookMarkServices(data))
    }, [user?.email])

    const handleDelete = id => {
        const procced = window.confirm('Are you sure you want to remove');

        if (procced) {
            fetch(`https://assignment-11-server-side-delta.vercel.app/bookmark/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        notify()
                        const remaining = bookMarkServices.filter(serv => serv._id !== id);
                        setBookMarkServices(remaining)
                    }
                })
        }

    }

    return (
        <div className='w-full md:w-10/12 mx-auto mb-8'>
            {
                bookMarkServices.length > 0 && <h3 className='text-center text-3xl  mb-3 font-semibold text-primary'>Bookmark</h3>
            }
            {


                bookMarkServices.map(service => <BookMarkService
                    key={service._id}
                    service={service}
                    handleDelete={handleDelete}
                ></BookMarkService>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookMark;