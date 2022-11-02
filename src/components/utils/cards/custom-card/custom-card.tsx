import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const CustomCard = (props: NCustomCard.IProps) => {
  const { title, description, submitTitle, handleOnClick } = props;
  return (
    <ContainerCustomCard>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOnClick}>
            {submitTitle}
          </Button>
        </CardActions>
      </Card>
    </ContainerCustomCard>
  );
};

export namespace NCustomCard {
  export interface IProps {
    title: string;
    description: string;
    submitTitle: string;
    handleOnClick: () => void;
  }
}

export default CustomCard;

const ContainerCustomCard = styled.div`
  height: inherit;

  .MuiPaper-root {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
