"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState<null | File>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
    }
  };

  const handleClick = () => {
    const file_upload_input = document.querySelector("#file") as HTMLInputElement;
    file_upload_input.click();
  };

  return (
    <>
      <div className="file-upload-label flex justify-center items-center" onClick={handleClick}>
        <div className="file-upload-design">
          <Image src="/upload.svg" alt="upload" width={50} height={50} sizes="50vw" className="dark:invert" />

          {file ? (
            <p>{file.name}</p>
          ) : (
            <>
              <p>Drag and Drop</p>
              <p>or</p>
              <button type="button" className="btn btn-accent ">
                Browse file
              </button>
            </>
          )}
        </div>
        <input id="file" name="thumbnail" onChange={handleChange} type="file" />
      </div>
    </>
  );
};

export default ImageUpload;
