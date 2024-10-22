import React from 'react';
import Create from '../_components/Create';
import { metaDataSEO } from '@/utils/MetaData';

export const metadata = metaDataSEO({
    tabTitle: "roomBooker | Admin | Create Room",
    des: "Welcome to our room booking website. Admin Panel create Room",
  });

const page = () => {
    return (
        <div>
            <Create/>
        </div>
    );
};

export default page;