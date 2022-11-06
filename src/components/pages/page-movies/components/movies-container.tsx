import CustomCard from "@components/utils/cards/custom-card/custom-card";
import { routes } from "@constants/routes";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import {
  getIdFromUrl,
  limitStringsWithWords,
} from "src/utils/string-manipulation";
import styled from "styled-components";
import { deviceBreakpoints } from "styles/breakpoints";
import { LargeWrapper } from "styles/wrappers";
import { MoviesData } from "../page-movies";

const MoviesContainer = () => {
  const movieData = useContext(MoviesData);
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push({
      pathname: routes["movies/movieId"],
      query: { movieId: getIdFromUrl(url) },
    });
  };

  return (
    <ContainerPageMoviesContainer>
      <LargeWrapper>
        <div className="card_container">
          {movieData?.map((movie) => {
            return (
              <div className="custom_card_item" key={movie?.episode_id}>
                <CustomCard
                  title={movie?.title}
                  description={limitStringsWithWords(movie?.opening_crawl, 128)}
                  submitTitle={"More"}
                  handleOnClick={() => {
                    handleClick(movie?.url);
                  }}
                />
              </div>
            );
          })}
        </div>
      </LargeWrapper>
    </ContainerPageMoviesContainer>
  );
};

export default MoviesContainer;

const ContainerPageMoviesContainer = styled.div`
  padding: 50px 0;

  .card_container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media ${deviceBreakpoints.tablet} {
      justify-content: center;
    }
  }

  .custom_card_item {
    max-width: 300px;
    height: 200px;

    @media ${deviceBreakpoints.tablet} {
      width: 100%;
      max-width: inherit;
    }
  }
`;
