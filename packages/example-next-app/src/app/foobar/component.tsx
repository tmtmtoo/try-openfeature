"use client";

import { useExampleFlag } from "@/feature/client";
import { useActionState, startTransition } from "react";

export const Foobar = (props: { action: () => Promise<string> }) => {
  const flag = useExampleFlag();
  const [state, send] = useActionState(props.action, "initial");
  const handler = () => startTransition(send);

  return (
    <div>
      <p>Flag: {flag.value.toString()}</p>
      <p>State: {state}</p>
      <button onClick={handler}>Send Action</button>
    </div>
  );
};
