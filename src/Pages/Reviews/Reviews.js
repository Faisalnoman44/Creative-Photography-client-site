import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { titleName } from '../../GeneralFunction/GeneralFunction';
import Review from './Review';

const Reviews = () => {
    titleName('Your Reviews - CP')
    const { user, logout} = useContext(AuthContext);

    const [userComments, setUSerComments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/comment?email=${user?.email}`,{
            headers:{
                authorization : `Bearer ${localStorage.getItem('Special-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logout();
                }
               return res.json()
            })
            .then(data => setUSerComments(data));
    }, [user?.email])

    const handleDelete = id =>{
        const procced = window.confirm('Are you sure you want to delete');

        if(procced){
            fetch(`http://localhost:5000/comment/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted');
                    const remaining = userComments.filter( cmnt => cmnt._id !== id );
                    setUSerComments(remaining)
                }
            })
        }

    }

    return (
        <div className='w-full min-h-screen'>
            {
                userComments.map(comment => <Review key={comment._id} comment = {comment} handleDelete={handleDelete}></Review>)
            }
        </div>
    );
};

export default Reviews;