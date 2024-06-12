"use client";

import { useFormStatus } from "react-dom";

export function Button({ text, type }: { text: string; type?: string }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={`btn btn-${type ? type : "success"} w-full`} disabled={pending}>
      {text}
    </button>
  );
}
