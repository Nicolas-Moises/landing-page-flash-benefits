
import { Companies } from "./components/Companies";
import { Excluses } from "./components/Excluses";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Testimonials } from "./components/Testimonials";

export default function Expense() {
    return (
        <>
            <Hero />
            <Companies />
            <Features />
            <Products />
            <Excluses />
            <Testimonials />
            <Faq />
        </>
    )
}