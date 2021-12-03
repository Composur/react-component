import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
// import { Menu } from './Menu';
import Menu from './index';
import MenuItem from './MenuItem'


export const defaultMenu = () => (
  <Menu defaultIndex={0} onSelect={(index) => { action(`clicked ${index} item`) }} >
    <MenuItem>
      菜单一
    </MenuItem>
    <MenuItem disabled>
      禁用菜单
    </MenuItem>
    <MenuItem>
      菜单三
    </MenuItem>
  </Menu>
)

export default {
  title: 'Example/Menu',
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  defaultIndex: 0
}