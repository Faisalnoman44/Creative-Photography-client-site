import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const previousComment = useLoaderData()
    const {_id, message} = previousComment
    
    const handleSubmit = event =>{
        event.preventDefault()
        const comment = event.target.message.value
        console.log(comment)
        fetch(`http://localhost:5000/comment/${_id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}  className='mb-3'>
                <textarea name='message' className="textarea w-full h-32 border border-primary my-2" placeholder="comments" defaultValue={message}  required></textarea>
                <input className='btn btn-primary' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UpdateReview;