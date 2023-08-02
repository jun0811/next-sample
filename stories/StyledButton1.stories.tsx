import { StyledButton, variants } from "../components/StyledButton";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

export default {
  title: "StyledButton",
  component: StyledButton,
} as Meta<typeof StyledButton>;

type Story = StoryObj<typeof StyledButton>;

// export const Primary: Story = {

// args: {
//     variant: "primary",
//     children: "primary",
//   },
// };
export const Primary = (props: any) => {
  return <StyledButton {...props}>Primary</StyledButton>;
};
export const Success = (props: any) => {
  return <StyledButton {...props}>Success</StyledButton>;
};
export const Transparent = (props: any) => {
  return <StyledButton {...props}>Transparent</StyledButton>;
};
