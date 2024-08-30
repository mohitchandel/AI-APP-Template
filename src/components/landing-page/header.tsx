"use client";

import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Hero = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#282c35");
  }, [theme]);

  return (
    <section id="home" className="relative overflow-hidden py-32">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        size={2}
        refresh
      />
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-6 text-center">
            <img src="/logo.png" alt="logo" className="h-16" />
            <Badge>Hermaya</Badge>
            <div>
              <h1 className="mb-6 text-2xl font-bold lg:text-6xl py-2 overflow-visible">
                Unleash Your Imagination with{" "}
                <span className="bg-gradient-to-r from-[#e03cbf] via-[#bb81eb] to-[#bd15e6] inline-block text-transparent bg-clip-text py-2">
                  AI Powered Storytelling
                </span>
              </h1>
              <p className="text-muted-foreground lg:text-xl">
                Create captivating stories in seconds with our AI story
                generator. Transform your ideas into text, hear them with
                text-to-speech, and even bring characters to life with voice
                cloning!
              </p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Button>Get Started</Button>
              <Button variant="outline">
                Learn more <ExternalLink className="ml-2 h-4" />
              </Button>
            </div>
            <div className="mt-20 flex flex-col items-center gap-4">
              <p className="text-center: text-muted-foreground lg:text-left">
                Powered By
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3"
                  )}
                >
                  <img
                    src="/power-by-icons/hugging-face.svg"
                    alt="huggingFace logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3"
                  )}
                >
                  <img
                    src="/power-by-icons/stability-ai.svg"
                    alt="vercel logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100 dark:fill-white"
                  />
                </a>

                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3"
                  )}
                >
                  <img
                    src="https://www.shadcnblocks.com/images/block/logos/react-icon.svg"
                    alt="company logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3"
                  )}
                >
                  <img
                    src="https://www.shadcnblocks.com/images/block/logos/tailwind-small.svg"
                    alt="company logo"
                    className="h-4 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
