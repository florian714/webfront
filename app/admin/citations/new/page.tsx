import Form from "next/form";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
export default function Page(){
    return (

        <Card>
            <CardHeader>
                <CardTitle>Create Citation</CardTitle>
            </CardHeader>
            <CardContent>
            <Form  className="flex flex-col gap-4" action={async ()=>{
            "use server";
        }}>
            <Label>
                Citation
                <Input/>
            </Label>
            <Label>
                Author
                <Input/>
            </Label>
            <Button type="submit">Submit</Button>
        </Form>
            </CardContent>
        </Card>

    )
}