import Footer from "@/components/landing-page/footer";
import Navbar from "@/components/landing-page/navbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <SignIn />
      </div>
      <Footer />
    </>
  );
}
