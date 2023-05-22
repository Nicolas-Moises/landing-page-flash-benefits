import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Companies } from "@/components/Companies";
import { Corp } from "@/components/Corp";
import { Expense } from "@/components/Expense";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { People } from "@/components/People";
import { Testimonials } from "@/components/Testimonials";

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Companies />
      <About />
      <Corp />
      <Expense />
      <People />
      <Benefits />
      <Testimonials />
    </main>
  )
}
