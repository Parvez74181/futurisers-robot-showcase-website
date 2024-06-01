import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <>
      <Link
        href=""
        className="card card-compact  bg-[#70707028] dark:bg-[#faf8f91f] backdrop-blur-sm shadow-xl rounded-xl"
      >
        <figure>
          <Image src="/bluetooth.jpg" alt="Shoes" height={500} width={500} />
        </figure>
        <div className="card-body">
          <h2 className="card-title dark:text-gray-400 text-gray-700">
            SmartPhone Controlled Arduino Based Bluetooth Car
          </h2>
          <p className="card-description font-normal tracking-wider dark:text-gray-400 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vero, a rem debitis libero magnam expedita
            fugit doloremque natus quod cumque necessitatibus beatae, ipsa veritatis. Placeat explicabo facere, possimus
            aperiam dolor corporis cum assumenda aliquid ullam! Voluptas voluptatum eveniet inventore ullam quaerat
            aliquid, voluptatibus porro magni qui numquam, molestias nam!
          </p>

          <span className="text-blue-500 hover:text-blue-600 hover:underline flex  items-center">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 512 512">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
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
