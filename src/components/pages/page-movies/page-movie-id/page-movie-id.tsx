import CustomCard from "@components/utils/cards/custom-card/custom-card";
import DataPiece from "@components/utils/datapiece/datapiece";
import { routes } from "@constants/routes";
import {
  ISwapiCharacters,
  ISwapiMovies,
  swapiDataHeaders,
} from "@constants/static-data/swapi-data";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getIdFromUrl } from "src/utils/string-manipulation";
import styled from "styled-components";
import { deviceBreakpoints } from "styles/breakpoints";
import { LargeWrapper } from "styles/wrappers";

const PageMovieId = () => {
  const router = useRouter();
  const params = router?.query as unknown as NPageMovieId.IParams;

  const [swapiMovie, setSwapiMovie] = useState<ISwapiMovies | null>(null);
  const [swapiCharacters, setSwapiCharacters] = useState<
    ISwapiCharacters[] | null
  >(null);
  const [displayAlert, setDisplayAlert] = useState(false);

  const handleClick = (url: string) => {
    router.push({
      pathname: routes["characters/characterId"],
      query: { characterId: getIdFromUrl(url) },
    });
  };

  useEffect(() => {
    if (params?.movieid) {
      axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SWAPI_URL}/films/${params?.movieid}`,
        headers: swapiDataHeaders,
      })
        .then((val) => {
          if (displayAlert) {
            setDisplayAlert(false);
          }

          setSwapiMovie(val?.data);
        })
        .catch((error) => {
          setDisplayAlert(true);
          // eslint-disable-next-line no-console
          console.error("Movies Swapi > ", error?.toString());
        });
    } else {
      setDisplayAlert(true);
    }
  }, [displayAlert, params?.movieid]);

  useEffect(() => {
    const fetchCharacterData = async (processUrl: string) => {
      return axios({
        method: "GET",
        url: `${processUrl}`,
        headers: swapiDataHeaders,
      }).then((val) => val?.data);
    };

    const promiseData = async () => {
      const charactersUrlData: string[] = [];

      swapiMovie?.characters?.forEach((value) => {
        charactersUrlData?.push(value);
      });

      let characters: ISwapiCharacters[] | null = await Promise.all(
        charactersUrlData?.map((e) => fetchCharacterData(e))
      )
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error("Swapi Characters ->", error?.toString());
          return null;
        })
        .then((value) => {
          return value;
        });

      if (characters) {
        setSwapiCharacters(characters);
      }
    };

    if (swapiMovie) {
      promiseData();
    }
  }, [swapiMovie, displayAlert]);

  return (
    <ContainerPageMovieId>
      <LargeWrapper>
        <div className="datapiece_container">
          <DataPiece label="Title" text={swapiMovie?.title || "unknown"} />
          <DataPiece
            label="Episode Id"
            text={swapiMovie?.episode_id?.toString() || "unknown"}
          />
          <DataPiece
            label="Opening Crawl"
            text={swapiMovie?.opening_crawl || "unknown"}
          />
          <DataPiece
            label="Director"
            text={swapiMovie?.director || "unknown"}
          />
          <DataPiece
            label="Producer"
            text={swapiMovie?.producer || "unknown"}
          />
          <DataPiece
            label="Release data"
            text={swapiMovie?.release_data || "unknown"}
          />
        </div>
        <div className="custom_card_container">
          {swapiCharacters?.map((character, index) => {
            return (
              <div className="custom_card_item" key={index}>
                <CustomCard
                  title={character?.name}
                  description=""
                  submitTitle={"More"}
                  handleOnClick={() => {
                    handleClick(character?.url);
                  }}
                />
              </div>
            );
          })}
        </div>
      </LargeWrapper>
    </ContainerPageMovieId>
  );
};

export default PageMovieId;

export namespace NPageMovieId {
  export interface IParams {
    movieid: string;
  }
}

const ContainerPageMovieId = styled.div`
  padding: 20px 0;

  .datapiece_container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .custom_card_container {
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media ${deviceBreakpoints.tablet} {
      justify-content: center;
    }
  }

  .custom_card_item {
    width: 250px;
    max-width: 300px;
    height: 200px;

    @media ${deviceBreakpoints.tablet} {
      width: 100%;
      max-width: inherit;
    }
  }
`;
