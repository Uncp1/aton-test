import { Button, useMantineColorScheme } from '@mantine/core';
import { FC } from 'react';

const Header: FC = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const toggleTheme = () => {
    if (colorScheme === 'dark') {
      setColorScheme('light');
    } else {
      setColorScheme('dark');
    }
  };
  return (
    <header>
      <h1>My App</h1>
      <Button onClick={toggleTheme} />
    </header>
  );
};

export default Header;
