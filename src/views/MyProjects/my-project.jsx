import { ProjectImage } from "./project-image";

import { SMyProject } from "./my-projects.styled";
import { ArrowIcon } from "./assets/arrow-icon";

export const MyProject = ({
  id,
  name,
  user_role,
  description,
  image,
  date,
  url,
  type,
  lecturer,
}) => {
  return (
    <SMyProject>
      <div className="info">
        <span className="name">{name}</span>
        <span className={`type ${type === "საფინალო პროექტი" ? "final" : ""}`}>
          #{type}
        </span>
      </div>

      <div className="grid">
        <ProjectImage image={image} />

        <div className="details">
          <span className="lecturer">
            კურსის ხელმძღვანელი: <strong>{lecturer}</strong>
          </span>
          <p className="description">{description}</p>

          <div className="actions">
            <a href={url} target="_blank" rel="noreferrer">
              სრულად <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </SMyProject>
  );
};
