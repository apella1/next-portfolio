import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomeHeader = () => {
  return (
    <header className="flex flex-col px-4 py-12 md:py-24 lg:py-32 sm:px-16 xl:px-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Let’s Build, Together
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join a growing circle of builders who learn through doing. Two
              hands-on labs each month. Focused and practical.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-lg flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
