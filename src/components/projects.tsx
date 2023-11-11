
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
export const Projects = () => {
  return (
    <section className="my-20" id="projects">
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-white">Projects</h2>
        <p className="text-lg">
          Here are some of the projects I&apos;ve worked on. You can view more
          on my{" "}
          <a
            href="https://github.com/dapoadedire"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-emerald-700"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
        {projectsList.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-3 transition duration-300 ease-in-out hover:shadow-lg"
          >
            <div className="h-44 w-full overflow-hidden rounded-md border border-neutral-800">
              <img
                src={project.image}
                alt={project.name}
                className=" h-full w-full   transition duration-300 ease-in-out hover:scale-105"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold">{project.name}</h3>
              <p className="text-sm text-neutral-400">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 ">
              {project.languages.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-md bg-neutral-800 px-2 py-1 text-xs text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex   items-end justify-between  ">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className=" 
                    flex items-center justify-between gap-1
                    text-sm text-neutral-500 transition duration-300 ease-in-out hover:text-white"
              >
                GitHub
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" 
                      group
                      flex items-center justify-between gap-1
                      text-sm text-neutral-500 transition duration-300 ease-in-out hover:text-white"
              >
                Live{" "}
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="-rotate-45 transition  duration-300 ease-in-out group-hover:rotate-0"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};







const projectsList = [
  {
    name: "TrendHub",
    description: "E-commerce website with React and TailwindCSS.",
    url: "https://trend-hub.vercel.app",
    github: "https://github.com/dapoadedire/trendhub",
    languages: ["React", "Tailwind CSS", "Framer Motion"],
      image: '/trendhub.png'
  },
  {
    name: "Movie and Book Recommender",
    description: "Personalized books/movie recommendations with OpenAI API.",
    url: "https://movie-and-book-recommender.vercel.app/",
    github: "https://github.com/dapoadedire/movie-and-book-recommender",
    languages: ["NextJS", "Typescript", "Tailwind CSS", "OpenAI API"],
      image: '/movie-and-book-recommender.png'
  },
  {
    name: "Wordsmith",
    description: "Dictionary app using dictionaryapi.dev API.",
    url: "https://wordsmith-d.vercel.app/",
    github: "https://github.com/dapoadedire/wordsmith",
    languages: ["React", "Tailwind CSS", "API"],
      image: '/wordsmith.png'
  },
  {
      name: "GitIgnore CLI",
      description: "Generate .gitignore files with Python package.",
      url: "https://pypi.org/project/creategitignore/",
      github: "https://github.com/dapoadedire/gitignore-cli",
      languages: ["Python", "PyPI"],
        image: '/gitignore-cli.png'
    },
  {
    name: "BooksExplorer",
    description: "Search and view books with React.",
    url: "https://bookexplorer.vercel.app/",
    github: "https://github.com/dapoadedire/booksexplorer",
    languages: ["React", "Vanilla CSS"],
      image: '/bookexplorer.png'
  },
  {
    name: "NASA APOD",
    description: "Explore NASA's Astronomy Picture of the Day.",
    url: "https://astro-pic-of-the-day.vercel.app/",
    github: "https://github.com/dapoadedire/astro-pic-of-the-day",
    languages: ["React", "Vanilla CSS"],
      image: '/astro-pic-of-the-day.png'
  },
  {
    name: "BrainBusters",
    description: "Quiz app with score tracking built with React.",
    url: "https://brainbusters.vercel.app/",
    github: "https://github.com/dapoadedire/brainbusters",
    languages: ["React", "Tailwind CSS"],
      image: '/brainbusters.png'
  },
  
];