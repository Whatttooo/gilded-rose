import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemePicker from './ThemePicker';

export default {
  title: 'Components/ThemePicker',
  component: ThemePicker,
} as ComponentMeta<typeof ThemePicker>;

const Template: ComponentStory<typeof ThemePicker> = (args) => (
  <ThemePicker {...args} />
);

export const defaultNav = Template.bind({});
