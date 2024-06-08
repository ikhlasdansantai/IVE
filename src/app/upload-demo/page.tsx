"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function UploadPageDemo() {
  const [file, setFile] = useState<any | undefined>(undefined);
  const [fileUrl, setFileUrl] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);

    if (fileUrl) URL.revokeObjectURL(fileUrl);
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    } else setFileUrl(undefined);
  };

  return (
    <section className="mx-auto mt-40 min-h-[100dvh] max-w-7xl">
      <h2 className="mb-4">fitur Upload File 👷‍♀️</h2>
      <Input
        onChange={handleChange}
        type="file"
        name="media"
        accept="image/*"
        placeholder="Upload"
      />

      {file && fileUrl && (
        <>
          <h5>Image Preview</h5>
          <figure className="w-60">
            <img
              src={fileUrl}
              alt={file.name}
              className="block max-w-full object-cover"
            />
          </figure>
          <Button
            className="mt-4"
            variant={"outline"}
            onClick={() => {
              setFile(undefined);
              setFileUrl(undefined);
            }}
          >
            Remove
          </Button>
        </>
      )}
    </section>
  );
}
