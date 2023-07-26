import { StyledButton, variants } from "../components/StyledButton";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "StyledButton",
  component: StyledButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: Object.keys(variants),
      control: { type: "radio" },
    },
  },
} as Meta<typeof StyledButton>;

type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "primary",
  },
};
