/**
 * Example of the FormPrompt component using React Router v5
 */
import { useEffect } from "react";
import { Prompt } from "react-router-dom";

const stepLinks = ["/contact", "/education", "/about", "/confirm"];

export const FormPrompt = ({ hasUnsavedChanges }) => {
  useEffect(() => {
    const onBeforeUnload = (e) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [hasUnsavedChanges]);

  const onLocationChange = (location) => {
    if (stepLinks.includes(location.pathname)) {
      return true;
    }
    return "You have unsaved changes, are you sure you want to leave?";
  };

  return <Prompt when={hasUnsavedChanges} message={onLocationChange} />;
};
