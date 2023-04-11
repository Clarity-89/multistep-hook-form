import { useLocation } from "react-router-dom";

export const Stepper = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return (
      "nav-link disabled " + (path === location.pathname ? "active" : undefined)
    );
  };

  return (
    <nav className="stepper navbar navbar-expand-lg">
      <div className="collapse navbar-collapse">
        <ol className="navbar-nav">
          <li className="step nav-item">
            <span className={getLinkClass("/")}>Contact</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/education")}>Education</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/about")}>About</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/confirm")}>Confirm</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

const StepState = ({ showWarning, showSuccess }) => {
  if (showWarning) {
    return <span className={"warning-sign"}>!</span>;
  } else if (showSuccess) {
    return (
      <div className="checkmark">
        <div className="circle"></div>
        <div className="stem"></div>
        <div className="tick"></div>
      </div>
    );
  } else {
    return null;
  }
};
