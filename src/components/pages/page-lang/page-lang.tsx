import DataPiece from "@components/utils/datapiece/datapiece";
import React from "react";
import styled from "styled-components";
import { LargeWrapper } from "styles/wrappers";

const PageLang = () => {
  return (
    <ContainerPageLang>
      <LargeWrapper>
        <h2>Thoughts developing application</h2>
        <div>
          <p>Major used libraries</p>
          <ul>
            <li>
              <b>Material UI</b> - Mostly for styling to save time. In
              professional development I would only use material UI for building
              difficult components datepicker, table. To avoid dealing with
              overiding styles.
            </li>
            <li>
              <b>Axios</b> - library for fetching data. Use it mostly because of
              familiarity ant it looked superior to fetch.
            </li>
            <li>
              <b>Lodash</b> - Powerful manipulation library. Often used useful
              simplifying javascript code
            </li>
            <li>
              <b>Next</b> - Very powerful framework, as a fan of Angular. I
              prefer a single library which does a lot of things instead of
              using multiple libraries for the same things.
            </li>
            <li>
              <b>Styled-components</b> - Favourite way to style components.
              Allows to write minimalistic logic inside css
            </li>
          </ul>
        </div>
        <DataPiece
          label="Redux Context API"
          text="As a developer I didn't find a reason to use either. So I forcefully used Context API to avoid installing additional library"
        />
        <DataPiece
          label="Using Redux"
          text="I think implementing singular alert in entire website could be good usage for redux in this project"
        />
        <DataPiece
          label="UI Framework"
          text="Decided to use Material UI. Mostly because I often use it on personal projects."
        />
        <DataPiece
          label="Using Swapi API"
          text="I experienced Swapi shortage for a few hours. I don't think in movies/1 page doing multiple api calls and fetching each character page in order to receive name was a most performant thing. However due to api limitation I didn't see other choice."
        />
        <DataPiece
          label="Ideas to improve project"
          text="I could write unit tests, add translations, add route translations, implement server side rendering although github pages wouldn't work correctly. Implement a way to measure performance etc."
        />
      </LargeWrapper>
    </ContainerPageLang>
  );
};

export default PageLang;

const ContainerPageLang = styled.div`
  padding: 20px 0;

  li {
    padding-bottom: 20px;
  }
`;
