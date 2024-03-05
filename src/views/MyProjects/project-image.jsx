import ProjectImagePlaceholder from "./assets/project-image-placeholder.png";

import { SProjectImage } from "./MyProjects.styled";

export const ProjectImage = ({ image }) => {
  return (
    <SProjectImage>
      <img src={image ?? ProjectImagePlaceholder} alt="project" />
    </SProjectImage>
  );
};
