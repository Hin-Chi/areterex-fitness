"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";
import Link from "next/link";
import { motion } from "motion/react";

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => {
    setIsOpen(false);
  };
    return(
        <>
        <div>
        <ThemeToggle/>
        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
        </Button>
       </div>

       {isOpen && (
        <motion.div className={`shadow-lg fixed left-0 right-0 top-16 z-40 md:hidden ${isOpen ? 'opacity-100': 'opacity-0 pointer-events-none' }`}
             initial={{opacity:0, y: 12}} 
            animate={{opacity:1, y:0}}
            transition={{duration: 0.3, ease: "easeOut"}}
        >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border dark:border-secondary/40 text-center">
                {navItems.map((item) => (
                    <Link
                    className="text-foreground hover:text-primary block px-3 py-2
                    font-medium" 
                    key={item.name} href={item.href} onClick={handleLinkClick}>
                        {item.name}
                    </Link>
                ))}
                <div className="px-3 py-2">
                    <Button className="w-full font-semibold">
                        <a href="#pricing" onClick={handleLinkClick}>
                            Join Now
                        </a>
                        
                        </Button>
                </div>
            </div>

        </motion.div>
       )}
    </>
        
    );
}