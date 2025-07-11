"use client";

import { useActionState, startTransition } from "react";

export const Foobar = (props: { action: () => Promise<string> }) => {
  const [state, send] = useActionState(props.action, "initial");
  const handler = () => startTransition(send);

  return (
    <div>
      <p>State: {state}</p>
      <button onClick={handler}>Send Action</button>
    </div>
  );
};
