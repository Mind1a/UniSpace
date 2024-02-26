import { AnimatePresence, motion } from "framer-motion";
import { QuestionInput } from "./QuestionInput";
import { SButton, SQuestions, SQuestion } from "./AnswerQuestions.styled";
import { DownArrowIcon } from "./assets/down-arrow-icon";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { Answers } from "./answers";

const questionnaire = [
  {
    id: 1,
    checked: true,
    question: "What is your name?",
    answers: [
      {
        id: 1,
        checked: true,
        answer: "John",
      },
      {
        id: 2,
        checked: false,
        answer: "Jack",
      },

      {
        id: 3,
        checked: false,
        answer: "James",
      },
    ],
  },
  {
    id: 2,
    checked: false,
    question: "What is your age?",
    answers: [
      {
        id: 1,
        checked: false,
        answer: "18",
      },

      {
        id: 2,
        checked: false,
        answer: "19",
      },

      {
        id: 3,
        checked: false,
        answer: "20",
      },
    ],
  },
  {
    id: 3,
    checked: false,
    question: "What is your favorite color?",
    answers: [
      {
        id: 1,
        checked: false,
        answer: "Red",
      },

      {
        id: 2,
        checked: false,
        answer: "Green",
      },

      {
        id: 3,
        checked: false,
        answer: "Blue",
      },
    ],
  },
];

export const Questions = () => {
  const [questions, setQuestions] = useState(questionnaire);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (
      !destination ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    ) {
      return;
    }

    const newQuestions = Array.from(questions);
    const [reorderedQuestion] = newQuestions.splice(source.index, 1);
    newQuestions.splice(destination.index, 0, reorderedQuestion);

    setQuestions(newQuestions);
  };

  return (
    <SQuestions>
      <h2>მონიშნეთ სასურველი კითხვები</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="questions">
          {(provided) => (
            <div
              className="questions"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {questions.map((question, index) => (
                <Question
                  key={question?.id}
                  question={question}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </SQuestions>
  );
};

const Question = ({ question, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Draggable
      key={question.id}
      draggableId={`question-${question.id}`}
      index={index}
    >
      {(provided) => (
        <SQuestion ref={provided.innerRef} {...provided.draggableProps}>
          <div>
            <QuestionInput
              input={question.question}
              checked={question.checked}
              dragHandleProps={provided.dragHandleProps}
            />
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
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.3 },
                  }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Answers answers={question.answers} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </SQuestion>
      )}
    </Draggable>
  );
};
