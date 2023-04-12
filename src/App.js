import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { Contact } from "./Steps/Contact";
import { Education } from "./Steps/Education";
import { About } from "./Steps/About";
import { Confirm } from "./Steps/Confirm";
import { Stepper } from "./Steps/Stepper";

export const App = () => {
  const buttonRef = useRef();

  const onStepChange = () => {
    buttonRef.current?.click();
  };

  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Stepper onStepChange={onStepChange} />
          <Routes>
            <Route path="/" element={<Contact ref={buttonRef} />} />
            <Route path="/education" element={<Education ref={buttonRef} />} />
            <Route path="/about" element={<About ref={buttonRef} />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
};
