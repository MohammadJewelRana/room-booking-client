 
import SectionBanner from "../_components/SectionBanner";
 

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-12">
      <SectionBanner />
      {children}
    </div>
  );
};

export default layout;
