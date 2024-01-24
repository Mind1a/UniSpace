import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SAnswers, SButton } from "./AnswerQuestions.styled";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { QuestionInput } from "./QuestionInput";
import { PlusIcon } from "./assets/plus-icon";
import { SettingsIcon } from "./assets/settings-icon";

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

export const Answers = ({ answers }) => {
  const [Answers, setAnswers] = useState(answers);

  console.log(Answers);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newAnswers = [...Answers];
    const [reorderedItem] = newAnswers.splice(result.source.index, 1);
    newAnswers.splice(result.destination.index, 0, reorderedItem);

    setAnswers(newAnswers);
  };

  return (
    <MotionAnswers
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h3 variants={childrenVariants}>პასუხები:</motion.h3>
      <AnimatePresence initial={false}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="answers">
            {(provided) => (
              <motion.div
                {...provided.droppableProps}
                ref={provided.innerRef}
                variants={childrenVariants}
              >
                {Answers.map((answer, index) => (
                  <Draggable
                    key={answer.id}
                    draggableId={`answer-${answer.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="answer"
                        key={index}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <QuestionInput
                          input={answer.answer}
                          checked={answer.checked}
                          displayLegend={false}
                          padding={`1em`}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </motion.div>
            )}
          </Droppable>
        </DragDropContext>
      </AnimatePresence>

      <div className="actions">
        <MotionButton
          variants={childrenVariants}
          onClick={() =>
            setAnswers((prev) => [
              ...prev,
              { answer: "", checked: false, id: prev.length + 1 },
            ])
          }
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
