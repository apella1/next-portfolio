import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto py-8">
      {children}
      <div className="mt-12 border-t pt-8">
        <h3 className="text-xl font-semibold">Enjoying this lab?</h3>
        <p className="text-muted-foreground mt-1">
          Join the waitlist to get two new labs per month delivered to your inbox.
        </p>
        <form className="mt-4 flex gap-2 max-w-md">
          <Input type="email" placeholder="Enter your email" className="flex-1" />
          <Button type="submit">Join Waitlist</Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
