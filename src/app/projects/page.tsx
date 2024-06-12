import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* projects */}
      <section className="projects pt-10 container mx-auto">
        <h2 className="h2-title mb-8 text-3xl lg:text-5xl">Our Projects</h2>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
          <li className="animation-appear">
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start animation-appear md:text-end md:mb-10">
              <Link href="">
                <div className="flex md:justify-end w-auto">
                  <Image
                    alt="obstacle"
                    src="/obstacle.jpg"
                    width={500}
                    height={500}
                    className="aspect-video rounded-md object-cover dark:opacity-70"
                  />
                </div>
                <time className="font-mono italic dark:text-gray-400 text-gray-700">01 May 2024</time>
                <div className="text-lg font-bold dark:text-gray-400 text-gray-700">Obstacle Avoiding Robot</div>
              </Link>
              <p className="project-description mb-5 md:mb-0 dark:text-gray-400 text-gray-700 ">
                The obstacle-avoiding robot is a marvel of engineering, navigating its environment with an uncanny sense
                of awareness. Equipped with sensors like ultrasonic or infrared, it detects and swiftly avoids obstacles
                in its path. This autonomous ability makes it ideal for applications like home cleaning, warehouse
                logistics, and even space exploration, where navigating complex environments is crucial.
              </p>
            </div>
            <hr />
          </li>

          <li className="animation-appear">
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end animation-appear md:mb-10">
              <Link href="">
                <div className="flex justify-start w-auto">
                  <Image
                    alt="line"
                    src="/line.jpg"
                    width={500}
                    height={500}
                    className="aspect-video rounded-md object-cover dark:opacity-70"
                  />
                </div>
                <time className="font-mono italic dark:text-gray-400 text-gray-700">01 August 2024</time>
                <div className="text-lg font-bold dark:text-gray-400 text-gray-700">Line Following Robot</div>
              </Link>
              <p className="project-description mb-5 md:mb-0 dark:text-gray-400 text-gray-700">
                The line-following robot, a marvel of simple yet ingenious design, navigates autonomously along a
                pre-defined path. Equipped with infrared sensors, it detects the contrast between a dark line and a
                lighter surface, adjusting its direction to stay on track. This versatile robot finds applications in
                various fields, from automated production lines to educational projects, demonstrating the power of
                robotics in everyday tasks.
              </p>
            </div>
            <hr />
          </li>

          <li className="animation-appear">
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start animation-appear md:text-end md:mb-10">
              <Link href="">
                <div className="flex md:justify-end w-auto">
                  <Image
                    alt="self"
                    src="/self.jpg"
                    width={500}
                    height={500}
                    className="aspect-video rounded-md object-cover dark:opacity-70"
                  />
                </div>
                <time className="font-mono italic dark:text-gray-400 text-gray-700">06 November 2024</time>
                <div className="text-lg font-bold dark:text-gray-400 text-gray-700">Self Driving Robot Car</div>
              </Link>
              <p className="project-description mb-5 md:mb-0 dark:text-gray-400 text-gray-700">
                The self-driving car, also known as an autonomous vehicle, is revolutionizing transportation. Equipped
                with an array of sensors, cameras, and powerful computing, these robotic cars can navigate roads,
                perceive their surroundings, and make driving decisions without human intervention. This technology
                promises to reduce accidents, increase road efficiency, and offer new mobility options for everyone.
                While still under development, self-driving cars are poised to transform the way we travel and interact
                with the world around us.
              </p>
            </div>
            <hr />
          </li>

          <li className="animation-appear">
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end animation-appear md:mb-10">
              <Link href="">
                <div className="flex justify-start w-auto">
                  <Image
                    alt="bluetooth"
                    src="/bluetooth.jpg"
                    width={500}
                    height={500}
                    className="aspect-video rounded-md object-cover dark:opacity-70"
                  />
                </div>
                <time className="font-mono italic dark:text-gray-400 text-gray-700">01 January 2025</time>
                <div className="text-lg font-bold dark:text-gray-400 text-gray-700">
                  SmartPhone Controlled Arduino Based Bluetooth Car
                </div>
              </Link>
              <p className="project-description mb-5 md:mb-0 dark:text-gray-400 text-gray-700 ">
                Turn your smartphone into a remote control for your very own robot car! This exciting project combines
                the power of Arduino and Bluetooth, allowing you to steer, accelerate, and even brake your car with just
                a few taps on your phone. Customize the code and design to create a unique and thrilling experience. Get
                ready to zoom around and unleash your inner robotics engineer!
              </p>
            </div>
            <hr />
          </li>

          <li className="animation-appear">
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start animation-appear md:text-end md:mb-10">
              <Link href="">
                <div className="flex md:justify-end w-auto">
                  <Image
                    alt="soil"
                    src="/soil.jpg"
                    width={500}
                    height={500}
                    className="aspect-video rounded-md object-cover dark:opacity-70"
                  />
                </div>
                <time className="font-mono italic dark:text-gray-400 text-gray-700">08 May 2025</time>
                <div className="text-lg font-bold dark:text-gray-400 text-gray-700">
                  Automated plants watering system
                </div>
              </Link>
              <p className="project-description mb-5 md:mb-0 dark:text-gray-400 text-gray-700 ">
                Say goodbye to overwatering and wilting plants! Automated plant watering systems use sensors to monitor
                soil moisture and deliver water only when needed. This innovative technology ensures your plants thrive,
                even when you're away. Whether you're a busy gardener or simply want to simplify plant care, an
                automated system is a smart and efficient solution.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default page;
