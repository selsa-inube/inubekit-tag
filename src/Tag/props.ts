const appearances = [
  "primary",
  "success",
  "danger",
  "warning",
  "help",
  "dark",
  "gray",
  "light",
] as const;

type Appearance = (typeof appearances)[number];

const parameters = {
  docs: {
    description: {
      component: "Icons used to communicate actions and decisions graphically",
    },
  },
};

const props = {
  label: {
    description: "Controls the text that the tag will display",
  },
  appearance: {
    control: "select",
    options: appearances,
    description: "Controls the background color of the tag",
  },
};

export { parameters, props };
export type { Appearance };
