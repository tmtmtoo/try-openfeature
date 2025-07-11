"use client";

import {
  OpenFeatureProvider,
  useFlag,
  OpenFeature,
  InMemoryProvider,
} from "@openfeature/react-sdk";
import { exampleFlagConfig } from "./config";

OpenFeature.setProvider(
  new InMemoryProvider({
    exampleFlag: exampleFlagConfig,
  })
);

export { OpenFeatureProvider };

export const useExampleFlag = () => {
  return useFlag("exampleFlag", false);
};
