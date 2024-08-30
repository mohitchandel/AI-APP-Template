"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, CircleCheck } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="py-32" id="pricing">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="text-pretty text-4xl font-bold lg:text-6xl">
            Pricing
          </h2>
          <p className="text-muted-foreground lg:text-xl">
            Check out our affordable pricing plans
          </p>
          <div className="flex items-center gap-3 text-lg">
            Monthly
            <Switch
              onCheckedChange={() => setIsYearly(!isYearly)}
              checked={isYearly}
            />
            Yearly
          </div>
          <div className="flex flex-col items-stretch gap-6 md:flex-row">
            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Free</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  For personal use
                </p>
                <span className="text-4xl font-bold">$0</span>
                <p className="text-muted-foreground">Free forever</p>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Access to AI Story Generator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Basic Text-to-Speech Voices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>10 Story Credits per Month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Limited Voice Cloning (1 Voice)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Plus</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">For enthusiasts</p>
                <span className="text-4xl font-bold">
                  {isYearly ? "$10" : "$15"}
                </span>
                <p className="text-muted-foreground">
                  Billed {isYearly ? "$120" : "$180"} anually
                </p>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <p className="mb-3 text-lg font-semibold">
                  Everything in Free, and:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>50 Story Credits per Month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Premium Text-to-Speech Voices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Advanced Voice Cloning (Up to 5 Voices)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Access to Premium Templates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex w-80 flex-col justify-between text-left">
              <CardHeader>
                <CardTitle>
                  <p>Pro</p>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  For serious storytellers
                </p>
                <span className="text-4xl font-bold">
                  {isYearly ? "$20" : "$25"}
                </span>
                <p className="text-muted-foreground">
                  Billed {isYearly ? "$240" : "$300"} anually
                </p>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <p className="mb-3 text-lg font-semibold">
                  Everything in Plus, and:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>500 Story Credits per Month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Unlimited Text-to-Speech Voices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Unlimited Voice Cloning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Custom Story Templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleCheck className="size-4" />
                    <span>Early Access to New Features</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
