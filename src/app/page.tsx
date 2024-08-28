"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DownloadIcon,
  PenIcon,
  PlayIcon,
  SquareIcon,
  StopCircle,
  Volume2,
} from "lucide-react";
import { Visualizer } from "@/components/visualizer";

export default function Home() {
  const [selectedVoice, setSelectedVoice] = useState("");
  const [inputText, setInputText] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);

  const voices = ["Morgan", "Zeke", "Amy", "Ava", "Caleb"];

  const handleGenerate = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen  p-4">
      <Card className="mx-auto border-none shadow-none  ">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Text-to-Speech Generator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Voice
              </label>
              <Select onValueChange={setSelectedVoice}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a voice" />
                </SelectTrigger>
                <SelectContent>
                  {voices.map((voice) => (
                    <SelectItem key={voice} value={voice}>
                      {voice}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Text
              </label>
              <Textarea
                placeholder="Type or paste your text here"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={5}
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button onClick={handleGenerate}>
                <Volume2 className="mr-2 h-4 w-4" /> Generate Speech
              </Button>
              <Button onClick={handleGenerate}>
                <PenIcon className="mr-2 h-4 w-4" /> Generate Random Story
              </Button>
            </div>
            <div className="mt-6">
              <div className="bg-black dark:bg-white rounded-lg  items-center justify-center">
                <div className="flex justify-between">
                  <div className="flex justify-start gap-4">
                    {isPlaying ? (
                      <Button
                        variant="main"
                        onClick={() => setIsPlaying(false)}
                        className="mt-5 ml-5 "
                      >
                        <SquareIcon fill="white" className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        variant="main"
                        onClick={() => setIsPlaying(true)}
                        className="mt-5 ml-5"
                      >
                        <PlayIcon fill="white" className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="main" className="mt-5">
                      Download Audio
                      <DownloadIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <p className="m-5 text-main text-2xl text-white font-semibold">
                    {!isPlaying ? "Click Play To Start" : "Playing Your Story"}
                  </p>
                </div>
                <Visualizer isAnimating={isPlaying} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
