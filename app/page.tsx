import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Sobre from "@/Components/Sobre";
import Servicos from "@/Components/Servicos";
import Portfolio from "@/Components/Portfólio";
import Diferenciais from "@/Components/Diferenciais";
import Contato from "@/Components/Contato";
import ScrollProgressBar from "@/Components/ScrollProgressBar";

export default function Home() {
  return (
    <main className="w-full">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Diferenciais />
      <Contato />
    </main>
  );
}
