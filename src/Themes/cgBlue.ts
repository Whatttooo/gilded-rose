import { Theme } from './themes';

export const CgBlueColors = {
  blueNcs: '#2589BD',
  cgBlue: '#187795',
  ming: '#38686A',
  laurelGreen: '#A3B4A2',
  bone: '#CDC6AE',
};

const CgBlueTheme: Theme = {
  name: 'cgBlue',
  primaryColor: CgBlueColors.blueNcs,
  backgroundColor: CgBlueColors.laurelGreen,
  defaultTextColor: 'white',
  secondaryTextColor: 'white',
  footerBackgroundColor: CgBlueColors.ming,
  navBackgroundColor: CgBlueColors.ming,
  cardBackgroundColor: CgBlueColors.bone,
  secondaryColor: CgBlueColors.cgBlue,
};

export default CgBlueTheme;
