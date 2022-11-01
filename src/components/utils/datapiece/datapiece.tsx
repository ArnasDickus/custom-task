import React from "react";
import styled from "styled-components";

const DataPiece = (props: NDataPiece.IProps) => {
  const { label, text } = props;
  return (
    <ContainerDataPiece>
      <label className="data_piece_label">{label}</label>
      <p className="data_piece_text">{text}</p>
    </ContainerDataPiece>
  );
};

export default DataPiece;

export namespace NDataPiece {
  export interface IProps {
    label: string;
    text: string;
  }
}

const ContainerDataPiece = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;

  .data_piece_label {
    height: fit-content;
    margin-top: 4px;
    font-size: 12px;
    line-height: 15px;
    color: rgb(123, 123, 123);
  }

  .date_piece_text {
    margin: 4px 0 0;
    display: flex;
    min-width: 180px;
  }
`;
