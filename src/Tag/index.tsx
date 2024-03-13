import { StyledTag } from "./styles";
import { Appearance, Weights } from "./props";
import { Text } from "@inubekit/text";

const darkTextAppearances = ["warning", "gray", "light"];

const getTextAppearance = (
  appearance: Appearance,
  weight: Weights
): Appearance => {
  if (darkTextAppearances.includes(appearance)) return "dark";
  if (weight !== "normal") return "light";
  return appearance;
};

interface ITag {
  appearance: Appearance;
  weight: Weights;
  label: string;
}

const Tag = (props: ITag) => {
  const { appearance, weight, label } = props;

  return (
    <StyledTag $appearance={appearance} $weight={weight}>
      <Text
        type="label"
        appearance={getTextAppearance(appearance, weight)}
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
