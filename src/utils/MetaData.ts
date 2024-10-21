import { Metadata } from "next";

export const metaDataSEO = ({
  tabTitle,
  des,
}: {
  tabTitle: string;
  des: string;
}): Metadata => {
  return {
    title: `${tabTitle}`,  
    description: des,
    icons: {
      icon: "/logo.avif",  
    },
  };
};
