"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full mt-3 flex justify-center">
      <nav
        className=" hidden w-[90%] sm:h-[50px] h-full z-10 justify-between items-center sm:rounded-full mx-auto mt-4 px-8
        bg-white/10 backdrop-blur-md sm:flex flex-col sm:flex-row fixed"
      >
        <div className="text-center sm:text-left mb-3 sm:mb-0">logo</div>
        <div>
          <ul className="flex gap-6 flex-col sm:flex-row items-center">
            <Button variant={"ghost"} asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant={"ghost"} asChild>
              <Link href="/">Features</Link>
            </Button>
            <Button variant={"ghost"} asChild>
              <Link href="/">Contact</Link>
            </Button>
          </ul>
        </div>
        <Button className="mt-3 sm:mt-0">Start Quiz</Button>
      </nav>

      {/* MOBILE */}
      <nav className="sm:hidden p-4 mx-4 w-[90%]  bg-white/10 backdrop-blur-md fixed z-10 rounded-lg">
        <Button onClick={() => setOpen(!open)}>{open ? "X" : "☰"}</Button>
        {open && (
          <ul className="flex flex-col gap-4 mt-4">
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
        )}
      </nav>
    </div>
  );
}
