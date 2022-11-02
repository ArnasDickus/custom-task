import CustomAlert from "@components/utils/alerts/custom-alert/custom-alert";
import CustomCard from "@components/utils/cards/custom-card/custom-card";
import DataPiece from "@components/utils/datapiece/datapiece";
import React from "react";
import styled from "styled-components";

const PageExamples = () => {
  return (
    <ContainerPageExamples>
      <h2>Reusable components</h2>
      <p>Alerts</p>
      <CustomAlert title="Title" description="description" severity="error" />
      <CustomAlert title="Title" description="description" severity="info" />
      <CustomAlert title="Title" description="description" severity="success" />
      <CustomAlert title="Title" description="description" severity="warning" />
      <h2>Custom Cards</h2>
      <CustomCard
        title="Custom Card"
        description="Custom Card description"
        handleOnClick={() => {
          //
        }}
        submitTitle="Submit button title"
      />
      <h2>Data Pieces</h2>
      <DataPiece label="Title" text="Text " />
    </ContainerPageExamples>
  );
};

export default PageExamples;

const ContainerPageExamples = styled.div`
  padding: 20px;
`;
