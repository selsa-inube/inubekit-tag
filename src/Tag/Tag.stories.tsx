import { props, parameters } from "./props";
import { ITag, Tag } from ".";

const story = {
  title: "data/Tag",
  component: Tag,
  parameters,
  argTypes: props,
};

const Default = (args: ITag) => <Tag {...args} />;

Default.args = {
  appearance: "primary",
  label: "Tag",
  weight: "regular",
};

export default story;
export { Default };
