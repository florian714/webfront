import {Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter} from "./ui/card";

export function Header() {
    return (
        <Card className="p">
            <CardHeader>
            <CardTitle>SITE DE CITATIONS</CardTitle>
            <CardDescription>Consultez et ajoutez des citations</CardDescription>
            </CardHeader>
        </Card>
    )
}