import { inngest } from "./client.js";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "app/hello" },
  async ({ event }) => {
    console.log("INGGEST FUNCTION TRIGGERED!");
    console.log("Event data:", event.data);

    return { message: "Hello from Inngest!" };
  }
);
