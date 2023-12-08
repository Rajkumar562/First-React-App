import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
        /* onClose is a function which is called from outside by the parent app.tsx which is then passed 
        onto the property onClick.React will call the function onClose when user clicks on the button*/
      ></button>
    </div>
  );
};

export default Alert;
