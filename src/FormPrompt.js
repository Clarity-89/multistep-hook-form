import { useEffect, useCallback, useRef } from "react";
import {
  useBeforeUnload,
  unstable_useBlocker as useBlocker,
} from "react-router-dom";

const stepLinks = ["/contact", "/education", "/about", "/confirm"];

export const FormPrompt = ({ hasUnsavedChanges }) => {
  const onLocationChange = useCallback(
    ({ nextLocation }) => {
      if (!stepLinks.includes(nextLocation.pathname) && hasUnsavedChanges) {
        return !window.confirm(
          "You have unsaved changes, are you sure you want to leave?"
        );
      }
      return false;
    },
    [hasUnsavedChanges]
  );

  usePrompt(onLocationChange, hasUnsavedChanges);
  useBeforeUnload(
    useCallback(
      (event) => {
        if (hasUnsavedChanges) {
          event.preventDefault();
          event.returnValue = "";
        }
      },
      [hasUnsavedChanges]
    ),
    { capture: true }
  );

  return null;
};

function usePrompt(onLocationChange, hasUnsavedChanges) {
  const blocker = useBlocker(hasUnsavedChanges ? onLocationChange : false);
  const prevState = useRef(blocker.state);

  useEffect(() => {
    if (blocker.state === "blocked") {
      blocker.reset();
    }
    prevState.current = blocker.state;
  }, [blocker]);
}
