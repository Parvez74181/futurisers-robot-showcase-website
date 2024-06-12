import BlockNoteTextEditor from "@/components/BlockNoteTextEditor";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

const page = () => {
  return (
    <>
      <main className=" -mt-[70px]">
        <section className="hero-section pt-14">
          <div className="lg:w-[60%] md:w-[85%] w-full mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">Inspiring the Future of Robotics</h1>
            <p className="text-xl dark:text-gray-400 text-gray-700 leading-loose mb-12">
              At Futurisers, we are driven by a singular vision: to shape the future of robotics and unlock its
              transformative potential. We believe that robots have the power to revolutionize countless industries,
              from healthcare and manufacturing to agriculture and space exploration.
            </p>
            <p className="text-xl dark:text-gray-400 text-gray-700 leading-loose mb-12">
              Our passionate team of engineers and designers is constantly pushing the boundaries of robotic innovation.
              We are dedicated to developing robots that are not only technologically advanced but also ethical, safe,
              and beneficial to society. From delicate surgical robots to complex manufacturing automation systems, our
              portfolio showcases the cutting-edge advancements we are making in the field.
            </p>
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-2xl font-bold text-center mb-4">Join the Journey</h2>
              <p className="text-xl dark:text-gray-400 text-gray-700 leading-loose">
                We invite you to embark on this journey with us. Explore our diverse portfolio and discover the exciting
                world of robotics. Delve into our insightful blog, stay up-to-date with our latest projects, and witness
                firsthand how we are inspiring the future of robotics.
              </p>
            </div>
            <p className="text-xl dark:text-gray-400 text-gray-700 leading-loose mb-12">
              We believe that collaboration is key to unlocking the full potential of robotics. We actively engage with
              researchers, academics, and industry leaders to share knowledge, foster innovation, and address the
              ethical and societal considerations of this rapidly evolving field.
            </p>
            <p className="text-xl dark:text-gray-400 text-gray-700 leading-loose">
              Join us as we create a future where robots work alongside humans, enhancing our capabilities and improving
              lives across the globe.
            </p>
          </div>
        </section>

        <div className="container w-[90%] mx-auto">
          {/* <Editor /> */}
          <BlockNoteTextEditor />
        </div>
      </main>
    </>
  );
};

export default page;
