const page = () => {
  return (
    <>
      <main className="-mt-[70px]">
        <section className="pt-24 hero-section min-h-screen">
          <form action="" className="flex flex-col gap-5 lg:w-[60%] md:w-[85%] w-full mx-auto px-4 py-16">
            <h2 className="e text-center mb-8 text-3xl lg:text-5xl">Get In Touch With Us</h2>
            <div className="flex gap-5 md:flex-row flex-col items-center w-full justify-center *:w-full">
              {/* username */}
              <label className="input input-bordered dark:bg-[#faf8f91f] flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" name="username" placeholder="Username" required />
              </label>

              {/* email */}
              <label className="input input-bordered dark:bg-[#faf8f91f] flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email" className="grow" name="email" placeholder="Email" required />
              </label>
            </div>

            {/* subject */}
            <label className="input input-bordered dark:bg-[#faf8f91f] flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" name="subject" placeholder="Subject" required />
            </label>
            <textarea
              required
              name="message"
              className="textarea textarea-bordered dark:bg-[#faf8f91f] placeholder:text-base"
              placeholder="Message"
              rows={5}
            ></textarea>

            <button className="btn btn-outline btn-success">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default page;
