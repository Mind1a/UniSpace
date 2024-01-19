import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";

import {
  SPage,
  SQuestions,
  SQuestion,
  SQuestionInput,
  SAnswers,
  SButton,
} from "./AnswerQuestions.styled";
import { DownArrowIcon } from "./assets/down-arrow-icon";
import { DragIcon } from "./assets/drag-icon";
import { PlusIcon } from "./assets/plus-icon";
import { SettingsIcon } from "./assets/settings-icon";

const questionnaire = [
  {
    id: 1,
    checked: true,
    question: "What is your name?",
    answers: ["John", "Jane", "Bob"],
  },
  {
    id: 2,
    checked: false,
    question: "What is your age?",
    answers: ["12", "13", "14"],
  },
  {
    id: 3,
    checked: false,
    question: "What is your favorite color?",
    answers: ["Red", "Blue", "Green"],
  },
];

const variants = {
  initial: { height: 0 },
  animate: {
    height: "auto",
    transition: {
      duration: 0.2,
      delayChildren: 0.2,
    },
  },
  exit: { height: 0 },
};

const childrenVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const MotionAnswers = motion(SAnswers);
const MotionButton = motion(SButton);
const MotionQuestionInput = motion(SQuestionInput);

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

const Questions = () => {
  return (
    <SQuestions>
      <h2>მონიშნეთ სასურველი კითხვები</h2>
      {questionnaire.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </SQuestions>
  );
};

const Question = ({ question }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SQuestion>
      <QuestionInput input={question.question} />
      <SButton
        padding="0.075rem 2.1rem"
        borderRadius="0 0 0.5rem 0.5rem"
        marginInline="auto"
        expanded={isExpanded}
        aria-controls="answers"
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <DownArrowIcon />
      </SButton>
      <AnimatePresence initial={false}>
        {isExpanded && <Answers answers={question.answers} />}
      </AnimatePresence>
    </SQuestion>
  );
};

const QuestionInput = ({ input, displayLegend = true, padding }) => {
  const inputVariants = {
    initial: { opacity: 0, y: "-100%" },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <MotionQuestionInput variants={inputVariants} padding={padding}>
      <SButton padding="0" background="transparent" tabIndex={-1}>
        <DragIcon />
      </SButton>

      <input type="checkbox" />

      <fieldset id="answers">
        {displayLegend && <legend>კითხვა</legend>}
        <input type="text" defaultValue={input} />
      </fieldset>
    </MotionQuestionInput>
  );
};

const Answers = ({ answers }) => {
  const [Answers, setAnswers] = useState(answers);

  return (
    <MotionAnswers
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h3 variants={childrenVariants}>პასუხები:</motion.h3>
      <motion.div variants={childrenVariants} className="answers">
        <AnimatePresence initial={false}>
          {Answers.map((answer, index) => (
            <QuestionInput
              key={index}
              input={answer}
              displayLegend={false}
              padding={`1em`}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="actions">
        <MotionButton
          variants={childrenVariants}
          onClick={() => setAnswers((prev) => [...prev, ""])}
        >
          <PlusIcon /> პასუხის დამატება
        </MotionButton>

        <MotionButton background="transparent" variants={childrenVariants}>
          <SettingsIcon />
        </MotionButton>
      </div>
    </MotionAnswers>
  );
};
