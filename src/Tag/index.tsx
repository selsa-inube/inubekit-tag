import { StyledTag } from "./styles";
import { Appearance, Weight } from "./props";
import { Text } from "@inubekit/text";
import { inube } from "@inubekit/foundations";

interface ITag {
  appearance: Appearance;
  weight?: Weight;
  label: string;
}

const Tag = (props: ITag) => {
  const { appearance, weight = "normal", label } = props;

  return (
    <StyledTag $appearance={appearance} $weight={weight}>
      <Text
        type="label"
        appearance={
          inube.tag[appearance][weight].content
            .appearance as keyof typeof inube.tag
        }
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
