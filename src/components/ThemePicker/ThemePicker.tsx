import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import themes, { Theme } from '../../Themes/themes';

const ThemeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
`;

const ThemeColorCircle = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme};
  border: ${(props) => (props.selected ? '1px solid white' : null)};
  margin: 0 5px;
  cursor: pointer;
`;

interface ThemePickerProps {
  onThemeChange(theme: Theme): void;
}

const ThemePicker = ({ onThemeChange }: ThemePickerProps) => {
  const themeCurrent = useContext(ThemeContext);
  return (
    <ThemeWrapper>
      {themes.map((theme) => (
        <ThemeColorCircle
          key={theme.name}
          theme={theme.backgroundColor}
          onClick={() => onThemeChange(theme)}
        />
      ))}
    </ThemeWrapper>
  );
};

export default ThemePicker;
