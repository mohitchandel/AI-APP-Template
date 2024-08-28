"use client";
import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BookIcon,
  LibraryIcon,
  LogOutIcon,
  Menu,
  MicIcon,
  PenIcon,
  Settings2Icon,
  StarIcon,
  UserIcon,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-200 dark:bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      <aside
        className={`
        fixed inset-y-0 left-0 z-10 w-64 p-4 border-r transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:block
        bg-[#f1f5f9] dark:bg-[#111a2d]
      `}
      >
        <div className=" border-b p-8 ">
          <div className="flex flex-col items-center">
            <Avatar className="w-16 h-16 mb-4">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="text-lg font-semibold">Mohit Chandel</p>
              <p className="text-sm text-muted-foreground">Free Plan</p>
              <Button variant="secondary" size="sm" className="mt-2">
                Upgrade
              </Button>
            </div>
          </div>
        </div>

        <nav className="mt-2">
          <div className=" px-8 pb-6 border-b">
            <p className="text-sm font-semibold mt-6">Features</p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-center space-x-2">
                <PenIcon className="w-4 h-4" />
                <a href="#" className="text-muted-foreground">
                  Text to Speech
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MicIcon className="w-4 h-4" />
                <a href="#" className="text-primary">
                  Voice Cloning
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <LibraryIcon className="w-4 h-4" />
                <a href="#" className="text-muted-foreground">
                  Voice Library
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <StarIcon className="w-4 h-4" />
                <a href="#" className="text-muted-foreground">
                  Hall Of Fame
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <BookIcon className="w-4 h-4" />
                <a href="#" className="text-muted-foreground">
                  Generate Story
                </a>
              </li>
            </ul>

            <p className="text-sm font-semibold mt-6">General</p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-center space-x-2">
                <UserIcon className="w-4 h-4" />
                <a href="#" className="text-muted-foreground">
                  Profile
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Settings2Icon className="w-4 h-4" />
                <a href="#" className="text-muted-foreground">
                  Settings
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <LogOutIcon className="w-4 h-4" />
                <a href="#" className="text-muted-foreground">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 p-8">Only 25 Credits Left</div>
        </nav>
      </aside>
    </>
  );
}
function ClipboardIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}
