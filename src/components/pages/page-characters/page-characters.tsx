import CustomAlert from "@components/utils/alerts/custom-alert/custom-alert";
import CustomCard from "@components/utils/cards/custom-card/custom-card";
import { routes } from "@constants/routes";
import {
  ISwapiCharacters,
  swapiDataHeaders,
} from "@constants/static-data/swapi-data";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import { getIdFromUrl } from "src/utils/string-manipulation";
import styled from "styled-components";
import { deviceBreakpoints } from "styles/breakpoints";
import { LargeWrapper } from "styles/wrappers";

const PageCharacters = () => {
  const router = useRouter();

  const [swapiCharacters, setSwapiCharacters] = useState<
    ISwapiCharacters[] | []
  >([]);
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [searchTextVal, setSearchTextVal] = useState("");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState<number>(0);

  const [displayAlert, setDisplayAlert] = useState(false);

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      setDebouncedSearchText(criteria);
    }, 1000)
  ).current;

  const handleClick = (characterUrl: string) => {
    router.push({
      pathname: routes["characters/characterId"],
      query: { characterId: getIdFromUrl(characterUrl) },
    });
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_SWAPI_URL}/people?search=${debouncedSearchText}&page=${page}`,
      headers: swapiDataHeaders,
    })
      .then((val) => {
        if (displayAlert) {
          setDisplayAlert(false);
        }
        if (!pageCount) {
          setPageCount(val?.data?.count);
        }

        setSwapiCharacters(val?.data?.results);
      })
      .catch((error) => {
        setDisplayAlert(true);
        // eslint-disable-next-line no-console
        console.error("Movies Swapi > ", error?.toString());
      });
  }, [displayAlert, debouncedSearchText, page, pageCount]);

  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <ContainerPageCharacters>
      {displayAlert ? (
        <CustomAlert
          title="Error"
          description="Something went wrong with the server try again later"
          severity="error"
        />
      ) : null}
      <div className="container">
        <LargeWrapper>
          <div>
            {page < 2 ? (
              <TextField
                label="Search characters"
                variant="standard"
                value={searchTextVal}
                onChange={(e) => {
                  debouncedSearch(e?.target?.value);
                  setSearchTextVal(e?.target?.value);
                }}
              />
            ) : null}
          </div>
          <div className="custom_card_container">
            {swapiCharacters?.map((character, index) => {
              return (
                <div key={index} className="custom_card_item">
                  <CustomCard
                    key={index}
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
          <div className="button_container">
            <Button
              disabled={page <= 1}
              onClick={() => {
                if (page > 1) {
                  setDebouncedSearchText("");
                  setSearchTextVal("");
                  setPage((oldVal) => oldVal - 1);
                }
              }}
            >
              Previous Page
            </Button>
            <Button
              disabled={page * 10 >= pageCount}
              onClick={() => {
                if (page * 10 < pageCount) {
                  setDebouncedSearchText("");
                  setSearchTextVal("");
                  setPage((oldVal) => oldVal + 1);
                }
              }}
            >
              Next Page
            </Button>
          </div>
        </LargeWrapper>
      </div>
    </ContainerPageCharacters>
  );
};

export default PageCharacters;

const ContainerPageCharacters = styled.div`
  .container {
    padding: 20px 0;
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

  .button_container {
    padding-top: 20px;
    display: flex;
    gap: 20px;
  }
`;
