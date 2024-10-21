 
import SectionBanner from "../_components/SectionBanner";
 

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SectionBanner />
      {children}
    </>
  );
};

export default layout;
