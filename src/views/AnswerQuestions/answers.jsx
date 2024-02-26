import { useState } from "react";
import { SAnswers, SButton } from "./AnswerQuestions.styled";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { QuestionInput } from "./QuestionInput";
import { PlusIcon } from "./assets/plus-icon";
import { SettingsIcon } from "./assets/settings-icon";

export const Answers = ({ answers }) => {
  const [Answers, setAnswers] = useState(answers);

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
    <SAnswers>
      <h3>პასუხები:</h3>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="answers">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
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
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="actions">
        <SButton
          onClick={() =>
            setAnswers((prev) => [
              ...prev,
              { answer: "", checked: false, id: prev.length + 1 },
            ])
          }
        >
          <PlusIcon /> პასუხის დამატება
        </SButton>

        <SButton background="transparent">
          <SettingsIcon />
        </SButton>
      </div>
    </SAnswers>
  );
};
