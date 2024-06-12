"use client";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCallback, useEffect, useState } from "react";

// Uploads a file to tmpfiles.org and returns the URL to the uploaded file.
async function uploadFile(file: File) {
  const [isClient, setIsClient] = useState(false);
  const body = new FormData();
  body.append("file", file);

  const ret = await fetch("https://tmpfiles.org/api/v1/upload", {
    method: "POST",
    body: body,
  });
  return (await ret.json()).data.url.replace("tmpfiles.org/", "tmpfiles.org/dl/");
}

export default function BlockNoteTextEditor() {
  const [html, setHTML] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  // Creates a new editor instance.
  const editor = useCreateBlockNote({ uploadFile });

  const onChange = useCallback(async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);
    setHTML(html);
  }, [editor]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }
  // enders the editor instance using a React component.
  return (
    <>
      <BlockNoteView editor={editor} onChange={onChange} id="blockNoteTextEditor" />

      <textarea name="content" id="content" className="bg-transparent dark:text-white" value={html} />
    </>
  );
}
