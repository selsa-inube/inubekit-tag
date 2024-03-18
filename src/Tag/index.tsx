import { StyledTag } from "./styles";
import { Appearance, Weight } from "./props";
import { Text } from "@inubekit/text";
import { inube } from "@inubekit/foundations";

interface ITag {
  appearance: Appearance;
  weight: Weight;
  label: string;
}

const Tag = (props: ITag) => {
  const { appearance, weight, label } = props;

  return (
    <StyledTag $appearance={appearance} $weight={weight}>
      <Text
        type="label"
        appearance={
          weight === "normal"
            ? (inube.tag[appearance].normal.content
                .apparence as keyof typeof inube.tag)
            : (inube.tag[appearance].strong.content
                .apparence as keyof typeof inube.tag)
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
