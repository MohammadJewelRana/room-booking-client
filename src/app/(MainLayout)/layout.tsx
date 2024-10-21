import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="    ">
        {/* <Navbar /> */}

        <Navbar />

        <main>
          {/* <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow"> */}
          {children}
        </main>
       
         <Footer />
      
      </div>
    </div>
  );
};

export default layout;
