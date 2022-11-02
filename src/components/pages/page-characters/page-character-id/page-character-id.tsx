import CustomAlert from "@components/utils/alerts/custom-alert/custom-alert";
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
import React, { useState, useEffect } from "react";
import { getIdFromUrl } from "src/utils/string-manipulation";
import styled from "styled-components";
import { deviceBreakpoints } from "styles/breakpoints";
import { LargeWrapper } from "styles/wrappers";

const PageCharacterId = () => {
  const router = useRouter();
  const params = router?.query as unknown as NPageCharacterId.IParams;

  const [swapiCharacter, setSwapiCharacter] = useState<ISwapiCharacters | null>(
    null
  );
  const [swapiMovies, setSwapiMovies] = useState<ISwapiMovies[] | null>(null);
  const [displayAlert, setDisplayAlert] = useState(false);

  const handleClick = (url: string) => {
    router.push({
      pathname: routes["movies/movieId"],
      query: { movieId: getIdFromUrl(url) },
    });
  };

  useEffect(() => {
    if (params?.characterId) {
      axios({
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_SWAPI_URL}/people/${params?.characterId}`,
        headers: swapiDataHeaders,
      })
        .then((val) => {
          if (displayAlert) {
            setDisplayAlert(false);
          }
          setSwapiCharacter(val?.data);
        })
        .catch((error) => {
          setDisplayAlert(true);
          // eslint-disable-next-line no-console
          console.error("Movies Swapi > ", error?.toString());
        });
    } else {
      setDisplayAlert(true);
    }
  }, [displayAlert, params?.characterId]);

  useEffect(() => {
    const fetchCharacterData = async (processUrl: string) => {
      return axios({
        method: "GET",
        url: `${processUrl}`,
        headers: swapiDataHeaders,
      }).then((val) => val?.data);
    };

    const promiseData = async () => {
      const filmsUrlData: string[] = [];

      swapiCharacter?.films?.forEach((value) => {
        filmsUrlData?.push(value);
      });

      let films: ISwapiMovies[] | null = await Promise.all(
        filmsUrlData?.map((e) => fetchCharacterData(e))
      )
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error("Swapi Characters ->", error?.toString());
          return null;
        })
        .then((value) => {
          return value;
        });

      if (films) {
        setSwapiMovies(films);
      }
    };

    if (swapiCharacter) {
      promiseData();
    }
  }, [swapiCharacter, displayAlert]);

  return (
    <ContainerPageCharacterId>
      {displayAlert ? (
        <CustomAlert
          title="Error"
          description="Something went wrong with the server try again later"
          severity="error"
        />
      ) : null}
      <div className="container">
        <LargeWrapper>
          <div className="datapiece_container">
            <DataPiece label="Name" text={swapiCharacter?.name || "unknown"} />
            <DataPiece
              label="Height"
              text={swapiCharacter?.height || "unknown"}
            />
            <DataPiece
              label="Height"
              text={swapiCharacter?.height || "unknown"}
            />
            <DataPiece
              label="weight"
              text={swapiCharacter?.mass || "unknown"}
            />
            <DataPiece
              label="hair color"
              text={swapiCharacter?.hair_color || "unknown"}
            />
            <DataPiece
              label="hair color"
              text={swapiCharacter?.skin_color || "unknown"}
            />
            <DataPiece
              label="hair color"
              text={swapiCharacter?.eye_color || "unknown"}
            />
            <DataPiece
              label="hair color"
              text={swapiCharacter?.birth_year || "unknown"}
            />
            <DataPiece
              label="hair color"
              text={swapiCharacter?.gender || "unknown"}
            />
          </div>
          <div className="custom_card_container">
            {swapiMovies?.map((film, index) => {
              return (
                <div className="custom_card_item" key={index}>
                  <CustomCard
                    title={film?.title}
                    description=""
                    submitTitle={"More"}
                    handleOnClick={() => {
                      handleClick(film?.url);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </LargeWrapper>
      </div>
    </ContainerPageCharacterId>
  );
};

export default PageCharacterId;

export namespace NPageCharacterId {
  export interface IParams {
    characterId: string;
  }
}

const ContainerPageCharacterId = styled.div`
  .container {
    padding: 20px 0;
  }

  .datapiece_container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
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

  .custom_card_item {
    width: 250px;
    max-width: 300px;
    height: 200px;

    @media ${deviceBreakpoints.tablet} {
      width: 100%;
      max-width: inherit;
    }
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
`;
