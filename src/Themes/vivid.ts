import { Theme } from './themes';

export const VividColors = {
  minionYellow: '#FFE74C',
  fieryRose: '#FF5964',
  screaminGreen: '#6BF178',
  blueJeans: '#35A7FF',
};

const VividTheme: Theme = {
  name: 'vivid',
  primaryColor: VividColors.blueJeans,
  backgroundColor: VividColors.minionYellow,
  defaultTextColor: 'black',
  footerBackgroundColor: 'white',
  navBackgroundColor: VividColors.fieryRose,
  secondaryTextColor: 'white',
  cardBackgroundColor: 'white',
  secondaryColor: VividColors.screaminGreen,
};

export default VividTheme;
