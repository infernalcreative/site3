import type { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  return new Response("Hello from custom path!");
};

export const config: Config = {
  path: "/api/v1/custom",
};

