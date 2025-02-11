'use client'
import { Thread } from "@/components/assistant-ui/thread";
import { useChatRuntime } from "@assistant-ui/react-ai-sdk";
import { AssistantRuntimeProvider } from "@assistant-ui/react";

export default function Home() {
  const runtime = useChatRuntime({ api: "/api/chat" });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <main className="h-dvh">
        <Thread />
      </main>
    </AssistantRuntimeProvider>
  );
}
