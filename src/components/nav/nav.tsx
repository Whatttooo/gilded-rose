import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import ThemePicker from '../ThemePicker';
import { Theme } from '../../Themes/themes';

const NavHeader = styled.header`
  display: flex;
  min-height: 50px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.navBackgroundColor};
  padding: 20px;
  color: ${(props) => props.theme.secondaryTextColor};
`;

const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface NavProps {
  onThemeChange(theme: Theme): void;
}

const Nav = ({ onThemeChange }: NavProps) => (
  <NavHeader>
    <div>logo</div>
    <NavLinkWrapper>
      <Link href="/">
        <a style={{ paddingRight: '10px' }}>Home</a>
      </Link>
      <Link href="/store/products/[id]">
        <a style={{ paddingRight: '10px' }}>Store</a>
      </Link>
      <Link href="/contact">
        <a style={{ paddingRight: '10px' }}>Contact</a>
      </Link>{' '}
      |
      <ThemePicker onThemeChange={onThemeChange} />
    </NavLinkWrapper>
  </NavHeader>
);

export default Nav;
