import HeroSection from "@/components/home-page/hero";
import Navbar from "@/components/home-page/navbar";
import ServiceSection from "@/components/home-page/services";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <HeroSection/>
      <ServiceSection/>
    </main>
  );
}
