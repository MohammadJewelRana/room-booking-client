import RoomCard from '@/components/home/Card/RoomCard';
import Renovated from '@/components/home/Renovated';
import React from 'react';

const page = () => {


    return (
        <div className=''>
           <RoomCard dataShow={true}/>
           <Renovated/>


        </div>
    );
};

export default page;