"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { MessagesContainer } from "../components/messages-container";
import { Suspense } from "react";

interface Props {
  projectId: string;
}

export const ProjectView = ({ projectId }: Props) => {
  return (
    <div className="h-screen">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel
          defaultSize={35}
          minSize={350}
          maxSize={700}
          className="flex flex-col min-h-0 min-w-87.5"
        >
          <Suspense fallback={<p>Loading messages...</p>}>
            <MessagesContainer projectId={projectId} />
          </Suspense>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65} minSize={50}>
          PREVIEW
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
