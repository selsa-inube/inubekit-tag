import { StyledTag } from "./styles";
import { ITagAppearance, ITagWeight } from "./props";
import { ITextAppearance, Text } from "@inubekit/text";
import { inube } from "@inubekit/foundations";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface ITag {
  appearance: ITagAppearance;
  weight?: ITagWeight;
  label: string;
}

const Tag = (props: ITag) => {
  const { appearance, weight = "normal", label } = props;
  const theme: typeof inube = useContext(ThemeContext);
  const textAppearance = (appearance: ITextAppearance, weight: ITagWeight) => {
    return (theme?.tag?.[appearance][weight]?.content?.appearance ||
      inube.tag[appearance][weight].content.appearance) as ITextAppearance;
  };

  return (
    <StyledTag $appearance={appearance} $weight={weight}>
      <Text
        type="label"
        appearance={textAppearance(appearance, weight)}
        size="small"
        textAlign="start"
      >
        {label}
      </Text>
    </StyledTag>
  );
};

export { Tag };
export type { ITag };
