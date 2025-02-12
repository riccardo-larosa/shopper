'use client'
import { Thread } from "@/components/assistant-ui/thread";
// import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { PriceSnapshotTool } from "@/components/tools/price-snapshot/PriceSnapshotTool";
// import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { makeMarkdownText } from "@assistant-ui/react-markdown";

const MarkdownText = makeMarkdownText({});

export default function Home() {
  // const runtime = useChatRuntime({ api: "/api/chat" });

  return (
    <main className="h-full">
      <Thread 
        welcome={{
          suggestions: [
            {
              prompt: "How much revenue did Apple make last year?",
            },
            {
              prompt: "Is McDonald's profitable?",
            },
            {
              prompt: "What's the current stock price of Tesla?",
            },
          ],
        }}
        assistantMessage={{ components: { Text: MarkdownText } }} 
        tools={[PriceSnapshotTool]}
      />
    </main>
  );
}
