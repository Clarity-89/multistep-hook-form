export const Form = ({ children, ...props }) => {
  return (
    <form className="row" {...props} noValidate>
      {children}
    </form>
  );
};
