import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import IconCom from './index';


// const Icon = () => {
//   return (
//     <IconCom theme='primary' icon={faCheckSquare} style={{ fontSize: '50px' }} />
//   )
// }


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Icon',
  component: IconCom,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof IconCom>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconCom> = (args) => <IconCom {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Icon',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Icon',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Icon',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Icon',
// };
Primary.args = {
  theme: 'primary',
  icon: 'flag-checkered',
  style: { fontSize: '50px' }
}