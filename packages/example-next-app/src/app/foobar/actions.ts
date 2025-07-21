"use server";

import { getExampleFlag } from "@/feature/server";

export const foobar = async (): Promise<string> => {
  const flag = await getExampleFlag();
  return flag.toString();
};
