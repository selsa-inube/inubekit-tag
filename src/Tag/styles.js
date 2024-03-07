import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledTag = styled.div`
  display: inline-block;
  border-radius: 4px;
  padding: 0 4px;
  background-color: ${({ theme, $appearance }) =>
    theme?.tag?.[$appearance]?.strong?.background?.color ||
    inube.tag[$appearance].strong.background.color};
`;
export { StyledTag };
