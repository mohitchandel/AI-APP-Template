"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const getAIResponse = async (message: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `AI response to: "${message}"`;
};

export const StoryGeneratorChat: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<
    Array<{ role: "user" | "ai"; content: string }>
  >([]);
  const [userMessage, setUserMessage] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    setIsProcessing(true);
    const isFirstMessage = chatHistory.length === 0;
    const messageContent = isFirstMessage
      ? `Generate a story about: ${userMessage}`
      : userMessage;
    setChatHistory((prev) => [
      ...prev,
      { role: "user", content: messageContent },
    ]);
    setUserMessage("");

    try {
      const aiResponse = await getAIResponse(messageContent);
      setChatHistory((prev) => [...prev, { role: "ai", content: aiResponse }]);
    } catch (error) {
      console.error("Failed to get AI response:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="mx-auto border-none shadow-none  ">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Generate Music</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>
                {chatHistory.length === 0
                  ? "Enter Your Story Prompt"
                  : "Chat with AI"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] mb-4">
                {chatHistory.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${
                      message.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <span
                      className={`inline-block p-2 rounded-lg ${
                        message.role === "user" ? "bg-blue-100" : "bg-gray-100"
                      }`}
                    >
                      {message.content}
                    </span>
                  </div>
                ))}
              </ScrollArea>
              <div className="flex space-x-2">
                <Input
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder={
                    chatHistory.length === 0
                      ? "Enter your story prompt..."
                      : "Type your message..."
                  }
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button onClick={sendMessage} disabled={isProcessing}>
                  {isProcessing
                    ? "Processing..."
                    : chatHistory.length === 0
                    ? "Generate"
                    : "Send"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};
