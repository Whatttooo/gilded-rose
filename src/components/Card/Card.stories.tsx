import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const defaultCard = Template.bind({});
defaultCard.args = {
  title: 'Hello there',
};

export const legendaryCard = Template.bind({});
legendaryCard.args = {
  title: 'Hello there',
  legendary: true,
};
