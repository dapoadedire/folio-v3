export const Contact = () => {
  return (
    <section className="my-20">
      
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-3xl font-semibold text-white">Contact</h2>
        <p className="text-2xl">Have a question or want to work together?</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        
        <div
        className="flex flex-col gap-4 w-10/12 justify-center "
        >
          
          <div
          className="flex flex-col gap-2 text-xl"
          >
          <p>
            You can reach me via email at{" "}
            <a href="mailto:adedireadedapo19@gmail.com"
            className="text-emerald-500 hover:text-emerald-400 transition duration-300 ease-in-out underline underline-offset-2"
            >
              adedireadedapo19 (at) gmail.com
            </a>
          </p>
          <p>
            Or you can fill out the form 
            {" "}
            <span>
                {
                    window.innerWidth < 768 ? "below" : "to the right"
                }
            </span>
            {" "}
             and I&apos;ll get back to you as soon as possible.
          </p>
          </div>
        </div>
        <div>
          <form action="https://docs.google.com/forms/d/e/1FAIpQLSde56WNe7etBQ5t5sBikgqblsgSIqLZeDzHM-gqoPTTP69WQQ/formResponse" method="POST"
          className="flex flex-col gap-4"
          >
            <div
            className="flex flex-col gap-2"
            >
              <label htmlFor="name" className="text-lg"
              >Name</label>
              <input type="text" name="entry.626262115" id="name" 
              className="rounded-md  p-3 text-base text-dark outline-none "
              />
            </div>
            <div
            className="flex flex-col gap-2"
            >
              <label htmlFor="email" className="text-lg">Email</label>
              <input type="email" name="entry.475471463" id="email"   className="rounded-md  p-3 text-base text-dark outline-none "
            />
            </div>
            <div
            className="flex flex-col gap-2"
            >
              <label htmlFor="message"
              className="text-lg"
              >Message</label>
              <textarea
                name="entry.1174814041"
                id="message"
                cols={10}
                rows={3}
                className="rounded-md  p-3 text-base text-dark outline-none "
            
              ></textarea>
            </div>
            <div
            className="flex w-full mt-8"
            >
              <button type="submit"
              className="rounded-md  p-3 text-base text-dark outline-none  w-full bg-white hover:text-white border hover:border-neutral-700 hover:bg-dark transition duration-300 ease-in-out"
              >Send
              Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};


