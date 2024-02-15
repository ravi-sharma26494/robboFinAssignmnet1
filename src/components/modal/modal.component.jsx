import React, { useState } from "react";
import ActionCardCompleted from "../cards/action-card-completed";
import ActionCardPending from "../cards/action-card-pending.component";

const DefaultModal = ({ children, onClose }) => {
  const [isProfileCompleted, setIsProfileCompleted] = useState(false);
  const [firstState, setFirstState] = useState({
    isEnabled: false,
    isBlur: true,
    isDisabled: true,
    isStepCompleted: false,
  });
  const [secondState, setSecondState] = useState({
    isEnabled: false,
    isBlur: true,
    isDisabled: true,
    isStepCompleted: false,
  });

  const completeProfileHandler = () => {
    setFirstState({
      isEnabled: true,
      isBlur: false,
      isDisabled: false,
    });
    setIsProfileCompleted(true);
  };

  const step1ClickHandler = () => {
    setSecondState({
      isEnabled: true,
      isBlur: false,
      isDisabled: false,
    });
    return setFirstState((prevState) => ({
      ...prevState,
      isStepCompleted: true,
    }));
  };
  const step2ClickHandler = () => {
    setThirdState({
      isEnabled: true,
      isBlur: false,
      isDisabled: false,
    });
    return setSecondState((prevState) => ({
      ...prevState,
      isStepCompleted: true,
    }));
  };
  const step3ClickHandler = () => {
    setFourthState({
      isEnabled: true,
      isBlur: false,
      isDisabled: false,
    });
    return setThirdState((prevState) => ({
      ...prevState,
      isStepCompleted: true,
    }));
  };

  const [thirdState, setThirdState] = useState({
    isEnabled: false,
    isBlur: true,
    isDisabled: true,
  });

  const [fourthState, setFourthState] = useState({
    isEnabled: false,
    isBlur: true,
    isDisabled: true,
  });

  const [fifthState, setFifthState] = useState({
    isEnabled: false,
    isBlur: true,
    isDisabled: true,
  });

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white w-full md:max-w-2xl md:h-[calc(100%-2rem)] md:max-h-full rounded-lg overflow-hidden shadow-lg relative">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Click CTA Button
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>

        {/* Modal content */}
        <div
          className="p-4 md:p-5 h-full overflow-y-auto "
          style={{ maxHeight: "calc(100vh - 12rem)" }}
        >
          <div className="child-nodes flex flex-col gap-10">
            {!isProfileCompleted ? (
              <ActionCardPending
                title={"Complete Profile"}
                ctaText={"Complete"}
                onClick={completeProfileHandler}
              />
            ) : (
              <ActionCardCompleted
                title={"CompleteProfile"}
                subtext={"Good Job"}
                completionText={"Complete"}
                ctaText={"Download"}
              />
            )}
            {/* First step */}
            {!firstState.isStepCompleted ? (
              <ActionCardPending
                title={"Step 1"}
                ctaText={"Pay"}
                onClick={step1ClickHandler}
                isBlur={firstState.isBlur}
                isDisabled={firstState.isDisabled}
              />
            ) : (
              <ActionCardCompleted
                title={"Step 1"}
                subtext={"5% of total amount"}
                completionText={"Rs 1,00,000"}
                ctaText={"Receipt"}
              />
            )}

            {/* second step */}
            {!secondState.isStepCompleted ? (
              <ActionCardPending
                title={"Step 2"}
                ctaText={"Complete"}
                onClick={step2ClickHandler}
                isBlur={secondState.isBlur}
                isDisabled={secondState.isDisabled}
              />
            ) : (
              <ActionCardCompleted
                title={"Step 2"}
                completionText={"Complete"}
                ctaText={"Download"}
              />
            )}

            {/* Third step */}
            {!thirdState.isStepCompleted ? (
              <ActionCardPending
                title={"Step 3"}
                ctaText={"Complete"}
                onClick={step3ClickHandler}
                isBlur={thirdState.isBlur}
                isDisabled={thirdState.isDisabled}
              />
            ) : (
              <ActionCardCompleted
                title={"Step 3"}
                subtext={"We will get back to you in 3 months"}
                completionText={"Complete"}
              />
            )}

            {/* Fourth step */}
            <ActionCardPending
              title={"Step 4"}
              ctaText={"Complete"}
              onClick={() => alert("2nd")}
              isBlur={fourthState.isBlur}
              isDisabled={fourthState.isDisabled}
            />
            {/* Fifth step */}
            <ActionCardPending
              title={"Step 5"}
              ctaText={"Complete"}
              onClick={() => alert("2nd")}
              isBlur={fifthState.isBlur}
              isDisabled={fifthState.isDisabled}
            />
            {}
            {/* <ActionCardCompleted />
            <ActionCardCompleted />
            <ActionCardCompleted />
            <ActionCardCompleted />
            <ActionCardCompleted /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultModal;
