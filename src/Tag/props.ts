const appearances = [
  "primary",
  "success",
  "error",
  "warning",
  "help",
  "dark",
  "gray",
  "light",
] as const;

export type Appearance = (typeof appearances)[number];

export const parameters = {
  docs: {
    description: {
      component: "Icons used to communicate actions and decisions graphically",
    },
  },
};

export const props = {
  label: {
    description: "Controls the text that the tag will display",
  },
  appearance: {
    control: "select",
    options: appearances,
    description: "Controls the background color of the tag",
  },
};
