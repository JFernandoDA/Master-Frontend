import { css } from "@emotion/css";

export const centeredDiv = css`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin-top: 2rem;
  @media (min-width: 270px) {
    justify-items: center;
  }
`;
