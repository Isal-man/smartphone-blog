// CSS
import "./Dialog.css";

const Dialog = ({ children, className }) => {
  return (
    <div className="background-layout">
      <div className={`dialog-wrapper card ${className}`}>{children}</div>
    </div>
  );
};

export default Dialog;
