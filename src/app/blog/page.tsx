import Image from "next/image";
import Link from "next/link";
import styles from "@/css/blog.module.scss";
import Card from "@/components/Card";

const page = () => {
  return (
    <>
      <main className="-mt-[65px]">
        <section className="hero-section md:block hidden ">
          <div className="container pt-24  mx-auto flex justify-center items-center ">
            <div className="flex container w-[90%] mx-auto md:w-auto flex-col md:flex-row gap-2 md:gap-2 justify-center items-center">
              {/* 1st col */}
              <div className="w-full h-full  md:w-[22rem] md:h-[20.5rem] lg:w-[28rem] lg:h-[26.5rem] xl:w-[32rem] xl:h-[36.5rem]  row-span-2 ">
                <Link href="" className={`${styles["hero-section-blog-card"]} card  w-full h-full image-full `}>
                  <figure>
                    <Image
                      src="/obstacle.jpg"
                      height={500}
                      width={500}
                      className="w-full h-full overflow-hidden"
                      alt="obstacle"
                    />
                  </figure>

                  <h2
                    className={`${styles["blog-card-title"]} text-base lg:font-semibold tracking-wide font-medium lg:text-lg  text-gray-50`}
                  >
                    Obstacle Avoiding Robot
                  </h2>
                </Link>
              </div>
              {/* 2nd col */}
              <div className="flex gap-2 md:gap-2 flex-row md:flex-col w-full md:w-auto">
                <div className="w-full h-full md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-72 xl:h-72  ">
                  <Link href="" className={`${styles["hero-section-blog-card"]} card  w-full h-full image-full `}>
                    <figure>
                      <Image
                        src="/line.jpg"
                        height={500}
                        width={500}
                        className="w-full h-full overflow-hidden"
                        alt="line"
                      />
                    </figure>

                    <h2
                      className={`${styles["blog-card-title"]} text-base lg:font-semibold tracking-wide font-medium lg:text-lg  text-gray-50`}
                    >
                      Line Following Robot
                    </h2>
                  </Link>
                </div>
                <div className="w-full h-full md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-72 xl:h-72  ">
                  <Link href="" className={`${styles["hero-section-blog-card"]} card  w-full h-full image-full `}>
                    <figure>
                      <Image
                        src="/self.jpg"
                        height={500}
                        width={500}
                        className="w-full h-full overflow-hidden"
                        alt="self"
                      />
                    </figure>

                    <h2
                      className={`${styles["blog-card-title"]} text-base lg:font-semibold tracking-wide font-medium lg:text-lg  text-gray-50`}
                    >
                      Self Driving Robot Car
                    </h2>
                  </Link>
                </div>
              </div>
              {/* 3rd col */}
              <div className="flex gap-2 md:gap-2 flex-row md:flex-col w-full md:w-auto">
                <div className="w-full h-full md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-72 xl:h-72  ">
                  <Link href="" className={`${styles["hero-section-blog-card"]} card  w-full h-full image-full `}>
                    <figure>
                      <Image
                        src="/bluetooth.jpg"
                        height={500}
                        width={500}
                        className="w-full h-full overflow-hidden"
                        alt="bluetooth"
                      />
                    </figure>

                    <h2
                      className={`${styles["blog-card-title"]} text-base lg:font-semibold tracking-wide font-medium lg:text-lg  text-gray-50`}
                    >
                      SmartPhone Controlled Arduino Based Bluetooth Car
                    </h2>
                  </Link>
                </div>
                <div className="w-full h-full md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-72 xl:h-72  ">
                  <Link href="" className={`${styles["hero-section-blog-card"]} card  w-full h-full image-full `}>
                    <figure>
                      <Image
                        src="/soil.jpg"
                        height={500}
                        width={500}
                        className="w-full h-full overflow-hidden"
                        alt="soil"
                      />
                    </figure>

                    <div className=" overflow-hidden h-[100px]">
                      <h2
                        className={`${styles["blog-card-title"]} text-base lg:font-semibold tracking-wide font-medium lg:text-lg  text-gray-50`}
                      >
                        Automated Plant Watering Pump Using Arduino
                      </h2>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="my-5 pt-16 container w-[90%] mx-auto main-blogs-card">
          <h2 className="h2-title mb-8 text-3xl lg:text-5xl" id="team-members">
            Latest Blogs
          </h2>
          <div className="w-full grid grid-cols-1 gap-5 md:gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {Array.from({ length: 25 }).map((_, i) => (
              <Card key={i} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
