import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto flex justify-center items-center h-96 bg-green-400">
      <Button asChild>
        <Link href="/quiz">
        Take Quiz
        </Link>
      </Button>
    </div>
  );
}
