import { Theme } from './themes';

export const BlushColors = {
  periwinkleCrayola: '#C9DDFF',
  orchidCrayola: '#ECB0E1',
  blush: '#DE6C83',
  lilacLuster: '#C1AAC0',
  seaGreenCrayola: '#2CF6B3',
};

const BlushTheme: Theme = {
  name: 'Blush',
  primaryColor: BlushColors.blush,
  backgroundColor: BlushColors.periwinkleCrayola,
  defaultTextColor: 'black',
  secondaryTextColor: 'white',
  footerBackgroundColor: BlushColors.seaGreenCrayola,
  navBackgroundColor: BlushColors.orchidCrayola,
  cardBackgroundColor: BlushColors.orchidCrayola,
  secondaryColor: BlushColors.lilacLuster,
};

export default BlushTheme;
