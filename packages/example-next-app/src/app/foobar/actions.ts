"use server";
import { getExampleFlag } from "@/feature/server";

export const foobar = async () => {
  const flag = await getExampleFlag();
  console.log(`Example feature flag value: ${JSON.stringify(flag)}`);

  return "foobar";
};
