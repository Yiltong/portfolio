import { ArrowUp } from "lucide-react";


export default function Footer() {
    return (
        <footer className="py-2 px-100 bg-card relative border-t border-border mt-12 pt-12 pt-8 flex flex-wrap justify-between items-ceter">
            <p className="text-sm text-muted-foreground">
                {" "}
                 &Copy: {new Date().getFullYear()} ZaqsTech.co, All rights reserve</p>
            <a href="#hero" className="p-2 rounded-full bg-primary/20 hover:bg-primary/70 duration-400">
                <ArrowUp />
            </a>
        </footer>
    )
}