export const Contact = () => {
  // const window = 
  return (
    <section className="my-20" id="contact">
      
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-3xl font-semibold text-white">Contact</h2>
        <p className="text-2xl">Have a question or want to work together?</p>
      </div>
 
        <div
        className="flex flex-col gap-4 justify-center "
        >
          
          <p
          className="text-center text-xl text-neutral-400"
          >
            You can reach me via email at{" "}
            <a href="mailto:adedireadedapo19@gmail.com"
            className="text-emerald-500 hover:text-emerald-400 transition duration-300 ease-in-out underline underline-offset-2"
            >
              adedireadedapo19 (at) gmail.com
            </a>
          </p>
        </div>
       
     
    </section>
  );
};


