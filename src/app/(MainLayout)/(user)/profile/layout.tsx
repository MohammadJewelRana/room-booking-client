import Container from "@/components/UI/Container";
import { ReactNode } from "react";
import Sidebar from "./_components/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-12">
      <Container>
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-24">
          {/* Left Side */}
          <div className="w-full sm:w-3/12 ">
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="w-full sm:w-9/12 ">{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default Layout;
