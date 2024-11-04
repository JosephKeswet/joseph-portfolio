"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function NavBar({}: Props) {
  const [isOpen, setIsOpen] = useState(false); // State to track the sheet's open/closed status

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      // Calculate the position and subtract the offset (e.g., 100px for the navbar)
      const offsetPosition = projectsSection.offsetTop - 100;

      // Smoothly scroll to the offset position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close the sheet after scrolling
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed inset-0 px-6 md:px-28 py-4 md:py-8 bg-black h-[70px] lg:h-[100px] z-50">
      <section className="flex items-center justify-between">
        <h1 className="text-white text-xl md:text-3xl italic">
          Joseph&apos;s Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="list-none flex items-center gap-6 text-white font-light">
            <li onClick={handleScrollToProjects} className="cursor-pointer">
              Projects
            </li>
          </ul>
          <Link 
                href="mailto:jhezekiah19@gmail.com"
                >
          <Button className="text-black bg-white rounded-full hover:bg-white/70">
            Contact
          </Button>
          </Link>
        </div>

        {/* Mobile Sheet Menu Trigger */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-white p-0">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-black bg-opacity-90 text-white"
            >
              <SheetTitle className="text-2xl mb-4 italic text-white hidden">
                Joseph&apos;s Portfolio
              </SheetTitle>
              <SheetDescription className="mb-4 hidden">
                Navigate through the sections to learn more about my work,
                studio, and how to get in touch.
              </SheetDescription>
              <div className="p-6">
                <ul className="list-none flex flex-col gap-4 text-white font-light">
                  <li
                    onClick={handleScrollToProjects}
                    className="cursor-pointer"
                  >
                    Projects
                  </li>

                </ul>
                <SheetClose asChild>
                <Link 
                href="mailto:jhezekiah19@gmail.com"
                >
          <Button className="text-black bg-white rounded-full hover:bg-white/70">
            Contact
          </Button>
          </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </nav>
  );
}
