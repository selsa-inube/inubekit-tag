import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledTag = styled.div`
  display: inline-block;
  border-radius: 4px;
  padding: 0 4px;
  background-color: ${({ $weight, $appearance }) =>
    inube.tag[$appearance][$weight].background.color};
`;

export { StyledTag };
