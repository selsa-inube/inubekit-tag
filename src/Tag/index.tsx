import { StyledTag } from "./styles";
import { ITagAppearance, ITagWeight } from "./props";
import { Text } from "@inubekit/text";
import { inube } from "@inubekit/foundations";

interface ITag {
  appearance: ITagAppearance;
  weight?: ITagWeight;
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
