import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Section = ({ title, children, url }) => {
  const navigate = useNavigate();
  return (
    <div className="section mb-4">
      <div className="title-row mb-4">
        <h4>{title}</h4>
        <Button type="button" variant="secondary" onClick={() => navigate(url)}>
          Edit
        </Button>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export const SectionRow = ({ children }) => {
  return <div className="section-row">{children}</div>;
};
