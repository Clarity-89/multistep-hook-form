import { useNavigate } from "react-router-dom";

export const Form = ({ children, onSubmit, nextStep, ...props }) => {
  const navigate = useNavigate();

  const onSubmitCustom = (e) => {
    e.preventDefault();
    onSubmit();
    navigate(nextStep);
  };

  return (
    <form className="row" onSubmit={onSubmitCustom} {...props} noValidate>
      {children}
    </form>
  );
};
