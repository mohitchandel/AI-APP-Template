import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="py-6 sticky top-0 z-50 bg-background">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" className="w-8" alt="logo" />
              <span className="text-xl font-bold">Hermaya</span>
            </div>
            <div className="flex items-center">
              <Link
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="/#home"
              >
                Home
              </Link>
              <Link
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#features"
              >
                Features
              </Link>
              <Link
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#pricing"
              >
                Pricing
              </Link>
              <Link
                className={cn(
                  "text-muted-foreground",
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="/#faq"
              >
                FAQ
              </Link>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant={"outline"}>Log in</Button>
            <Button>Sign up</Button>
            <ThemeToggle />
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" className="w-8" alt="logo" />
              <span className="text-xl font-bold">Hermaya</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img src="/logo.png" className="w-8" alt="logo" />
                      <span className="text-xl font-bold">Hermaya</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  <Link href="#" className="font-semibold">
                    Home
                  </Link>
                  <Link href="#features" className="font-semibold">
                    Features
                  </Link>
                  <Link href="#pricing" className="font-semibold">
                    Pricing
                  </Link>
                  <Link href="#faq" className="font-semibold">
                    FAQ
                  </Link>
                </div>
                <div className="border-t pt-4">
                  <div className="mt-2 flex flex-col gap-3">
                    <Button variant={"outline"}>Log in</Button>
                    <Button>Sign up</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
