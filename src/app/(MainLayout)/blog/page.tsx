import NoDesign from '@/components/UI/NoDesign';
import { metaDataSEO } from '@/utils/MetaData';
import React from 'react';
export const metadata = metaDataSEO({
    tabTitle: "roomBooker | Blog",
    des: "Welcome to our room booking website.Blog Page  ",
  });
const page = () => {
    return (
        <div>
            <NoDesign/>
        </div>
    );
};

export default page;