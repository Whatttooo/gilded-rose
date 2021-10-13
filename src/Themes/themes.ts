import CgBlueTheme from './cgBlue';
import VividTheme from './vivid';
import BlushTheme from './blush';

interface Theme {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  defaultTextColor: string;
  backgroundColor: string;
  navBackgroundColor: string;
  secondaryTextColor?: string;
  cardBackgroundColor: string;
  footerBackgroundColor: string;
}

const themes: Theme[] = [CgBlueTheme, VividTheme, BlushTheme];

export type { Theme };
export default themes;
