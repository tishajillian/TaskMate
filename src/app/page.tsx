import Hero from "@/app/landing/Hero";
import Features from "@/app/landing/Features";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <Features />
    </div>
  );
}
