import Image from "next/image";
import { Description } from "./components/shared/Header/home/Description";
import { Hero } from "./components/shared/Header/home/Hero";
import { MainProducts } from "./components/shared/Header/home/MainProducts";


export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
      
    </main>
  );
}
