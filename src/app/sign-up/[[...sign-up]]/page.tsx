import Footer from "@/components/landing-page/footer";
import Navbar from "@/components/landing-page/navbar";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <SignUp />
      </div>
      <Footer />
    </>
  );
}
