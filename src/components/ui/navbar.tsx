import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full  mt-3  fixed">
      <nav
        className=" flex w-[90%] h-[50px] z-10  justify-between items-center rounded-full
       mx-auto mt-4 px-8
        bg-white/10 backdrop-blur-md"
      >
        <div>logo</div>
        <div>
          <ul className="flex gap-6">
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
        <Button>Start Quiz</Button>
      </nav>
    </div>
  );
}
