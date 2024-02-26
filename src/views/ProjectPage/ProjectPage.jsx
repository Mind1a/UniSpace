import { useState } from "react";
import {
  SProjectPageMainDiv,
  SInfoDiv,
  SDescriptionDiv,
  SLargeText,
  SProjectRole,
  SSliderDiv,
  SProjectDuration,
  SProjectPageFooter,
  SWrapper,
  SProjectLink,
  SUsedToolsDiv,
  STitle,
} from "./ProjectPage.styled";
import { TestProjectData } from "./data/TestData";
import { ProjectTeamSlider } from "../../components/ProjectTeamSlider/ProjectTeamSlider";
import { Link } from "react-router-dom";
import { tools } from "./data/tools";
import { ProjectSlider } from "../../components/ProjectSlider";

export const ProjectPage = () => {
  const user = "ნინი წიკლაური";
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSliderChange = (i) => {
    setSliderIndex(i);
  };
  const findUserObj = () => {
    const userObj = TestProjectData.team.filter((obj) => obj.name === user)[0];
    return userObj;
  };
  const role = findUserObj(user).role;
  const roleDescription = findUserObj(user).roleDescription;

  return (
    <SProjectPageMainDiv>
      <STitle>საფინალო პროექტი</STitle>
      {<ProjectSlider
        onChange={handleSliderChange}
        data={TestProjectData.images}
      />}
      <SWrapper>
        <SInfoDiv>
          <SLargeText>
            პროექტის დასახელება: <span>{TestProjectData.name}</span>
          </SLargeText>
          <p>პროექტის აღწერა:</p>
          <SDescriptionDiv>
            <p>{TestProjectData.description}</p>
          </SDescriptionDiv>
        </SInfoDiv>

        <SSliderDiv>
          <p>პროექტზე მუშაობდნენ:</p>
          <ProjectTeamSlider />
        </SSliderDiv>

        <SInfoDiv>
          <SProjectRole>
            ჩემი როლი: <span>{role}</span>
          </SProjectRole>
          <SDescriptionDiv width={"75%"}>
            <p>{roleDescription}</p>
          </SDescriptionDiv>
        </SInfoDiv>

        <SProjectDuration>
          პროექტის ხანგრძლივობა: <span>{TestProjectData.duration}</span>
        </SProjectDuration>

        <SProjectPageFooter>
          <SProjectLink>
            <Link to={TestProjectData.link}>
              <span>პროექტის ლინკი</span>
            </Link>
          </SProjectLink>
          <SUsedToolsDiv>
            <p>გამოყენებული ხელსაწყოები</p>
            <div>
              {TestProjectData.usedTools.map((tool, index) => (
                <img src={tools[tool.toLowerCase()]} alt={tool} key={index} />
              ))}
            </div>
          </SUsedToolsDiv>
        </SProjectPageFooter>
      </SWrapper>
    </SProjectPageMainDiv>
  );
};
