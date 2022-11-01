import CustomAlert from "@components/utils/alerts/custom-alert/custom-alert";
import {
  ISwapiMovies,
  swapiDataHeaders,
} from "@constants/static-data/swapi-data";
import axios from "axios";
import React, { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import MoviesContainer from "./components/movies-container";

export const MoviesData = createContext<ISwapiMovies[] | []>([]);

const PageMovies = () => {
  const [swapiMovies, setSwapiMovies] = useState<ISwapiMovies[] | []>([]);
  const [displayAlert, setDisplayAlert] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_SWAPI_URL}/films`,
      headers: swapiDataHeaders,
    })
      .then((val) => {
        if (displayAlert) {
          setDisplayAlert(false);
        }

        setSwapiMovies(val?.data?.results);
      })
      .catch((error) => {
        setDisplayAlert(true);
        // eslint-disable-next-line no-console
        console.error("Movies Swapi > ", error?.toString());
      });
  }, [displayAlert]);

  return (
    <MoviesData.Provider value={swapiMovies}>
      <ContainerPageMovies>
        {displayAlert ? (
          <CustomAlert
            title="Error"
            description="Something went wrong with the server try again later"
            severity="error"
          />
        ) : null}

        <MoviesContainer />
      </ContainerPageMovies>
    </MoviesData.Provider>
  );
};

export default PageMovies;

const ContainerPageMovies = styled.div`
  //
`;
