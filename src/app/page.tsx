import Demo from "@/components/landing-page/demo";
import Faq from "@/components/landing-page/faq";
import Features from "@/components/landing-page/features";
import Hero from "@/components/landing-page/header";
import Navbar from "@/components/landing-page/navbar";
import Pricing from "@/components/landing-page/pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Demo />
      <Features />
      <Pricing />
      <Faq />
    </>
  );
}
