"use client";
import React, { useState, useRef, ChangeEvent } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Mic, StopCircle } from "lucide-react";

export const VoiceCloning = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const audioChunks: Blob[] = [];

      mediaRecorder.addEventListener("dataavailable", (event: BlobEvent) => {
        audioChunks.push(event.data);
      });

      mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        setRecordedBlob(audioBlob);
      });

      mediaRecorder.start();
      setIsRecording(true);
    });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <>
      <Card className="mx-auto border-none shadow-none  ">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Create a voice</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="record">
            <TabsList>
              <TabsTrigger value="record">Record</TabsTrigger>
              <TabsTrigger value="upload">Upload</TabsTrigger>
            </TabsList>

            <TabsContent value="record" className="pt-4">
              <Card>
                <CardContent className="flex items-center justify-center h-32">
                  {!isRecording ? (
                    <Button onClick={startRecording}>
                      <Mic className="mr-2 h-4 w-4" /> Start Recording
                    </Button>
                  ) : (
                    <Button onClick={stopRecording} variant="destructive">
                      <StopCircle className="mr-2 h-4 w-4" /> Stop Recording
                    </Button>
                  )}
                </CardContent>
              </Card>
              {recordedBlob && (
                <div className="mt-4">
                  <audio src={URL.createObjectURL(recordedBlob)} controls />
                </div>
              )}
            </TabsContent>

            <TabsContent value="upload" className="pt-4">
              <Card>
                <CardContent
                  className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="text-center">
                    <Upload className="mx-auto mb-2" />
                    <span>
                      {uploadedFile
                        ? uploadedFile.name
                        : "Upload audio files..."}
                    </span>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="audio/*"
                      className="hidden"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <p className="text-sm text-gray-500 my-4">
            Five minutes of audio will make a professional voice.
          </p>

          <div className="space-y-4 my-4">
            <Input placeholder="Name" />
          </div>

          <Button className="w-full">Create Instant Voice</Button>
        </CardContent>
      </Card>
    </>
  );
};
