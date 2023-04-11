import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form } from "../Forms";
import { forwardRef } from "react";

export const About = forwardRef((props, ref) => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>About</legend>
        <Field label="About me">
          <textarea
            {...register("about")}
            id="about"
            className="form-control"
          />
        </Field>
        <div className="button-row">
          <Button variant="secondary" onClick={() => navigate("/education")}>
            {"<"} Previous
          </Button>
          <Button ref={ref}>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
});
