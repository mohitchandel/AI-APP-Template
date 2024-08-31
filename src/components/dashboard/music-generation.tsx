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
import { DownloadIcon, MusicIcon, PauseIcon, PlayIcon } from "lucide-react";
import { Visualizer } from "@/components/dashboard/visualizer";

export const MusicGeneration = () => {
  const [selectedVoice, setSelectedVoice] = useState("");
  const [inputText, setInputText] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);

  const voices = ["Morgan", "Zeke", "Amy", "Ava", "Caleb"];

  const handleGenerate = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Card className="mx-auto border-none shadow-none  ">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Generate Music</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mt-6">
            <div className="border border-2 rounded-lg  items-center justify-center">
              <div className="flex justify-between">
                <div className="flex justify-start gap-4">
                  {isPlaying ? (
                    <Button
                      onClick={() => setIsPlaying(false)}
                      className="mt-5 ml-5 "
                    >
                      <PauseIcon className="fill-white dark:fill-slate-900 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setIsPlaying(true)}
                      className="mt-5 ml-5"
                    >
                      <PlayIcon className="fill-white dark:fill-slate-900 h-4 w-4" />
                    </Button>
                  )}
                  <Button className="mt-5">
                    Download Audio
                    <DownloadIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <p className="m-5 text-2xl font-semibold">
                  {!isPlaying ? "Click Play To Start" : "Playing Your Music"}
                </p>
              </div>
              <Visualizer isAnimating={isPlaying} />
            </div>
          </div>
          <div className="space-y-6 mt-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Enter Prompt
              </label>
              <Textarea
                placeholder="Ancient European music with flute and bagpipers."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={5}
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button onClick={handleGenerate}>
                <MusicIcon className="mr-2 h-4 w-4" /> Generate Music
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
