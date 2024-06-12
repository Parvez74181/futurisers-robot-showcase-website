import BlockNoteTextEditor from "@/components/BlockNoteTextEditor";
import { Button } from "@/components/Button";
import ImageUpload from "@/components/ImageUpload";

const page = () => {
  async function createBlog(formData: FormData) {
    "use server";
    const response = await fetch(`${process.env.URL}/api/create-blog`, { method: "POST", body: formData });
    const result = await response.text();
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <h2 className="font-medium tracking-wider text-3xl h2-title">Create A New Blog</h2>
      </div>

      <form action={createBlog} className="w-full max-w-2xl mx-auto my-16">
        <ImageUpload />
        {/* blog title */}
        <div className="form-control w-full ">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            placeholder="Blog title"
            name="title"
            className="input input-bordered w-full  bg-transparent"
          />
        </div>
        {/* blog description */}
        <div className="form-control w-full ">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <BlockNoteTextEditor />
        </div>
        <Button text="Upload" />
      </form>
    </>
  );
};

export default page;
