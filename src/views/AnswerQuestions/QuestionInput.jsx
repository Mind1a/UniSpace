import { motion } from "framer-motion";
import { SButton, SQuestionInput } from "./AnswerQuestions.styled";
import { DragIcon } from "./assets/drag-icon";

const MotionQuestionInput = motion(SQuestionInput);

export const QuestionInput = ({
  input,
  displayLegend = true,
  padding,
  checked,
  dragHandleProps,
}) => {
  const inputVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <MotionQuestionInput variants={inputVariants} padding={padding}>
      <SButton
        {...dragHandleProps}
        padding="0"
        background="transparent"
        tabIndex={-1}
      >
        <DragIcon />
      </SButton>

      <input type="checkbox" defaultChecked={checked} />

      <fieldset id="answers">
        {displayLegend && <legend>კითხვა</legend>}
        <input type="text" defaultValue={input} />
      </fieldset>
    </MotionQuestionInput>
  );
};
