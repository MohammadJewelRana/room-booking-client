import { metaDataSEO } from "@/utils/MetaData";

export const metadata = metaDataSEO({
  tabTitle: "roomBooker | Home",
  des: "Welcome to our room booking website.",
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
