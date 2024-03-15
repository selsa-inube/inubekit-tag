import { StyledTag } from "./styles";
import { Appearance } from "./props";
import { Text } from "@inubekit/text";
import { inube } from "@inubekit/foundations";

interface ITag {
  appearance: Appearance;
  weight?: "regular" | "strong";
  label: string;
}

const Tag = (props: ITag) => {
  const { appearance, weight, label } = props;

  return (
    <StyledTag $appearance={appearance} $weight={weight}>
      <Text
        type="label"
        appearance={
          weight === "regular"
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
