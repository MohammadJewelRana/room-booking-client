import RoomCard from '@/components/home/Card/RoomCard';
import Renovated from '@/components/home/Renovated';
import { metaDataSEO } from '@/utils/MetaData';
import React from 'react';

export const metadata = metaDataSEO({
    tabTitle: "roomBooker | Room",
    des: "Welcome to our room booking website. Room Page  ",
  });
const page = () => {


    return (
        <div className=''>
           <RoomCard dataShow={true}/>
           <Renovated/>


        </div>
    );
};

export default page;