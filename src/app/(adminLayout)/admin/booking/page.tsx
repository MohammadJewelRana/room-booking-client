 
import { metaDataSEO } from '@/utils/MetaData';
import BookingTable from './_components/BookingTable';
 
export const metadata = metaDataSEO({
    tabTitle: "roomBooker | Admin | Booking",
    des: "Welcome to our room booking website. Admin Panel Booking page",
  });
 const page = () => {
    return (
        <div className='  '>
            <BookingTable/>
        </div>
    );
 };
 
 export default page;