import { Card, CardHeader, CardTitle } from "@/components/ui/card";

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
        <Card className="flex">
            <CardHeader className="flex">
                <CardTitle>{JSON.stringify(params.citationId, null, 2)}</CardTitle>
                <CardTitle>{JSON.stringify(searchParams, null, 2)}</CardTitle>
            </CardHeader>
        </Card>
    )
}