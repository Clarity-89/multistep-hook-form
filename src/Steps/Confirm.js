import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Button, Form, Section, SectionRow } from "../Forms";

export const Confirm = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    // Submit data to the server
  };

  const data = [
    {
      title: "Personal info",
      url: "/",
      items: [
        { name: "First name", value: state.firstName, required: true },
        { name: "Last name", value: state.lastName },
        { name: "Email", value: state.email, required: true },
        {
          name: "Password",
          value: !!state.password ? "*****" : "",
          required: true,
        },
      ],
    },
    {
      title: "Education",
      url: "/education",
      items: [
        { name: "University", value: state.university },
        { name: "Degree", value: state.degree },
      ],
    },
    {
      title: "About",
      url: "/about",
      items: [{ name: "About me", value: state.about }],
    },
  ];

  const disableSubmit = data.some((section) =>
    section.items.some((item) => item.required && !item.value)
  );

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      {data.map(({ title, url, items }) => {
        return (
          <Section title={title} url={url} key={title}>
            {items.map(({ name, value, required }) => {
              const isMissingValue = required && !value;
              return (
                <SectionRow key={name}>
                  <div className={isMissingValue ? "text-warning" : ""}>
                    {name}
                  </div>
                  <div>
                    {isMissingValue ? (
                      <span className={"warning-sign"}>!</span>
                    ) : (
                      value
                    )}
                  </div>
                </SectionRow>
              );
            })}
          </Section>
        );
      })}

      <div className="d-flex justify-content-start">
        <Button disabled={disableSubmit}>Submit</Button>
      </div>
    </Form>
  );
};
