import { StyledTag } from "./styles";
import { ITagAppearance, ITagWeight } from "./props";
import { ITextAppearance, Text } from "@inubekit/text";
import { inube } from "@inubekit/foundations";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Icon } from "@inubekit/icon";
import { MdClear } from "react-icons/md";
import { Stack } from "@inubekit/stack";

interface ITag {
  appearance: ITagAppearance;
  id?: string;
  weight?: ITagWeight;
  label: string;
  removable?: boolean;
  onClose?: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

const Tag = (props: ITag) => {
  const {
    appearance,
    weight = "normal",
    label,
    removable = false,
    onClose,
  } = props;
  const theme: typeof inube = useContext(ThemeContext);
  const textAppearance = (appearance: ITextAppearance, weight: ITagWeight) => {
    return (theme?.tag?.[appearance][weight]?.content?.appearance ||
      inube.tag[appearance][weight].content.appearance) as ITextAppearance;
  };

  const interceptonClose = (e: React.MouseEvent<Element, MouseEvent>) => {
    try {
      onClose && onClose(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  return (
    <StyledTag $appearance={appearance} $weight={weight} $removable={removable}>
      <Stack alignItems="center" gap="2px">
        <Text
          type="label"
          appearance={textAppearance(appearance, weight)}
          size="small"
          textAlign="start"
          weight="bold"
        >
          {label}
        </Text>
        {removable && (
          <Icon
            onClick={interceptonClose}
            appearance={textAppearance(appearance, weight)}
            icon={<MdClear />}
            size="11px"
          ></Icon>
        )}
      </Stack>
    </StyledTag>
  );
};

export { Tag };
export type { ITag };
