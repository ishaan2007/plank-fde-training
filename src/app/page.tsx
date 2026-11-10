import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Card</CardTitle>
          <CardDescription>Shown when this page loads.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card is part of the first render of the home page.</p>
        </CardContent>
      </Card>
    </main>
  );
}
