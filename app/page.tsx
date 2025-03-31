import {Button, buttonVariants} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";
export default function Home() {
  return (
    <div className="center-container">
      <div className="center-item">
        <Input type="text" placeholder="Enter text"></Input>
        <Link href="/admin" className={buttonVariants({ size :"lg", variant: "outline"})}>Admin</Link>
      </div>
</div>
  );
}
