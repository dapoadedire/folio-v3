// const skills = [
//   "Astro",
//   "HTML5",
//   "CSS3",
//   "Tailwind CSS",
//   "Sass",
//   "JavaScript",
//   "React",
//   "Node.js",
//   "Express",
//   "MongoDB",
//   "Python",
//   "Docker",
//   "Git",
//   "GitHub",
//   "Linux",
//   "GNU Bash",
//   "Ubuntu",
// ];

const skills = [
  "Astro",
  "CSS3",
  "Docker",
  "Express",
  "Git",
  "GitHub",
  "GNU Bash",
  "HTML5",
  "JavaScript",
  "Linux",
  "MongoDB",
  "Node.js",
  "Python",
  "React",
  "Sass",
  "Tailwind CSS",
  "Ubuntu",
];


import { Icon } from "./icon";

export const Skills = () => {
  return (
    <section className="my-20">
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold text-white">Skills</h2>
        <p className="text-lg">
          Here are the skills I&apos;ve acquired over the years, and I&apos;m
          continuously expanding my knowledge in these areas.
        </p>
      </div>

      <div
        className="grid grid-cols-2 gap-6 md:grid-cols-3 
      "
      >
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

const Skill = ({ skill }) => {
  return (
    <div className="flex cursor-pointer items-center gap-3 py-4  grayscale   hover:grayscale-0 ">
      <Icon name={skill.toLowerCase().replace(/ /g, "")} />
      <span className="text-base">{skill}</span>
    </div>
  );
};
