"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full mt-3 flex justify-center fixed z-10 bg-white/10 backdrop-blur-md">
      <div className="w-[90%] mx-auto px-8 flex items-center justify-between sm:h-[50px] sm:rounded-full">
        <div
          className={`${open ? "hidden" : ""} text-center sm:text-left sm:flex`}
        >
          logo
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {open ? "X" : "☰"}
        </button>
        <div
          className={`${
            open ? "block" : "hidden"
          } w-full sm:flex sm:items-center sm:w-auto`}
        >
          <ul className="flex flex-col sm:flex-row sm:gap-6 items-center">
            <Button variant={"ghost"} asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant={"ghost"} asChild>
              <Link href="/">Features</Link>
            </Button>
            <Button variant={"ghost"} asChild>
              <Link href="/">Contact</Link>
            </Button>
            <Button>Start Quiz</Button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
