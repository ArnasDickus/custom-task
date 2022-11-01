import CustomCard from "@components/utils/cards/custom-card/custom-card";
import { routes } from "@constants/routes";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { limitStringsWithWords } from "src/utils/string-manipulation";
import styled from "styled-components";
import { LargeWrapper } from "styles/wrappers";
import { MoviesData } from "../page-movies";

const MoviesContainer = () => {
  const movieData = useContext(MoviesData);
  const router = useRouter();

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
                    router.push({
                      pathname: routes["movies/movieId"],
                      query: { movieId: movie?.episode_id },
                    });
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
  }

  .custom_card_item {
    max-width: 300px;
    height: 200px;
  }
`;
