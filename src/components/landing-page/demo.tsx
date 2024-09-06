import { Button } from "@/components/ui/button";
import { MessagesSquare, Play } from "lucide-react";

const Demo = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="flex size-12 items-center justify-center rounded-full bg-accent">
              <MessagesSquare className="size-6" />
            </span>
            <h1 className="my-6 text-pretty text-3xl font-bold lg:text-4xl">
              See Our AI in Action
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              Watch our demo video to see how our AI-powered tools can elevate
              your storytelling. Get started with a free trial today!
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                size={"lg"}
              >
                <Play className="mr-2 size-4" />
                Watch Demo
              </Button>
              <Button className="w-full sm:w-auto" size={"lg"}>
                Get Started
              </Button>
            </div>
          </div>
          <img
            src="/ai.jpg"
            alt="placeholder hero"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Demo;
