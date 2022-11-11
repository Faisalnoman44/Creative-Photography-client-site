import React from 'react';
import about from '../../../images/about.jpg'

const About = () => {
    return (
        <div className="card lg:card-side bg-base-100 rounded-none grid grid-cols-1 md:grid-cols-2 h-full my-10 shadow-sm">
            <figure><img className='rounded-xl w-full h-full' src={about} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-primary">Creative photographer</h2>
                <p className='text-xl text-gray-600'>A creative professional with a passion for capturing beauty in everyday life. An artist who sees the world through a lens, creating stunning photos that tell a story. A photographer who has a unique and stylish perspective on the world around them.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default About;
