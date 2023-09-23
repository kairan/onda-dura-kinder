import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <SignOutButton>
            <Button variant="destructive">Sign out</Button>
          </SignOutButton>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
          <Link
            className={buttonVariants({ variant: "secondary" })}
            href={"/signin"}
          >
            Sign In
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
