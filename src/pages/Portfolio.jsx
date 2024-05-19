import { Link } from "react-router-dom";
import projects from "../components/projects";

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <ul>
        {projects.map((project) => (
          <li key={projects.id}>
            <img
              src={project.img}
              alt={`screenshot of ${project.name} website`}
              width="300"
            />
            <br />
            {`${project.name}`}
            <br />
            <Link to={project.github}>Github Repository</Link>
            <br />
            <Link to={project.url}>Visit this site!</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
