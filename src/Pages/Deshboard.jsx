import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Dcard from '../Components/Dcard';

const Deshboard = () => {
    const data = useLoaderData();
    return (
        <div className='flex flex-wrap gap-5 m-5 justify-center'>
            {
                data.map(singleProduct=><Dcard key={data.id} product={singleProduct}/>)
            }
        </div>
    );
};

export default Deshboard;