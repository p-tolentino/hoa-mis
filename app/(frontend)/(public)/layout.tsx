import { Navbar } from "@/components/system/Navbar";
import { Footer } from "@/components/system/Footer";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default PublicLayout;
