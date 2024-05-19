import { Link } from "react-router-dom";
import projects from "../components/projects";

export default function Portfolio() {
  return (
    <>
      <div className="nav-list2">
        {projects.map((project) => (
          <div className="project-item" key={projects.id}>
            <img
              src={project.img}
              alt={`screenshot of ${project.name} website`}
              width="500"
            />
            <br />
            {`${project.name}`}
            <br />
            <Link to={project.github}>Github Repository</Link>
            <br />
            <Link to={project.url}>Visit this site!</Link>
          </div>
        ))}
      </div>
    </>
  );
}
