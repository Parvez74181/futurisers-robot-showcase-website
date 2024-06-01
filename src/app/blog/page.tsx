import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <main className="-mt-[65px]">
        <section className="hero-section  min-h-screen">
          <div className="container pt-24  mx-auto flex justify-center items-center ">
            <div className="flex w-[90%] mx-auto md:w-auto flex-col md:flex-row gap-2 md:gap-5  justify-content-center items-center">
              {/* 1st col */}
              <div className="w-full h-full  md:w-[20rem] md:h-[21rem] lg:w-[26rem] lg:h-[27rem] xl:w-[30rem] xl:h-[37rem]  row-span-2 ">
                <Link href="" className="card w-full h-full image-full ">
                  <figure>
                    <Image
                      src="/bluetooth.jpg"
                      height={500}
                      width={500}
                      className="w-full h-full overflow-hidden"
                      alt="Shoes"
                    />
                  </figure>

                  <div className="card-body p-5  justify-end ">
                    <h2 className="card-title text-gray-50">Shoes!</h2>
                    <p className="text-gray-50 card-description-short max-h-[100px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas quam facilis nostrum
                      omnis provident fugiat voluptatum alias sint suscipit, consectetur voluptatibus ab voluptatem
                      doloremque corrupti odio ratione, natus ex.
                    </p>
                  </div>
                </Link>
              </div>
              {/* 2nd col */}
              <div className="flex gap-2 md:gap-5 flex-row md:flex-col w-full md:w-auto">
                <div className="w-full h-full md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-72 xl:h-72  ">
                  {" "}
                  <Link href="" className="card w-full h-full image-full ">
                    <figure>
                      <Image
                        src="/bluetooth.jpg"
                        height={500}
                        width={500}
                        className="w-full h-full overflow-hidden"
                        alt="Shoes"
                      />
                    </figure>

                    <div className="card-body p-5  justify-end ">
                      <h2 className="card-title text-gray-50">Shoes!</h2>
                      <p className="text-gray-50 card-description-short max-h-[100px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas quam facilis
                        nostrum omnis provident fugiat voluptatum alias sint suscipit, consectetur voluptatibus ab
                        voluptatem doloremque corrupti odio ratione, natus ex.
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="w-full h-full md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-72 xl:h-72  ">
                  {" "}
                  <Link href="" className="card w-full h-full image-full ">
                    <figure>
                      <Image
                        src="/bluetooth.jpg"
                        height={500}
                        width={500}
                        className="w-full h-full overflow-hidden"
                        alt="Shoes"
                      />
                    </figure>

                    <div className="card-body p-5  justify-end ">
                      <h2 className="card-title text-gray-50">Shoes!</h2>
                      <p className="text-gray-50 card-description-short max-h-[100px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas quam facilis
                        nostrum omnis provident fugiat voluptatum alias sint suscipit, consectetur voluptatibus ab
                        voluptatem doloremque corrupti odio ratione, natus ex.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              {/* 3rd col */}
              <div className="flex gap-2 md:gap-5 flex-row md:flex-col w-full md:w-auto">
                <div className="w-full h-full md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-72 xl:h-72  ">
                  {" "}
                  <Link href="" className="card w-full h-full image-full ">
                    <figure>
                      <Image
                        src="/bluetooth.jpg"
                        height={500}
                        width={500}
                        className="w-full h-full overflow-hidden"
                        alt="Shoes"
                      />
                    </figure>

                    <div className="card-body p-5  justify-end ">
                      <h2 className="card-title text-gray-50">Shoes!</h2>
                      <p className="text-gray-50 card-description-short max-h-[100px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas quam facilis
                        nostrum omnis provident fugiat voluptatum alias sint suscipit, consectetur voluptatibus ab
                        voluptatem doloremque corrupti odio ratione, natus ex.
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="w-full h-full md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-72 xl:h-72  ">
                  {" "}
                  <Link href="" className="card w-full h-full image-full ">
                    <figure>
                      <Image
                        src="/bluetooth.jpg"
                        height={500}
                        width={500}
                        className="w-full h-full overflow-hidden"
                        alt="Shoes"
                      />
                    </figure>

                    <div className="card-body p-5  justify-end ">
                      <h2 className="card-title text-gray-50">Shoes!</h2>
                      <p className="text-gray-50 card-description-short max-h-[100px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas quam facilis
                        nostrum omnis provident fugiat voluptatum alias sint suscipit, consectetur voluptatibus ab
                        voluptatem doloremque corrupti odio ratione, natus ex.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="min-h-screen"></div>
      </main>
    </>
  );
};

export default page;
