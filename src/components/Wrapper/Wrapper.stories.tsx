import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Wrapper from "./wrapper";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Wrapper",
  component: Wrapper,
} as ComponentMeta<typeof Wrapper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Wrapper> = (args) => (
  <Wrapper {...args} />
);

export const WrapperDemo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
