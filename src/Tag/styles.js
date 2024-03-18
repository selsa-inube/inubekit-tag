import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledTag = styled.div`
  display: inline-block;
  border-radius: 4px;
  padding: 0 4px;
  background-color: ${({ theme, $weight, $appearance }) =>
    $weight === "normal"
      ? theme?.tag?.[$appearance]?.normal.background.color ||
        inube.tag[$appearance].normal.background.color
      : theme?.tag?.[$appearance]?.strong.background.color ||
        inube.tag[$appearance].normal.background.color.appearance};
`;

export { StyledTag };
