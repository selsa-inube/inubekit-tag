import styled from "styled-components";

import { inube } from "@inubekit/foundations";

export const StyledTag = styled.div`
  display: inline-block;
  border-radius: 4px;
  padding: 0 ${inube.spacing.s050};
  background-color: ${({ theme, $appearance }) =>
    theme?.color?.surface?.[$appearance]?.regular ||
    inube.color.surface[$appearance].regular};
`;
