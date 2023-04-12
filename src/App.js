import { useRef } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AppProvider } from "./state";
import { Contact } from "./Steps/Contact";
import { Education } from "./Steps/Education";
import { About } from "./Steps/About";
import { Confirm } from "./Steps/Confirm";
import { Stepper } from "./Steps/Stepper";
import { Home } from "./Home";

export const App = () => {
  const buttonRef = useRef();

  const onStepChange = () => {
    buttonRef.current?.click();
  };

  const router = createBrowserRouter([
    {
      element: (
        <>
          <Stepper onStepChange={onStepChange} />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact ref={buttonRef} />,
        },
        { path: "/education", element: <Education ref={buttonRef} /> },
        { path: "/about", element: <About ref={buttonRef} /> },
        { path: "/confirm", element: <Confirm /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  );
};
