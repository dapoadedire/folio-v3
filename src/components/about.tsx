const socialLinks = [
    {
        name: "Email",
        link: "mailto:adedireadedapo19@gmail.com",
    },
    {
        name: "WhatsApp",
        link: "https://wa.me/2349038388723",
    },
    {
        name: "X(Twitter)",
        link: "https://www.twitter.com/dapo_adedire",
    },
    {
        name: "Github",
        link: "https://www.github.com/dapoadedire",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/dapoadedire/",
    },
    {
        name: "Hashnode",
        link: "https://dapoadedire.hashnode.dev",
    },
];

export const About = () => {
    return (
        <section className="" id="about">
            {/* <div className="mb-6 flex flex-col gap-3">
                
                <h2
                    className="text-2xl font-bold font-MartianMono
            mb-1  leading-10
            "
                >
                    Hi there,
                    <br />
                    I&rsquo;m Dapo Adedire 👋
                </h2>
                <p className="text-xl mt-3">
                    I am a Software Engineer based in Nigeria. 
                </p>

                <p className="text-base mt-2 leading-[1.6]">
                    I enjoy crafting user interfaces that not only look good but
                    also improve functionality and user experience. In my world,
                    it&apos;s about blending aesthetics with usability, ensuring
                    every interaction is smooth and meaningful.
                </p>

                <p className="text-base mt-2 leading-[1.6]">
                    Besides web development, I&rsquo;m curious about{" "}
                    <Highlight>
                        electronics, Arduino tinkering, and the IoT (Internet of
                        Things)
                    </Highlight>
                    . Bringing physical objects to life through technology is
                    satisfying. My workbench often has circuit boards, wires,
                    and microcontrollers as I dive into DIY projects.
                </p>

                <p className="text-base mt-2 leading-[1.6]">
                    I like <Highlight>reading Sherlock Holmes&apos;</Highlight>{" "}
                    adventures when I&apos;m not coding or assembling
                    components. Solving puzzles and connecting clues keeps me
                    sharp and entertained.
                </p>

                <p className="text-base mt-2 leading-[1.6]">
                    I also have a soft spot for self-help books on{" "}
                    <Highlight>personal development </Highlight>
                    and mastering one&apos;s life. They offer valuable insights
                    and strategies for self-improvement, crucial for success
                    alongside technical skills.
                </p>

                <p>
                    Photography is another creative outlet. Capturing moments,
                    playing with light, and framing the world through a lens
                    lets me express myself artistically, complementing my
                    technical pursuits.
                </p>
            </div> */}
            <div className="mb-6 flex flex-col gap-3">
  <h2 className="text-2xl font-bold font-MartianMono mb-1 leading-10">
    Hi, I’m Dapo Adedire 👋
  </h2>
  <p className="text-xl mt-3">
    I'm a Software Engineer from Nigeria.
  </p>
  <p className="text-base ">
    I love building user interfaces that balance aesthetics and functionality for a smooth experience.
  </p>
  <p className="text-base mt-2 ">
    I tinker with electronics, Arduino, and IoT—bringing tech to life through DIY projects.
  </p>
  <p className="text-base ">
    When I’m not coding, I enjoy Sherlock Holmes adventures, personal development books, and photography.
  </p>
</div>
            <div className="flex flex-col my-2 text-base border border-neutral-700 rounded-md p-2 ">
                <p className="mb-1 ">
                    You can find or reach me through:
                </p>
                <ul className="flex flex-wrap  w-9/12 ">
                    {socialLinks.map((social, index) => (
                        <li key={index}>
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-3  text-gray-300 font-semibold hover:text-white hover:underline transition duration-300 ease-in-out"
                            >
                                <span>{social.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const Highlight = ({ children }: { children: React.ReactNode }) => {
    return (
        <span
            className="
        text-emerald-500
        font-semibold
        "
        >
            {children}
        </span>
    );
};
