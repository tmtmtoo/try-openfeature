import "server-only";
import { InMemoryProvider, OpenFeature } from "@openfeature/server-sdk";
import { exampleFlagConfig } from "./config";

OpenFeature.setProvider(
  new InMemoryProvider({
    exampleFlag: exampleFlagConfig,
  })
);

const client = OpenFeature.getClient();

export const getExampleFlag = async () => {
  const flag = await client.getBooleanValue("exampleFlag", false);
  return flag;
};
