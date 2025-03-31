import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export default async function Page(props: {
    params: Promise<{
        citationId: string;
    }>;
    searchParams: Promise<Record<string, string | string[]>>;
}) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    console.log(params);
    return(
        <div className="center-container">
        <Card className="center-item">
            <CardHeader className="flex">
                <CardTitle>{JSON.stringify(params.citationId, null, 2)}</CardTitle>
                <CardTitle>{JSON.stringify(searchParams, null, 2)}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <p>Le temps passe mais pas le caca reste</p>
            </CardContent>

        </Card>
        <Link href="/admin" className={buttonVariants({size:"lg", variant:"outline"})}>New</Link>
        </div>

    )
}