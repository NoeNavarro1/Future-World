import { MainProducts } from "@/components/home/MainProducts";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Future World 🌟",
  description: "Welcome to the future world",
  keywords: ["ecommerce", "future", "world"]
}
export default function Home() {
  return (
    <main>
      <h1>Products</h1>
      <MainProducts/>
    </main>
  );
}