import { X } from "lucide-react";
import "./Ui/Alert/index.scss";
import { ReactNode } from "react";
import { AlertType } from "../types";

interface IProps {
  type: AlertType;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ type, icon, title, description, children }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>
          <h2>{title}</h2>
        </div>
        <X className="close" size={25} />
      </div>
      
      {children ? children : <p>{description}</p> }
    </div>
  );
};

export default Alert;
