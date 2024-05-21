import HeroSection from "@/components/ui/HeroSection";
import Features from "@/components/ui/Features";
import ChooseUs from "@/components/ui/ChooseUs";

export default function Home() {
  return (
    <main className="text-black bg-gradient-to-r from-[#2B5876] to-[#4E4376]  antialised bg-grid-white/[0.02] items-center justify-center min-h-screen py-2">
      <HeroSection />
      <Features />
      <ChooseUs />
    </main>
  );
}
