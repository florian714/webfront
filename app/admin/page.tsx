import {Input} from "@/components/ui/input";
import {Button, buttonVariants} from "@/components/ui/button";
import {Header} from "@/components/header";
import {Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import Link from "next/link";

export default async function Page() {
    await new Promise((r)=> setTimeout(r, 500));
    return (
        <div className="center-container">
        <Card className="center-item"> 
        <CardHeader>
          <CardTitle>Admin</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Link href="/admin/citations/kevin" className={buttonVariants({size:"lg", variant:"outline"})}>
          Citation kevin
          </Link>
          <Link href="/admin/citations/manu" className={buttonVariants({size:"lg", variant:"outline"})}>
          Citation Manu
          </Link>
          <Link href="/admin/citations/arnault" className={buttonVariants({size:"lg", variant:"outline"})}>
          Citation Arnault
          </Link>
        </CardContent>
      </Card>
      <Link href="./" className={buttonVariants({size:"lg", variant:"outline"})}>Menu</Link>
      <Link href="/admin/citations/new" className={buttonVariants({size:"lg", variant:"outline"})}>New</Link>
        </div>
        
    );
}