import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
import { FormPrompt } from "../FormPrompt";

export const Contact = forwardRef((props, ref) => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { isDirty },
  } = useForm({
    defaultValues: state,
    mode: "onSubmit",
  });

  const saveData = (data) => {
    setState({ ...state, ...data });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)} nextStep={"/education"}>
      <FormPrompt hasUnsavedChanges={isDirty} />
      <fieldset>
        <legend>Contact</legend>
        <Field label="First name">
          <Input {...register("firstName")} id="first-name" />
        </Field>
        <Field label="Last name">
          <Input {...register("lastName")} id="last-name" />
        </Field>
        <Field label="Email">
          <Input {...register("email")} type="email" id="email" />
        </Field>
        <Field label="Password">
          <Input {...register("password")} type="password" id="password" />
        </Field>
        <Button ref={ref}>Next {">"}</Button>
      </fieldset>
    </Form>
  );
});
