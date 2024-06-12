"use client";

import { useRef, useState } from "react";
import Select from "react-select";
import Head from "next/head";
import Image from "next/image";

const Editor: React.FC = () => {
  const [textEditor, setTextEditor] = useState("");
  const textEditorRef = useRef(null);

  // this function stores all the formatting html and text so that we can use the data with all the formatting that we have done
  // const outputText = () => {
  //   const textEditor = textEditorRef.current.innerHTML;
  //   const dummyTextEditor = document.querySelector(".text-editor-output");
  //   dummyTextEditor.value = textEditor;
  // };
  const format = (command: string, value: string | null = null) => {
    document.execCommand(command, false, value!);
    // outputText();
  };

  // insert headings to text editor
  const formatHeading = () => {
    const heading = document.getElementById("heading") as HTMLSelectElement;
    if (heading.value) {
      format("formatBlock", heading.value);
    }
  };

  // insert font size to text editor
  const formatFontSize = () => {
    const size = document.getElementById("fontSize") as HTMLSelectElement;

    if (size.value) {
      format("fontSize", size.value);
    }
  };

  // insert link to text editor
  const insertLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      format("createLink", url);
    }
  };

  // insert image to text editor
  const insertImage = () => {
    let url = prompt("Enter the URL of the image: ");
    const title = prompt("Enter the image alt text: ");

    if (url) {
      if (url.includes("drive.google.com")) {
        url = url.split("/")[5];
        format(
          "insertHTML",
          `<img src="https://drive.google.com/uc?export=view&id=${url}" loading='lazy' alt='${title}'/>`
        );
      } else {
        format("insertHTML", `<img src="${url}" loading='lazy' alt='${title}'/>`);
      }
    }
  };

  // quote
  const quote = () => {
    let txt = prompt("Enter the text: ");
    let cite = prompt("Enter the cite url: ");
    if (txt) {
      format(
        "insertHTML",
        `<blockquote cite='${cite}' class='bg-red-50 border-l-4 border-l-red-500 p-2'>${txt}</blockquote>`
      );
    }
  };

  // youtubeVideo
  const youtubeVideo = () => {
    let url = prompt("Enter the url: ");

    if (url) {
      format("insertHTML", url);
    }
  };

  // font color
  const chooseForeColor = () => {
    let foreColorInput = document.querySelector("#foreColor") as HTMLInputElement;
    foreColorInput.click();

    foreColorInput.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      format("foreColor", target.value);
    });
  };

  // background color
  const chooseBackColor = () => {
    let backColorInput = document.querySelector("#backColor") as HTMLInputElement;
    backColorInput.click();

    backColorInput.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      format("backColor", target.value);
    });
  };

  // insertTable
  const insertTable = () => {
    const rows = prompt("Enter the number of rows:");
    const columns = prompt("Enter the number of columns:");

    if (rows && columns) {
      let tableHTML = "<table class='w-full text-left text-gray-700 p-3 my-2'>";
      for (let i = 0; i < parseInt(rows); i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < parseInt(columns); j++) {
          tableHTML += "<td contenteditable='true' class='px-4 py-2'></td>";
        }
        tableHTML += "</tr>";
      }
      tableHTML += "</table>";

      format("insertHTML", tableHTML);
    }
  };

  // table of content
  const tableOfContent = () => {
    const textEditor = document.querySelector(".text-box") as HTMLDivElement;
    // Get all heading elements
    const headings = textEditor.querySelectorAll("h1, h2, h3, h4, h5, h6");

    let listHtml = "";

    // Iterate over each heading
    headings.forEach((heading, i) => {
      // Generate a unique ID for the heading if it doesn't have one
      if (!heading.id) heading.id = "heading" + (i + 1);

      // Create a list item with a link to the heading
      listHtml += `
        <li>
            <a href='#${heading.id}' class='flex items-center gap-3 ' >   
              ${heading.textContent}
            </a>
        </li>
      `;
    });

    // Insert the headingList at the beginning of the text editor
    format(
      "insertHTML",
      `<div style='background-color:rgb(239 246 255);' class='bg-blue-50 inline-block p-3 rounded shadow-slate-100' >
          <h3 class='text-center font-semibold'>Table of Contents:</h3>
          <ol id='table-of-content' class='list-none'>${listHtml}</ol>
      </div>`
    );
  };

  const handleInput = (e: any) => {
    const target = e.target as HTMLDivElement;
    setTextEditor(target.innerHTML);
  };
  return (
    <>
      <div className="editor" style={{ width: "100%" }}>
        {/* tools */}
        <div className="tools mb-10 flex flex-wrap gap-5 md:gap-7 sticky top-24 bg-white shadow-md p-5 rounded-md">
          <button
            title="bold"
            className="fa-solid fa-bold cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("bold");
            }}
          >
            <Image src="/bold.svg" alt="bold" width={50} height={50} />
          </button>

          {/* <button
            title="add button"
            className="fa-solid fa-toggle-on cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              const buttonTxt = prompt("Enter button text: ");
              format(
                "insertHTML",
                `<button style='background-color:rgb(250 204 21);' class="p-2 px-5 rounded-full outline-none flex justify-center items-center shadow-lg bg-yellow-400 hover:bg-yellow-300 transition-all delay-75" style='min-width:100px;'>${buttonTxt}</button>`
              );
            }}
          >
            <Image src="/bold.svg" alt="bold" width={50} height={50} />
          </button> */}

          <button
            title="italic"
            className="fa-solid fa-italic cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("italic");
            }}
          >
            <Image src="/italic.svg" alt="italic" width={50} height={50} />
          </button>

          <button
            title="underline"
            className="fa-solid fa-underline cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("underline");
            }}
          >
            <Image src="/underline.svg" alt="underline" width={50} height={50} />
          </button>

          <button
            title="quote"
            className="fa-solid fa-quote-left cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={quote}
          >
            <Image src="/quote.svg" alt="quote" width={50} height={50} />
          </button>

          <button
            title="embed youtube video"
            className="fa-brands fa-youtube cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={youtubeVideo}
          >
            <Image src="/yt.svg" alt="yt" width={50} height={50} />
          </button>

          <button
            title="indent"
            className="fa-solid fa-indent cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("indent");
            }}
          >
            <Image src="/indent.svg" alt="indent" width={50} height={50} />
          </button>

          <button
            title="insert table"
            className="fa-solid fa-table cursor-pointer border border-gray-700 p-2 px-4 rounded-md w-12 flex justify-center items-center bg-white"
            onClick={insertTable}
          >
            <Image src="/table.svg" alt="table" width={50} height={50} />
          </button>

          <button
            title="link"
            className="fa-solid fa-link cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={insertLink}
          >
            <Image src="/link.svg" alt="link" width={50} height={50} />
          </button>
          <button
            title="image"
            className="fa-solid fa-image cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={insertImage}
          >
            <Image src="/img.svg" alt="img" width={50} height={50} />
          </button>

          {/* unorder list */}
          <button
            title="unorder list"
            className="fa-solid fa-list cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("insertUnorderedList");
            }}
          >
            <Image src="/ul.svg" alt="ul" width={50} height={50} />
          </button>

          {/* order list */}
          <button
            title="order list"
            className="fa-solid fa-list-ol cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("insertOrderedList");
            }}
          >
            <Image src="/ol.svg" alt="ol" width={50} height={50} />
          </button>

          {/* justify left */}
          <button
            title="justifyLeft"
            className="fa-solid fa-align-left cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("justifyLeft");
            }}
          >
            <Image src="/left.svg" alt="left" width={50} height={50} />
          </button>

          {/* justify center */}
          <button
            title="justifyCenter"
            className="fa-solid fa-align-center cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("justifyCenter");
            }}
          >
            <Image src="/center.svg" alt="center" width={50} height={50} />
          </button>

          {/* justify right */}
          <button
            title="justifyRight"
            className="fa-solid fa-align-right cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("justifyRight");
            }}
          >
            <Image src="/right.svg" alt="right" width={50} height={50} />
          </button>

          {/* justify all */}
          <button
            title="justifyFull"
            className="fa-solid fa-align-justify cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("justifyFull");
            }}
          >
            <Image src="/fill.svg" alt="fill" width={50} height={50} />
          </button>

          {/* table of content */}
          <button
            title="table of content"
            className="fa-solid fa-table-list cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={tableOfContent}
          >
            <Image src="/table-of-content.svg" alt="table-of-content" width={50} height={50} />
          </button>

          {/* undo button */}
          <button
            title="undo"
            className="fa-solid fa-rotate-left cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("undo");
            }}
          >
            <Image src="/undo.svg" alt="undo" width={50} height={50} />
          </button>

          {/* redo button */}
          <button
            title="redo"
            className="fa-solid fa-rotate-right cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("redo");
            }}
          >
            <Image src="/redo.svg" alt="redo" width={50} height={50} />
          </button>

          {/* subscript button */}
          <button
            title="subscript"
            className="fa-solid fa-subscript cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("subscript");
            }}
          >
            <Image src="/sub.svg" alt="sub" width={50} height={50} />
          </button>

          {/* superscript button */}
          <button
            title="superscript"
            className="fa-solid fa-superscript cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("superscript");
            }}
          >
            <Image src="/sup.svg" alt="sup" width={50} height={50} />
          </button>

          {/* <!-- font Color --> */}
          <button
            title="color"
            className="fa-solid fa-droplet cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={chooseForeColor}
          >
            <Image src="/fc.svg" alt="fc" width={50} height={50} />
          </button>
          <input type="color" id="foreColor" className="hidden" />

          {/* backColor color */}
          <button
            title="background"
            className="fa-solid fa-fill cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={chooseBackColor}
          >
            <Image src="/bgc.svg" alt="bgc" width={50} height={50} />
          </button>
          <input type="color" id="backColor" className="hidden" />

          {/* remove all formate */}
          <button
            title="remove all formatting"
            className="fa-solid fa-eraser cursor-pointer border border-gray-700  p-1 px-3 rounded-md w-12 flex justify-center items-center bg-white "
            onClick={() => {
              format("removeFormat");
            }}
          >
            <Image src="/bin.svg" alt="bin" width={50} height={50} />
          </button>

          {/* font-size */}
          <select
            title="font size"
            id="fontSize"
            className="cursor-pointer border  bg-white text-black  p-2 px-4 rounded-md w-26 flex justify-center items-center "
            onChange={formatFontSize}
          >
            <option value="">Size</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>

          {/* headings */}
          <select
            title="heading"
            id="heading"
            className="cursor-pointer border  bg-white text-black  p-2 px-4 rounded-md w-26 flex justify-center items-center "
            onChange={formatHeading}
          >
            <option value="">Heading</option>
            {/* <option value="h1">H1</option> */}
            <option value="h2">H2</option>
            <option value="h3">H3</option>
            <option value="h4">H4</option>
            <option value="h5">H5</option>
            <option value="h6">H6</option>
          </select>
        </div>

        {/* text-editor */}
        <div className="text-editor w-full h-full">
          <div
            ref={textEditorRef}
            className="text-box text-black border bg-gray-200 border-gray-700 0 rounded-md w-full h-full p-4  mt-10 resize-y"
            contentEditable={true}
            onInput={handleInput}
          ></div>
        </div>

        <textarea
          name="desc"
          id="desc"
          className="mt-5 w-full h-20 text-editor-output p-3 bg-transparent border border-gray-600 resize "
          value={textEditor}
        ></textarea>
      </div>
    </>
  );
};

export default Editor;
