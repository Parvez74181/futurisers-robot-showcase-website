import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" -mt-[65px]">
      {/* hero section */}
      <section className="hero-section">
        <div className="hero min-h-screen ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold" data-aos="zoom-in">
                Inspiring the Future of Robotics
              </h1>
              <p className="py-6" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
                Explore our portfolio and stay up-to-date with our latest projects.
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
          {/* dropdown */}
          <div
            className="flex justify-center items-center flex-col w-full absolute bottom-20 animate-bounce"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-delay="800"
          >
            <small>Scroll down</small>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 dark:invert ">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>
        </div>
      </section>

      {/* projects */}
      <section className="projects container mx-auto">
        <h2 className="text-center mb-10 text-5xl">Our Projects</h2>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ">
          <li className="">
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end md:mb-10">
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
                <time className="font-mono italic">01 May 2024</time>
                <div className="text-lg font-bold">Obstacle Avoiding Robot</div>
              </Link>
              <p className="project-description mb-5 md:mb-0 ">
                The obstacle-avoiding robot is a marvel of engineering, navigating its environment with an uncanny sense
                of awareness. Equipped with sensors like ultrasonic or infrared, it detects and swiftly avoids obstacles
                in its path. This autonomous ability makes it ideal for applications like home cleaning, warehouse
                logistics, and even space exploration, where navigating complex environments is crucial.
              </p>
            </div>
            <hr />
          </li>

          <li className="">
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
            <div className="timeline-end md:mb-10">
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
                <time className="font-mono italic">01 August 2024</time>
                <div className="text-lg font-bold">Line Following Robot</div>
              </Link>
              <p className="project-description mb-5 md:mb-0">
                The line-following robot, a marvel of simple yet ingenious design, navigates autonomously along a
                pre-defined path. Equipped with infrared sensors, it detects the contrast between a dark line and a
                lighter surface, adjusting its direction to stay on track. This versatile robot finds applications in
                various fields, from automated production lines to educational projects, demonstrating the power of
                robotics in everyday tasks.
              </p>
            </div>
            <hr />
          </li>

          <li className="">
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
            <div className="timeline-start md:text-end md:mb-10">
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
                <time className="font-mono italic">06 November 2024</time>
                <div className="text-lg font-bold">Self Driving Robot Car</div>
              </Link>
              <p className="project-description mb-5 md:mb-0">
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

          <li className="">
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
            <div className="timeline-end md:mb-10">
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
                <time className="font-mono italic">01 January 2025</time>
                <div className="text-lg font-bold">SmartPhone Controlled Arduino Based Bluetooth Car</div>
              </Link>
              <p className="project-description mb-5 md:mb-0 ">
                Turn your smartphone into a remote control for your very own robot car! This exciting project combines
                the power of Arduino and Bluetooth, allowing you to steer, accelerate, and even brake your car with just
                a few taps on your phone. Customize the code and design to create a unique and thrilling experience. Get
                ready to zoom around and unleash your inner robotics engineer!
              </p>
            </div>
            <hr />
          </li>
          <li className="">
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
            <div className="timeline-start md:text-end md:mb-10">
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
                <time className="font-mono italic">08 May 2025</time>
                <div className="text-lg font-bold">Automated plants watering system</div>
              </Link>
              <p className="project-description mb-5 md:mb-0 ">
                Say goodbye to overwatering and wilting plants! Automated plant watering systems use sensors to monitor
                soil moisture and deliver water only when needed. This innovative technology ensures your plants thrive,
                even when you're away. Whether you're a busy gardener or simply want to simplify plant care, an
                automated system is a smart and efficient solution.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* team_members */}
      <section className="team_members container mx-auto ">
        <h2 className="text-center mb-10 text-5xl" id="team-members">
          Team Members
        </h2>

        {/* 1st row */}
        <div className="grid grid-cols-3">
          {/* team member */}
          <div className="team_member flex flex-col justify-center items-center">
            <div className="avatar  ">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>

            <div className="team_members_name"> Anne Marie</div>
            <div className="team_members_description font-thin italic tracking-wide text-sm font-sans">Engineer</div>

            <div className="team_members_social"></div>
          </div>
          {/* team member */}
          <div className="team_member flex flex-col justify-center items-center">
            <div className="avatar  ">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>

            <div className="team_members_name"> Anne Marie</div>
            <div className="team_members_description font-thin italic tracking-wide text-sm font-sans">Engineer</div>

            <div className="team_members_social"></div>
          </div>
          {/* team member */}
          <div className="team_member flex flex-col justify-center items-center">
            <div className="avatar  ">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>

            <div className="team_members_name"> Anne Marie</div>
            <div className="team_members_description font-thin italic tracking-wide text-sm font-sans">Engineer</div>

            <div className="team_members_social"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 my-5">
          {/* team member */}
          <div className="team_member flex flex-col justify-center items-center">
            <div className="avatar  ">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>

            <div className="team_members_name"> Anne Marie</div>
            <div className="team_members_description font-thin italic tracking-wide text-sm font-sans">Engineer</div>

            <div className="team_members_social"></div>
          </div>
          {/* team member */}
          <div className="team_member flex flex-col justify-center items-center">
            <div className="avatar  ">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>

            <div className="team_members_name"> Anne Marie</div>
            <div className="team_members_description font-thin italic tracking-wide text-sm font-sans">Engineer</div>

            <div className="team_members_social"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
