import "server-only";
import { OpenFeature } from "@openfeature/server-sdk";
import { exampleFlagConfig } from "./config";
import { ExampleServerProvider } from "example-server-provider";

OpenFeature.setProvider(
  new ExampleServerProvider({
    exampleFlag: exampleFlagConfig,
  })
);

OpenFeature.setLogger(console);

const client = OpenFeature.getClient();

export const getExampleFlag = async () => {
  const flag = await client.getBooleanValue("exampleFlag", false);
  return flag;
};
