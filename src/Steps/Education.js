import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";

export const Education = () => {
  const [state, setState] = useAppState();
  const { handleSubmit, register } = useForm({ defaultValues: state });
  const navigate = useNavigate();

  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/about");
  };

  return (
    <Form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Education</legend>
        <Field label="University">
          <Input {...register("university")} id="university" />
        </Field>
        <Field label="Degree">
          <Input {...register("degree")} id="degree" />
        </Field>
        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/">
            {"<"} Previous
          </Link>
          <Button>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
};
