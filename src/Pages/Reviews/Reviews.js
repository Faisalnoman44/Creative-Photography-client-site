import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { titleName } from '../../GeneralFunction/GeneralFunction';
import Review from './Review';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
    titleName('Your Reviews - CP')
    const { user, logout } = useContext(AuthContext);
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

    const [userComments, setUSerComments] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-side-delta.vercel.app/comment?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('Special-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logout();
                }
                return res.json()
            })
            .then(data => setUSerComments(data));
    }, [user?.email])

    const handleDelete = id => {
        const procced = window.confirm('Are you sure you want to delete');

        if (procced) {
            fetch(`https://assignment-11-server-side-delta.vercel.app/comment/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        notify();
                        const remaining = userComments.filter(cmnt => cmnt._id !== id);
                        setUSerComments(remaining)
                    }
                })
        }

    }

    return (
        <div className='w-full min-h-screen'>
            {
                userComments.length > 0 ?
                    userComments.map(comment => <Review key={comment._id} comment={comment} handleDelete={handleDelete}></Review>) :
                    <p className='text-3xl font-bold text-emerald-300 text-center mt-16'>No Review Yet</p>
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Reviews;