import { Alert, AlertColor, AlertTitle } from "@mui/material";
import React from "react";

const CustomAlert = (props: NCustomAlert.IProps) => {
  const { severity, title, description } = props;
  return (
    <div>
      <Alert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {description}
      </Alert>
    </div>
  );
};

export namespace NCustomAlert {
  export interface IProps {
    severity: AlertColor;
    title: string;
    description: React.ReactNode;
  }
}

export default CustomAlert;
