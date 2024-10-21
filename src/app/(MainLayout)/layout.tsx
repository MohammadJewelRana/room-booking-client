import { Navbar } from "@/components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="relative flex flex-col h-[600px]">
        <Navbar />
        <main>
          {/* <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow"> */}
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
