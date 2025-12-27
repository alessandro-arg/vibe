import { Sandbox } from "@e2b/code-interpreter";

import { openai, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("vibe-nextjs-alessandro-16");
      return sandbox.sandboxId;
    });

    const codeAgent = createAgent({
      model: openai({ model: "gpt-4o" }),
      name: "code-agent",
      system:
        "You are an expert Next.js developer. You write readable, maintainable code. You write simple Next.js & React snippets.",
    });

    const { output } = await codeAgent.run(
      `Write the following snippet: : ${event.data.value}`
    );
    console.log(output);

    return { output };
  }
);
