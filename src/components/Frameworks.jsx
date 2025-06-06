import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "visualstudiocode",
    "Vercel",
    "c-",
    "Redux",
    "CSS",
    "MongoDB",
    "Git",
    "HTML",
    "Javascript",
    "Express",
    "React",
    "NodeJs",
    "Tailwind",
    "vitejs",
    "sql-server"
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} name={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills
          .slice()
          .reverse()
          .map((skill, index) => (
            <Icon key={index} name={skill} />
          ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ name }) => (
  <img
    src={`/assets/image/stack/${name}.svg`}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = `/assets/image/stack/${name}.png`;
    }}
    alt={name}
    className="duration-200 rounded-sm hover:scale-110"
  />
);
