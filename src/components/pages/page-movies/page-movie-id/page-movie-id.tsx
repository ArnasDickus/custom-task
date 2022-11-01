import {
  ISwapiMovies,
  swapiDataHeaders,
} from "@constants/static-data/swapi-data";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LargeWrapper } from "styles/wrappers";

const PageMovieId = () => {
  const router = useRouter();
  const params = router?.query as unknown as NPageMovieId.IParams;

  const [swapiMovie, setSwapiMovie] = useState<ISwapiMovies | null>(null);
  const [displayAlert, setDisplayAlert] = useState(false);
  console.log("swapiMovie", swapiMovie);

  // console.log("params", params);
  // console.log("swapiMovie", swapiMovie);
  // console.log(
  //   "${process.env.NEXT_PUBLIC_SWAPI_URL}/films/${params?.movieId}",
  //   `${process.env.NEXT_PUBLIC_SWAPI_URL}/films/${params?.movieId}`
  // );
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

  return (
    <ContainerPageMovieId>
      <LargeWrapper>
        <p>PageMovieId</p>
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
  //
`;
