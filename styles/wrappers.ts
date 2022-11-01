import styled from "styled-components";
import { deviceBreakpoints } from "./breakpoints";

export const LargeWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1536px;
  padding-right: 24px;
  padding-left: 24px;

  @media ${deviceBreakpoints.mobileL} {
    padding-right: 12px;
    padding-left: 12px;
  }
`;
