import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";

import { SPage } from "./AnswerQuestions.styled";
import { Questions } from "./questions";

export const AnswerQuestions = () => {
  return (
    <SPage>
      <FourthHeader />
      <SideBar />
      <h1>ფორმის შედგენა</h1>
      <Questions />
    </SPage>
  );
};
