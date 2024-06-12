import convertToSlug from "@/utils/convertToSlug";
import { Post } from "@prisma/client";
import { htmlToText } from "html-to-text";
import Image from "next/image";
import Link from "next/link";

const Card = ({ post }: { post: Post }) => {
  return (
    <>
      <Link
        href={`/blog/${convertToSlug(post.title)}`}
        className="card card-compact   bg-[#70707028] dark:bg-[#faf8f91f] backdrop-blur-sm shadow-xl rounded-xl"
      >
        <figure>
          <Image src={post.image} alt={post.title} sizes="50vw" priority={false} height={500} width={500} />
        </figure>
        <div className="card-body">
          <h2 className="card-title dark:text-gray-400 text-gray-700">{post.title}</h2>
          <div className="card-description font-normal tracking-wider dark:text-gray-400 text-gray-700">
            {`${htmlToText(post.content).slice(0, 135)}...`}
          </div>

          <span className="text-blue-500 hover:text-blue-600 hover:underline flex  items-center">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 512 512">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="M184 112l144 144-144 144"
              />
            </svg>
          </span>
        </div>
      </Link>
    </>
  );
};

export default Card;
